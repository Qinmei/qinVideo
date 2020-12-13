module.exports = {
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/ban-ts-ignore": "warn",
    "react/self-closing-comp": 'warn',
    "react-hooks/rules-of-hooks": "warn",
  }
}