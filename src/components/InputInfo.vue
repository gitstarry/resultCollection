<template>
  <div class="form-wrap">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="比赛名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
<!--    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>-->
    <el-form-item label="比赛时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="模板条件">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="指导老师" name="type"></el-checkbox>
        <el-checkbox label="承办单位" name="type"></el-checkbox>
        <el-checkbox label="比赛编号" name="type"></el-checkbox>
        <el-checkbox label="比赛地点" name="type"></el-checkbox>
        <el-checkbox label="竞赛类别" name="type"></el-checkbox>
        <el-checkbox label="比赛级别" name="type"></el-checkbox>
        <el-checkbox label="参赛对象" name="type"></el-checkbox>
        <el-checkbox label="作品名称" name="type"></el-checkbox>
        <el-checkbox label="获奖图片" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addType">添加</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
    export default {
        name: "InputInfo",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
            },
            addType(){

            }
        }
    }
</script>

<style scoped>
.form-wrap{
  width: 800px;
  margin: 0 auto;
}
</style>
