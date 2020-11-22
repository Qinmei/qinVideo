module.exports = {
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/self-closing-comp": 'warn',
    "react-hooks/rules-of-hooks": "warn",
  },
};
