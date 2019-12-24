<template>
      <div id="container">
        <div class="view_body">
          <h1 class="competition_title">{{result.competitionName}}</h1>

        <hr style="color:#b7b4b4">

        <div class="ban">
            <span class="competition_time">{{result.competitionTime}}</span>
            <span class="stu_name">{{result.studentName}}</span>
        </div>
        <div class="main_info">
          <!--<div class="info_row">-->
            <!--<div class="info_row_title">姓名</div><div class="info_row_msg">{{result.student_name}}</div>-->
            <!--<div class="info_row_title">学号</div><div class="info_row_msg">{{result.student_number}}</div>-->

            <el-form ref="result" :model="result" label-width="80px">
              <el-form-item label="姓名" style="font-size: 18px">
                <el-col>{{result.studentName}}</el-col>
              </el-form-item>
              <el-form-item label="学号">
                <el-col>{{result.studentNum}}</el-col>
              </el-form-item>

              <el-form-item v-for="(item,index) in competition_condition" v-bind:key="index" :label="item">
                <el-col>{{splitAmbulatory[index]}}</el-col>
              </el-form-item>
              <el-form-item>
                <el-button @click="dialogFormVisible = true">编辑</el-button>
                <el-button>删除</el-button>
                <el-button>返回</el-button>
              </el-form-item>
            </el-form>
        <!--<template v-for="(item, index) in items" v-bind:key="index" @click="show(index)">-->
          <!--<div class="info_row"><div class="info_row_title">{{competition_condition[index]}}</div><div class="info_row_msg">{{result.ambulatory[index]}}</div></div>-->
        <!--</template>-->
        <!--</div>-->

          <!--编辑框-->
          <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
            <el-form :model="result">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <!--<el-input v-model="form.competition_name" autocomplete="off"></el-input>-->
                <el-input v-model="result.studentName"></el-input>
              </el-form-item>
              <el-form-item label="学号" :label-width="formLabelWidth">
                <!--<el-input v-model="form.competition_name" autocomplete="off"></el-input>-->
                <el-input v-model="result.studentNumber"></el-input>
              </el-form-item>
              <el-form-item label="比赛名称" :label-width="formLabelWidth">
                <el-select v-model="result.competitionName" placeholder="请选择活动区域">
                  <el-option :label="all_competition[0]" :value="all_competition[0]"></el-option>
                  <el-option :label="all_competition[1]" :value="all_competition[1]"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
      </div>
</template>

<script>
    export default {
        name: "view",
        data(){
          return {
            result: {
              resultId:'',
              studentNum: '',
              studentName: '',
              competitionName: '',
              competitionTime: '',
              entryForm: '',
              ambulatory: '',
              other_resume: '',
            },
            splitAmbulatory:[],
            competition_condition:["获奖等级","指导老师","举办单位"],
            all_competition:["博弈杯","创新杯"],
            dialogFormVisible: false,
            formLabelWidth: '120px',

          }
        },
        created(){
        this.result = this.$route.query.result;
        this.$axios
          .post('/result/getAmbulatory', {
            studentNum:this.result.studentNum,
            competitionName:this.result.competitionName
          })
          .then(successResponse => {
            console.log(successResponse.data)
            this.splitAmbulatory = successResponse.data;
          })
       },
        methods:{

        }

    }

</script>

<style scoped>
  #container{
    width: 1330px;
  }
    .view_body{
      box-shadow: 4.243px 4.243px 12px 0 rgba(0,0,0,.35);
      width:70%;
      height: 485px;
      margin: 2px auto 0;
    }
  .ban{
    display: flex;
    flex-direction: row;
  }
  .competition_time{
    margin-left: 700px;
    margin-right: 20px;
  }
  .main_info {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 70%;
  }
  .competition_title{
    margin: 0 auto;
  }
  .el-col-24 {
    width: 20%;
    font-size: 18px;
  }

  label{
    font-size: 18px;
  }

  .ban{
    padding: 2px;
    font-size: 14px;
  }

  .stu_name{
    margin-top: -2px;
  }


</style>
