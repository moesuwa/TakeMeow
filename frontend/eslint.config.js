import { dirname } from 'path'; // dirnameをインポート
import { fileURLToPath } from 'url'; // fileURLToPathをインポート
import js from '@eslint/js';
import pluginQuasar from '@quasar/app-vite/eslint';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import importPlugin from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import vueEslintParser from 'vue-eslint-parser';

// __dirnameの代わりに使う方法
const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: [],
  },

  ...pluginQuasar.configs.recommended(),
  js.configs.recommended,

  ...pluginVue.configs['flat/essential'],

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      // TypeScript用のパーサーを指定
      parserOptions: {
        parser: [vueEslintParser, typescriptEslintParser],
        tsconfigRootDir: __dirname, // __dirnameを使ってカレントディレクトリを指定
        project: './tsconfig.json', // tsconfig.jsonを指定
        extraFileExtensions: ['.vue'],
      },

      globals: {
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': typescriptEslint, // プラグインをオブジェクト形式で指定
      'vue-eslint-parser': vueEslintParser,
      import: importPlugin,
    },

    rules: {
      'prefer-promise-reject-errors': 'off',

      quotes: ['warn', 'single', { avoidEscape: true }],

      // this rule, if on, would require explicit return type on the `render` function
      '@typescript-eslint/explicit-function-return-type': 'off',

      // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
      '@typescript-eslint/no-var-requires': 'off',

      // The core 'no-unused-vars' rules (in the eslint:recommended rule set)
      // does not work with type definitions
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // `definition for rule 'vue/valid-attribute-name' was not found`というエラーが出るため無効化（eslint-plugin-vue@9.8.0）
      'vue/valid-attribute-name': 'off',

      // consoleの使用の警告。ただし、info, warn, error, assertは許可
      // 主にconsole.logに対して警告する。
      'no-console': ['warn', { allow: ['info', 'warn', 'error', 'assert'] }],

      // vueファイルのタグの属性の順序ルール
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],

      // テンプレート内のコンポーネント名のケバブケースルール
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: true,
          ignores: [],
        },
      ],

      // 自己終了タグのルール
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],

      // import禁止ルール
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['src/*'],
              message:
                '"src/*"ではなくtsconfig.jsonに記述されたエイリアスを使用してください。（import文を設計レイヤー順に正しくソートするため）',
            },
            {
              group: ['./', '../'],
              message: '相対パスではなくtsconfig.jsonに記述されたエイリアスを使用してください。',
            },
          ],
        },
      ],

      // import順序ルール
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'ignore',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            // テストユーティリティは最初にimportする必要があるので、特別にbuiltinかつその最上位に配置する
            { pattern: 'test/utils', group: 'builtin', position: 'before' },
            { pattern: 'quasar', group: 'builtin', position: 'before' },
            { pattern: 'quasar/**', group: 'builtin', position: 'before' },
            { pattern: 'vue', group: 'builtin', position: 'before' },
            { pattern: 'vue/**', group: 'builtin', position: 'before' },
            { pattern: 'domain', group: 'internal', position: 'before' },
            { pattern: 'domain/**', group: 'internal', position: 'before' },
            { pattern: 'boot', group: 'internal', position: 'before' },
            { pattern: 'boot/**', group: 'internal', position: 'before' },
            { pattern: 'interactors', group: 'internal', position: 'before' },
            { pattern: 'interactors/**', group: 'internal', position: 'before' },
            { pattern: 'gateways', group: 'internal', position: 'before' },
            { pattern: 'gateways/**', group: 'internal', position: 'before' },
            { pattern: 'repository', group: 'internal', position: 'before' },
            { pattern: 'repository/**', group: 'internal', position: 'before' },
            { pattern: 'presenters', group: 'internal', position: 'before' },
            { pattern: 'presenters/**', group: 'internal', position: 'before' },
            { pattern: 'stores', group: 'internal', position: 'before' },
            { pattern: 'stores/**', group: 'internal', position: 'before' },
            { pattern: 'ui/components', group: 'internal', position: 'before' },
            { pattern: 'ui/components/atoms', group: 'internal', position: 'before' },
            { pattern: 'ui/components/atoms/**', group: 'internal', position: 'before' },
            { pattern: 'ui/components/molecules', group: 'internal', position: 'before' },
            { pattern: 'ui/components/molecules/**', group: 'internal', position: 'before' },
            { pattern: 'ui/components/organisms', group: 'internal', position: 'before' },
            { pattern: 'ui/components/organisms/**', group: 'internal', position: 'before' },
            { pattern: 'ui/atoms', group: 'internal', position: 'before' },
            { pattern: 'ui/atoms/**', group: 'internal', position: 'before' },
            { pattern: 'ui/molecules', group: 'internal', position: 'before' },
            { pattern: 'ui/molecules/**', group: 'internal', position: 'before' },
            { pattern: 'ui/organisms', group: 'internal', position: 'before' },
            { pattern: 'ui/organisms/**', group: 'internal', position: 'before' },
            { pattern: 'ui/pages', group: 'internal', position: 'before' },
            { pattern: 'ui/pages/**', group: 'internal', position: 'before' },
            { pattern: 'ui/templates', group: 'internal', position: 'before' },
            { pattern: 'ui/templates/**', group: 'internal', position: 'before' },
            { pattern: 'ui', group: 'internal', position: 'before' },
            { pattern: 'ui/**', group: 'internal', position: 'before' },
          ],
        },
      ],
    },
  },

  // 特定のファイル（index.tsとindex.vue）の設定をフラットに記述
  {
    files: ['src/**/index.ts'],
    rules: {
      '@typescript-eslint/no-restricted-imports': 'off',
    },
  },
  {
    files: ['src/**/page.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  prettierSkipFormatting,
];
