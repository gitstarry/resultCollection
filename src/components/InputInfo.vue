<template>
  <div>
    <div class="left">

    </div>
    <div class="finally">

    </div>
    <div class="form-wrap">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input style="width:600px;height: 40px" v-model="form.student_name"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input style="width:600px;height: 40px" v-model="form.student_number"></el-input>
        </el-form-item>
        <el-form-item label="比赛名称">
          <el-select style="width:600px;height: 40px" v-model="form.competition_name">

          </el-select>
        </el-form-item>

        <el-form-item label="活动形式">
          <el-input style="width:600px;height: 40px" type="textarea" v-model="form.other_resume"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "InputInfo",
        data() {
            return {
                form: {
                    student_name: '',
                    student_number: '',
                    competition_name: '',
                    competition_time: '',
                    entry_form: '',
                    ambulatory: '',
                    other_resume: '',
                }
            }
        },
        methods: {
            onSubmit() {
            },
        },
    }
</script>

<style scoped>
.form-wrap{
  width: 800px;
  margin: 0 auto;
}
.left {
  background-color: dodgerblue;
  position: absolute;
  width: 250px;
  height: 350px;
  top:500px;
  left: 100px;
  z-index: -1;
  transform: skew(30deg);
}

.finally {
  background-color: dodgerblue;
  position: absolute;
  width: 250px;
  height: 350px;
  top:500px;
  left: 1350px;
  z-index: -1;
  transform: skew(30deg);
}
</style>
