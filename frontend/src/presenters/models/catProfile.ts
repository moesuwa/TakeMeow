import { nanoid } from 'nanoid';
import { Breed } from './breed';

/** 猫の情報 */
export interface CatProfile {
  /** ID */
  id: string;
  /** 名前 */
  name: string;
  /** 年齢 */
  birth: Date | undefined;
  /** 体重 */
  weight: number | undefined;
  /** 猫種 */
  breed: Breed | undefined;
  /** 写真 */
  image: string | undefined;
}

/** 新しい猫情報を生成する */
export const createNewCat = (name: string, birth?: Date, weight?: number, breed?: Breed): CatProfile => {
  const cat: CatProfile = {
    id: nanoid(),
    name: name,
    birth: birth,
    weight: weight,
    breed: breed,
    image: undefined,
  };
  return cat;
};
