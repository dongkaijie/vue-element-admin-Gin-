<template>
    <div>
        <h3>这是首页,啦啦啦啦啦啦</h3>
        <Inputs></Inputs>
        <Inputs></Inputs>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs';
export default {
    components:{
        Inputs
    },
    data(){
        return{
            loginForm:{
                username:""
            },
           
        }
    },
    created(){
        // 使用 Mock
        var Mock = require('mockjs')
        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        })
        // 输出结果
        console.log(JSON.stringify(data, null, 4))
        console.log(data)
        var data2 = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 2,
                'number1|1-100.1-10': 1,
                // 'name|+1': number,
                "string|1-10": "★",
                "number|1-100": 100,
                "string|2": "★★★",
                "boolean|1": true,
                "array|+1": [
                    "AMD",
                    "CMD",
                    "UMD"
                ],
                
            }]
        })
        console.log(data2)
        var data3 = Mock.mock(
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            // '@string("number", 5)',
            // 'number', 5,
            // '@natural'
            '@string("upper", 5)'
        )
        console.log(data3)

        let data5 = Mock.mock('@cparagraph')
        console.log(data5)

    },
    mounted(){

    },
    methods:{
    }
        
}
</script>
<style lang="scss" scoped>
// -------------------------------改变input框颜色----------------
// -------------------------------改变input框颜色end----------------

</style>