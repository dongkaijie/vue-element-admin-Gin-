<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:44:24
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-31 09:18:43
-->
# Mis端模板  Beta
在elementui-admin 基础上进行的修改，使用前请务必研读一遍 [elementui admin文档](https://panjiachen.github.io/vue-element-admin-site/zh/guide/)

## 1. 环境说明 Beta
+ node环境
v12.20.0 
+ 包管理工具
cnpm    npm install -g cnpm --registry=https://registry.npm.taobao.org
+ IDE
VSCode

## 2. 技术栈说明 Beta
+ vue 2.6 + scss + elementui + axios

## 3. 文件命名规范说明 Beta
.vue文件切勿使用**html现有单词**与**预留单词**
> 大驼峰命名法
>> 组件级 .vue 文件  无论在何处  （除组件文件夹下的index.vue） 
>> 组件文件夹  无论在何处
> 小驼峰命名法
>> 页面级 .vue 文件
>> 组件文件夹下的 index.vue
>> scss文件 （除模块级scss文件， 以_开头）
>> css文件、json文件及其余文件类型
>> 常规文件夹

## 4. 代码规范 Beta
+ 遵循 Eslint 编写代码，具体代码规范条例见下方网址，请务必研读一遍：

[vue 规则](https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-2-x)

[js 规则](https://cn.eslint.org/docs/rules/)

+ 所有style 使用scss 并 确保当前作用域，代码如下：
`<style lang="scss" scoped></style>`
+ 所有style class 使用单横杠-进行衔接, 双下划线__表示状态
+ 所有方法务必写上注释，格式如下：
```
/**
* @name: 这是一个例子
* @param {String | null} name 例子的名字
* @return {Void}
*/
```
如没有输入输出，可使用双斜杠简化：
`// 这是个例子`
可使用 VSCode插件 `koroFileHeader` 辅助输出
+ 所有业务逻辑因添加必要注释
+ 所有变量名与方法名因尽可能见名知意，否则添加必要注释
+ 所有变量名使用小驼峰命名法
+ 尽可能将静态数据抽离成外部js或json，放在当前目录下
+ 尽可能将页面差分为各个components，放在当前components目录下
+ 单一文件禁止超过1000行

## 5. 提交规范
请在终端输入 `npm run commit` 进行代码提交，提交类型明确，标题简洁，详情丰富。

## 在elementui admin的基础上：
1. 添加dev环境 css sourceMap
2. 添加全局scss变量
3. 添加prod环境 去除log与debug
4. 修改了request类
5. 添加config文件夹 baseUrl直接在这里修改 不要改config文件重复重启
6. 添加Eslint规范
7. 添加git提交插件

## 额外说明
1. 之前的项目里有权限配置相对成熟的模块，如有需求请咨询常熟mis团队
2. 个人更建议使用yarn作为包管理工具，但是无奈于在当前整体环境下yarn一直链接异常，没有找到原因，如果有同志知道解决方案的请帮忙指点下


## 组件目录
```
├── components                    
│   ├── BackToTop       # 返回到顶部
│   ├── BackToTop       # 面包屑  Charts          
│   ├── Charts          # 图表             
│   ├── Draggable       # 拖拽列表     
│   ├── DragSelect      # 下拉多选
│   ├── ErrorLog        # 错误日志
│   ├── Hamburger       # Navbar 左侧 切换目录的图标
│   ├── HeaderSearch    # Navbar 搜索
│   ├── ImageCropper    # 图片裁剪上传
│   ├── JsonEditor      # json 编辑器 也可以编辑其他代码
│   ├── Kanban          # 可拖拽看板
│   ├── MarkdownEditor  # MarkdownEditor  富文本编辑器
│   ├── MDinput         # 比较好看的input输入框
│   ├── Pagination      # 分页
│   ├── PanThumb        # 图片hover特效
│   ├── RightPanel      # 右侧面板框架
│   ├── Screenfull      # 全屏显示
│   ├── DropdownMenu    # 下拉选项特效组件
│   ├── SizeSelect      # 布局大小
│   ├── Sticky          # 吸附顶部
│   ├── svgIcon         # svg图标
│   ├── TextHoverEffect # hover特效
│   ├── ThemePicker     # 改变主题色
│   ├── Tinymce         # 富文本编辑器
│   ├── Upload          # 上传
│   ├── UploadExcel     # 上传excel
```

## 全局指令说明
1. v-clipboard  copy指令
```
<el-tab-pane label="use clipboard by v-directive" name="v-directive">
<el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
<el-button v-clipboard:copy="inputData" v-clipboard:success="clipboardSuccess" type="primary" icon="el-icon-document">
    copy
</el-button>
</el-tab-pane>
```
2. el-drag-dialog 弹窗框可移动指令
```
<el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address" @dragDialog="handleDrag">
    <el-select ref="select" v-model="value" placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150" />
    <el-table-column property="name" label="Name" width="200" />
    <el-table-column property="address" label="Address" />
    </el-table>
</el-dialog>
```
3. v-permission 权限指令
```
 <div>
        <span v-permission="['admin']" class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">admin</el-tag> can see this
        </span>
        <el-tag v-permission="['admin']" class="permission-sourceCode" type="info">
          v-permission="['admin']"
        </el-tag>
      </div>

      <div v-permission="['editor']">
        <span  class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">editor</el-tag> can see this
        </span>
        <el-tag  class="permission-sourceCode" type="info">
          v-permission="['editor']"
        </el-tag>
      </div>
```

4. v-waves 水波纹指令
```
<el-button v-waves type="primary">
    水波纹效果
</el-button>
```

## 全局filter
1. toThousandFilter 
 ` 10000 => "10,000"`
2. numberFormatter
 `10000 => 10k`
3. uppercaseFirst 首字母大写

## 鉴权逻辑
1. 用户登录后返回 roles 权限字段  详情见mock/user.js
2. 用返回的roles 与 roter中 meta.roles 做比较，具有对应权限则可以访问
3. 如果meta.roles不写，则所有人都能访问，如果是admin 则可以访问所有路由