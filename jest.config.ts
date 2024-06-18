export default {
  preset: "ts-jest",
  testEnvironment: "@happy-dom/jest-environment",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  transformIgnorePatterns: ["node_modules/(?!(@siemens|@stencil))"],
};
