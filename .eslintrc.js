module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }], // 强制每行的最大属性数 
    "vue/singleline-html-element-content-newline": 2, // 当标签内有属性时，内容换行
    "vue/name-property-casing": ["error", "PascalCase"],  // name 大驼峰命名
    'accessor-pairs': 2,  // 强制 getter 和 setter 在对象中成对出现
    'arrow-spacing': [2, {  // 强制箭头函数的箭头前后使用一致的空格
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'], // 禁止在代码块中开括号前和闭括号后有空格
    'brace-style': [2, '1tbs', {  // 强制在代码块中使用一致的大括号风格
      'allowSingleLine': true
    }],
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'comma-spacing': [2, {  // 强制在逗号前后使用一致的空格
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'curly': [2, 'multi-line'], // 禁止模板字符串中的嵌入表达式周围空格的使用
    'dot-location': [2, 'property'],  // 强制在点号之前和之后一致的换行
    'eol-last': 2,  // 文件末尾存在空行
    'eqeqeq': ["error", "always"],  // 要求使用 === 和 !==
    'generator-star-spacing': [2, { // 强制 generator 函数中 * 号周围使用一致的空格
      'before': true,
      'after': true
    }],
    'indent': [2, 2, {  // 强制使用一致的缩进 两个空格
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'], // 强制在 JSX 属性中一致地使用单引号
    'key-spacing': [2, {  // 强制在对象字面量的属性中键和值之间使用一致的间距
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {  // 强制在关键字前后使用一致的空格
      'before': true,
      'after': true
    }],
    'new-cap': [2, {    // 要求构造函数首字母大写
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,  // 禁止调用无参构造函数时有圆括号
    'no-array-constructor': 2,  // 禁用 Array 构造函数
    'no-caller': 2, // 禁用 arguments.caller
    'no-eval': 1, // 警告使用eval
    'no-extend-native': 2,  // 禁止扩展原生类型
    'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
    'no-extra-parens': 2, // 禁止不必要的小括号
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-implied-eval': 1, // 警告隐式的eval() 
    'no-iterator': 2, // 禁用 __iterator__ 属性
    'no-labels': [2], // 禁用标签语句
    'no-lone-blocks': 2,  // 禁用不必要的嵌套块
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-multi-str': 2,  // 禁止使用多行字符串 
    'no-multiple-empty-lines': [2, {  // 禁止出现多行空行
      'max': 1
    }],
    'no-new-require': 2,  // 不允许 new require
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2,  // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-proto': 2,  // 禁用 __proto__ 属性
    'no-return-assign': 2, // 禁止在 return 语句中使用赋值语句
    'no-self-compare': 2, // 禁止自身比较
    'no-sequences': 2,  // 禁用逗号操作符
    'no-throw-literal': 2,  // 禁止抛出异常字面量 应抛出 Error对象
    'no-trailing-spaces': 2,  // 禁用行尾空格
    'no-undef-init': 2, // 禁止将变量初始化为 undefined
    'no-unmodified-loop-condition': 2,  // 禁用一成不变的循环条件 
    'no-unneeded-ternary': 2, // 禁止可以表达为更简单结构的三元操作符
    'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁用不必要的构造函数
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'one-var': [2, {  
      'initialized': 'never'
    }], // 强制函数中的变量 分开声明
    'operator-linebreak': [2, 'after'],  // 强制操作符使用一致的换行符风
   
    'padded-blocks': [2, 'never'],  // 禁止块语句和类的开始或末尾有空行
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }], // 尽可能使用单引号
    'semi': [2, 'never', { "beforeStatementContinuationChars": "always" }], // 禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
    'space-before-blocks': [2, 'always'], // 要求语句块之前的有一个空格
    'space-before-function-paren': [2, 'never'],  // 禁止函数圆括号之前有一个空格
    'space-in-parens': [2, 'never'],   // 禁止圆括号内的空格
    'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'space-unary-ops': [2, {
      'words': true,      
      'nonwords': false
    }], // 要求或禁止在一元操作符之前或之后存在空格
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }], // 要求或禁止在注释前有空白
    'template-curly-spacing': [2, 'never'], // 禁止模板字符串中的嵌入表达式周围空格的使用
    'wrap-iife': [2, 'any'],  // 需要把立即执行的函数包裹起来
    'yield-star-spacing': [2, 'both'],  // 强制在 yield* 表达式中 * 周围使用空格
    'yoda': [2, 'never'], // 禁止Yoda条件
    'prefer-const': 2,  // 要求使用 const 声明那些声明后不再被修改的变量
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }], // 强制在大括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'] // 强制数组方括号中使用一致的空格
  }
}
