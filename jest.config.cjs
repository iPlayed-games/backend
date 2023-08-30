module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['node_modules'],
  reporters: ['default'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@data/(.*)': '<rootDir>/src/data/$1',
    '^@controller/(.*)': '<rootDir>/src/controller/$1',
    '^@typing/(.*)': '<rootDir>/src/typing/$1',
    '^@config/(.*)': '<rootDir>/src/config/$1',
    '^@routes/(.*)': '<rootDir>/src/routes/$1',
    '^@queries/(.*)': '<rootDir>/src/queries/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
  },
}
