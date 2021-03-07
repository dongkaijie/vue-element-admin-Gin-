<template>
    <div>
        <h3>这是Input组件</h3>
        <div>
        <el-col :span="6" style="">
            <el-form  label-width="80px" >
                <el-form-item label="用户名:" >
                    <div>
                        <button  class="button" @mouseenter="enter" @mouseleave="leave">
                            <input type="text" autocomplete="off" class="inputIn" >
                        </button>
                        <el-button type="primary" v-show="isShowNoPass" @click="noway" ref="buttonName">驳回</el-button>
                        <el-button type="danger" v-show="isShowNoUndo" @click="unDo" ref="buttonName" class="unDo">撤销</el-button>
                    </div>
                </el-form-item>
                <!-- <el-form-item label="邮箱:">
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item label="电话:">
                    <el-input ></el-input>
                </el-form-item> -->
                <!-- <input type="text" autocomplete="off" class="el-input_inner"> -->
            </el-form>
        </el-col>
        </div>
    </div>
</template>

<script>
/*eslint-disable*/
export default {
    name: 'inputs',
    data(){
        return{
            input: '',
            loginForm:{
                username:""
            },
            isShowNoPass:false,
            isShowNoUndo:false,
            isActive:false,
            inputIn:'',
        }
    },
    created(){
        // // 使用 Mock
        // var Mock = require('mockjs')
        // var data = Mock.mock({
        //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        //     'list|1-10': [{
        //         // 属性 id 是一个自增数，起始值为 1，每次增 1
        //         'id|+1': 1
        //     }]
        // })
        // // 输出结果
        // console.log(JSON.stringify(data, null, 4))
        // console.log(data)
        // var data2 = Mock.mock({
        //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        //     'list|1-10': [{
        //         // 属性 id 是一个自增数，起始值为 1，每次增 1
        //         'id|+1': 2,
        //         'number1|1-100.1-10': 1,
        //         // 'name|+1': number,
        //         "string|1-10": "★",
        //         "number|1-100": 100,
        //         "string|2": "★★★",
        //         "boolean|1": true,
        //         "array|+1": [
        //             "AMD",
        //             "CMD",
        //             "UMD"
        //         ],
                
        //     }]
        // })
        // console.log(data2)
        // var data3 = Mock.mock(
        //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        //     // '@string("number", 5)',
        //     // 'number', 5,
        //     // '@natural'
        //     '@string("upper", 5)'
        // )
        // console.log(data3)

        // let data5 = Mock.mock('@cparagraph')
        // console.log(data5)

    },
    mounted(){

    },
    methods:{
        enter(){
            this.isShowNoPass = true
            let inputIn = document.querySelector(".inputIn")
            console.log(inputIn)
            inputIn.style.backgroundColor ="#1890FF";
        },
        leave(){
        },
        noway(){
            this.isShowNoPass = false
            this.isShowNoUndo = true
            document.querySelector(".inputIn").style.backgroundColor ="red";
        },
        unDo(){
            this.isShowNoUndo = false
            this.isShowNoPass = false
            document.querySelector(".inputIn").style.backgroundColor ="#fff";
        },
    }
        
}
</script>
<style lang="scss" scoped>
// -------------------------------改变input框颜色----------------
// -------------------------------改变input框颜色end----------------

.blue{
    background-color: blue;
}
::v-deep.button{
        background-color: rgba(255,255,255,0);
        border: none;
        padding: 0;
        margin-right: 10px;
    }
::v-deep.unDo{
        margin: 0 !important;
    }
.el-input_inner{
    background-color: blue;
    background-image: none;
    -webkit-appearance:none;
    border-radius: 4PX;
    height: 50px;
    width: 300px;
}
.inputIn{
    height: 36px;
    line-height: 36px;
    -webkit-appearance: none;
    background-color: #FFFFFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
}
</style>