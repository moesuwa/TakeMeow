/** テスト対象のメソッドやコンポーネントのファイル */
// テスト対象にするものは、必ずexportすること
import { ref, computed, Ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'boot/i18n';
const { t } = useI18n();

/**
 * 猫のプロフィールを表示するメッセージを作成する。
 * @param name 猫の名前
 * @param age 猫の年齢
 * @param breed 猫の種類
 * @returns 表示するメッセージ
 */
export const printCatProfileMessage = (name: string, age: number, breed?: string) => {
  const nametext = t('testSample.myCatName', { name });
  const ageText = t('testSample.myCatAge', { age });
  const breedText = breed ? t('testSample.myCatBreed', { breed }) : t('testSample.myCatBreedDefault');
  return `${nametext}${ageText}${breedText}`;
};

/**
 * 猫のプロフィールを管理するクラス
 * @param name 猫の名前
 * @param age 猫の年齢
 * @param breed 猫の種類 / 種類がない場合はundefined => 雑種（日本猫）
 */
export class CatProfile {
  private name: string;
  private age: number;
  private breed: string | undefined;

  constructor(name: string, age: number, breed?: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  getName = () => this.name;
  getAge = () => this.age;
  getBreed = () => this.breed;

  /** 猫の名前を変更する */
  changeName = (name: string) => {
    this.name = name;
  };
  /** 猫の年齢を変更する */
  changeAge = (age: number) => {
    this.age = age;
  };
  /** 猫の種類を変更する */
  changeBreed = (breed: string | undefined) => {
    this.breed = breed;
  };
}

/** 猫の食事量を計算するストア */
export const useCatsMealsCalculator = defineStore('catsMealsCalculator', () => {
  /** 食事の種別 */
  const typeOfFood: Ref<'weight' | 'hairball' | 'normal'> = ref('normal');
  /** 猫の体重 */
  const weight: Ref<number> = ref(0);
  /** 猫の年齢 */
  const age: Ref<number> = ref(0);

  /** 食事量を計算する */
  const calculateMeals = computed(() => {
    if (typeOfFood.value === 'weight') {
      return weight.value * 0.02;
    } else if (typeOfFood.value === 'hairball') {
      return weight.value * 0.03;
    }
    return weight.value * 0.04;
  });

  return {
    typeOfFood,
    weight,
    age,
    calculateMeals,
  };
});
