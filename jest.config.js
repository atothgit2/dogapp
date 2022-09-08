// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   transform: {
//     "\\.js$": "<rootDir>/node_modules/babel-jest"
//   },
// };

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],

};

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
//   transform: {
//       "^.+\\.(js|ts)$": "ts-jest",
//   },
//   transformIgnorePatterns: [
//       "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
//       "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
//       "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
//   ],
// }