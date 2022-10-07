module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.eslint.json",
    sourceType: "module",
    ecmaVersion: "latest"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/jsx-one-expression-per-line": 0,
    "react/function-component-definition": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "comma-dangle": 0,
    "no-undef": 0,
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    semi: [2, "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/semi": [0, "never"],
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/triple-slash-reference": 0
  }
};
