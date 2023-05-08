module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  ignorePatterns: ["src/assets/js/*.js", "src/assets/libs/**/*.js"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {}
}
