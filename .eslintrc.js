module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    // "eslint:recommended",
    "plugin:nuxt/recommended",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  rules: {
    "vue/multi-word-component-names": "off",
    //  [
    //   "error",
    //   {
    //     ignores: ["main", "index", "icon"],
    //   },
    // ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto",
        // singleQuote: true,
        // semi: true,
        // tabWidth: 2,
        // trailingComma: 'all',
        // printWidth: 80,
        // bracketSpacing: true,
        // arrowParens: 'avoid',
        // endOfLine: 'auto',
        // arrowSpacing: ['error', { before: true, after: true }], // 화살표 함수의 스페이싱 설정
        // singleQuote: true, // 작은따옴표 사용
        // semi: false, // 세미콜론 사용하지 않음
        // useTabs: false, // 탭 대신 스페이스 사용
        // tabWidth: 2, // 탭의 너비
        // trailingComma: 'none', // 후행 콤마 사용하지 않음
        // printWidth: 80, // 한 줄의 최대 길이
        // bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백 사용
        // arrowParens: 'always', // 화살표 함수의 매개변수 괄호 사용
        // endOfLine: 'auto' // 플랫폼에 맞게 개행문자 설정
      },
    ],
  },
};
