import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.test.{js,ts}',
    '!src/**/index.{js,ts}',
    '!src/**/*.d.{js,ts}',
    '!src/coverage/**/*',
    '!src/mocks/**/*',
    '!src/types/**/*',
    '!dist/**/*',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '\\.(test|spec)\\.(t|j)s$',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

export default config;
