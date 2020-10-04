module.exports = {
  eslintIntegration: true, // 使用“prettier-eslint”来格式化JavaScript、TypeScript和Vue。
  vueIndentScriptAndStyle: true,
  tslintIntegration: true,
  jsxBracketSameLine: true, // 将多行JSX元素的“>”放在最后一行的末尾，而不是单独放在下一行
  jsxSingleQuote: true, // 在JSX中使用单引号而不是双引号
  singleQuote: true, // 使用单引号而不是双引号
  trailingComma: 'none', // 结尾逗号
  semi: false, // 末尾打印分号
  parser: 'typescript',
  requireConfig: true,
  useTabs: false,
  // "arrowParens": "avoid",
  bracketSpacing: true,
  printWidth: 160
}
