import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"], // The root directory of your tests
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$", // The pattern for test files
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
