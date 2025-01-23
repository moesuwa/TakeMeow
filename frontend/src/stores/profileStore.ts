import { readonly, ref, Ref } from 'vue';
import { defineStore } from 'pinia';
import { CatProfile, createNewCat, UserProfile, createNewUser, Breed } from 'presenters/models';

/**
 * Tの情報を管理するストアクラス。
 * @param storeId 任意の位置となるストアID文字列を指定する
 * @param create 新規のTを生成する関数
 */
export const createProfileStore = <T extends CatProfile | UserProfile>(
  storeId: string,
  create: { (name: string, birth?: Date, weight?: number, breed?: Breed): T } | { (name: string): T }
) =>
  defineStore(
    storeId,
    () => {
      /** Tを管理するMap。キーはプロフィールID。 */
      const profiles: Ref<Map</** ID */ string, T>> = ref(new Map());

      /** 渡したプロファイル情報を保存する。 */
      const save = (profile: T) => profiles.value.set(profile.id, profile);

      /** 指定したIDの情報を削除する。 */
      const remove = (id: string) => profiles.value.delete(id);

      /** 指定したIDの情報を取得する。 */
      const get = (id: string) => profiles.value.get(id);

      // TODO: 削除する
      const setDummy = () => {
        for (let i = 0; i < 5; i++) {
          const profile = create(`Profile ${i}`);
          save(profile);
        }
      };
      setDummy();

      return {
        profiles: readonly(profiles),
        create,
        save,
        remove,
        get,
      };
    },
    { persist: true }
  );

/** 猫のプロフィール情報用インスタンスを作成してエクスポートする */
const createCatProfileStore = createProfileStore<CatProfile>('catProfile', createNewCat);
export const useCatProfileStore = () => createCatProfileStore();

/** ユーザーのプロフィール情報要インスタンスを作成してエクスポートする */
const createUserProfileStore = createProfileStore<UserProfile>('userProfile', createNewUser);
export const useUserProfileStore = () => createUserProfileStore();
