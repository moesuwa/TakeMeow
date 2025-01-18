/** 猫の品種 */
export const Breed = {
  /** 日本猫 */
  Japanese: 'japanese',
  /** 雑種 */
  Mix: 'mix',
  // TODO: 毛色は毛色で作成する
  // /** 三毛猫 */
  // Calico: 'calico',
  // /** 茶トラ */
  // Ginger: 'ginger',
} as const;
export type Breed = (typeof Breed)[keyof typeof Breed];
