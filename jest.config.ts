import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  clearMocks: true,
  testMatch: ['**/__tests__/*.test.ts'],
  verbose: true,
  coverageReporters: ['lcov', 'text-summary', 'text'],
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 65,
      functions: 80,
    },
  },
  collectCoverageFrom: ['src/**/*'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  setupFiles: [
    'dotenv/config',
    //'./__tests__/__mocks__/*.ts',
  ],
  moduleDirectories: ['node_modules', 'src'],
};
export default config;
