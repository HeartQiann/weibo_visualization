<template>
  <div>
    <el-form  :model="cate" :inline='true' class="demo-form-inline">
        <el-form-item label="一级分类">
            <!-- select双向数据绑定的是option的value属性值 :disabled='!vis' -->
            <el-select  placeholder="请选择" v-model="cate.cate1id" @change="cate1change(cate.cate1id)" >
                <el-option :label="c1.name" :value="c1.id" v-for="(c1,index) in list1" :key="index" ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="二级分类">
            <!-- select双向数据绑定的是option的value属性值 :disabled='!vis'-->
            <el-select  placeholder="请选择" v-model="cate.cate2id"  @change="cate2change(cate.cate2id)">
                <el-option :label="c2.name" :value="c2.id" v-for="(c2,index) in list2" :key="index" ></el-option>
            </el-select>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'CategorySelect',
    data(){
        return{
            list1:[],       //一级分类数据
            list2:[],       //二级分类数据
            cate:{
                cate1id:'',
                cate2id:'',
            }
        }
    },
    mounted(){
        this.getCategory1List();
    },
    methods:{
        //获取一级分类列表数据
        async getCategory1List(){
            let result = await this.$API.reqCategory1List();
            // console.log(result);
            if(result.code==200){
                this.list1 = result.result.list;
            }
        },
        //一级分类发生变化时获取二级分类列表数据
        async cate1change(father_id){
            //清空二级分类的数据
            this.list2 = [];
            //清空二级分类已显示的数据
            this.cate.cate2id = '';
            let result = await this.$API.reqCategory2List(father_id);
            // console.log(result);
            if(result.code==200){
                this.list2 = result.result.list;
            }
        },
        //二级分类发生变化时触发
        cate2change(topic_id){
            console.log(topic_id);
            //给父组件传递id
            this.$emit('getTopicId',topic_id);
        }
    }
}
</script>

<style>

</style>