/** テストサンプルファイル */
// 拡張子は「.test.ts」で終わるようにする。
// 実行するには、frontendのルートディレクトリで「yarn test」を実行する。

// import { createPinia } from 'pinia';
import { printCatProfileMessage, CatProfile /** useCatsMealsCalculator */ } from 'test/README/sampleTest';
import { test, expect } from 'vitest';

// テストに使用する際、storeのインポートはVueファイルとは異なる
// const pinia = createPinia();
// const catsMealsCalculator = useCatsMealsCalculator(pinia);

// テストタイトルは日本語で記載する。
test('入力した名前と年齢の猫紹介文を作成する。', () => {
  // テストの答えとして期待する値
  const answer = '私の猫の名前はすみとはなです。2歳です。雑種（日本猫）です。';
  expect(printCatProfileMessage('すみとはな', 2)).toBe(answer);
});

// テストの答えとして期待する値
const name1 = 'すみ';
const name2 = 'はな';
const age1 = 2;
const age2 = 3;
const breed1 = '茶トラ';
const breed2 = '三毛猫';

test('入力した情報が返ってくる。', () => {
  const sampleClass = new CatProfile(name1, age1, breed1);
  expect(sampleClass.getName()).toBe(name1);
  expect(sampleClass.getAge()).toBe(age1);
  expect(sampleClass.getBreed()).toBe(breed1);
});

test('変更した情報が返ってくる。', () => {
  const sampleClass = new CatProfile(name1, age1, breed1);
  sampleClass.changeName(name2);
  expect(sampleClass.getName()).toBe(name2);
  sampleClass.changeAge(age2);
  expect(sampleClass.getAge()).toBe(age2);
  sampleClass.changeBreed(breed2);
  expect(sampleClass.getBreed()).toBe(breed2);
});
