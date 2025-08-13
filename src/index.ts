/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-11-11T16:26:28+01:00
 * @Copyright: Technology Studio
**/

import {
  jestConfig,
  stylisticConfig,
  type TSESLint,
  typescriptConfigList,
  typescriptEslintConfig,
} from 'eslint-config-txo-typescript'
import {
  reactConfig,
} from 'eslint-config-txo-typescript-react'

const defaultConfigList = typescriptEslintConfig(
  {
    name: 'default',
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    extends: [
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- remove when migrated to prettier
      stylisticConfig,
      ...typescriptConfigList,
      reactConfig,
      {
        settings: {
          'import/ignore': [
            'react-native',
            'react-native-keychain',
          ],
          'react': {
            version: 'detect',
          },
        },
      },
      {
        rules: {
          'import/no-unresolved': ['error', {
            ignore: ['GraphQl'],
          }],
        },
      },
    ],
  },
)

const e2eConfigList = typescriptEslintConfig(
  {
    name: 'e2e',
    files: ['__e2e__/**/*.ts', '__e2e__/**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'jest/expect-expect': ['error', {
        assertFunctionNames: [
          'expect',
          'isVisible',
          'isVisibleAtIndex',
          'isNotVisible',
          'isScrollViewVisible',
        ],
      }],
    },
    languageOptions: {
      parserOptions: {
        project: '__e2e__/tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: '__e2e__/tsconfig.json',
        },
      },
    },
    extends: [
      jestConfig,
    ],
  },
  {
    ignores: [
      '__e2e__/GraphQlCodegen/index.ts',
    ],
  },
)

const jestConfigList = typescriptEslintConfig(
  {
    name: 'jest',
    files: ['__tests__/**/*.ts', '__tests__/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: '__tests__/tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: '__tests__/tsconfig.json',
        },
      },
    },
    extends: [
      jestConfig,
    ],
  },
)

export const configList: TSESLint.FlatConfig.Config[] = [
  ...defaultConfigList,
  ...e2eConfigList,
  ...jestConfigList,
  {
    ignores: [
      '.releaserc.js',
      'android',
      'app/GraphQl/index.ts',
      'app/Modules/**/Model/GraphQl/**/Types',
      'commitlint.config.js',
      'coverage',
      'eslint.config.js',
      'eslint-ci.config.js',
      'ios',
      'jest.config.js',
      'lib',
      'node_modules',
      'release.config.js',
    ],
  },
]
