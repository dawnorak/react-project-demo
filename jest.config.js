module.exports = {
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-puppeteer'
};