module.exports = {
  testEnvironment: 'node',
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "src/**/*.{js,ts}"
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    }
  },
  setupFiles: ["dotenv/config"],
  modulePaths: ['.'],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[jt]s"],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  moduleFileExtensions: ['js', 'ts'],
};
