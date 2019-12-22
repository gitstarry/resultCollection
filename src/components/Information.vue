<template>
  <div class="balance">
    <div class="left">
      <div class="left-first">
        <div class="left-top">
          <span style="font-size: 26px;padding-left: 40px">{{this.$store.state.userInfo.name}}</span>
        </div>
        <div class="left-center">
          <span style="font-size: 12px;padding-left: 40px">{{this.$store.state.userInfo.studentNumber}}</span>
        </div>
        <div class="left-bottom">
          <span style="color: white;padding-left: 15px;font-size: 26px;">录入总数  &nbsp;&nbsp;{{results.length}}</span>
        </div>
        <div class="left-bottom">
          <a href="javascript:void(0)" style="font-size: 26px;padding-left: 15px;color: white;text-decoration: none" @click="jumpFirst()">录入获奖信息</a>
        </div>
      </div>
      <div class="left-second">

      </div>
    </div>
    <div class="center">
      <div class="center-kuang">
        <div class="center-top">
          <div v-for="(item,index) in results" v-bind:key="index">
            <div class="left-kuang">
              <div class="left-kuang-top">
                <a style="font-size: 26px;text-decoration: none" href="javascript:void(0)"  @click="jumpSecond()">{{item.competitionName}}</a>
              </div>
              <div class="left-kuang-center">
                <p>{{item.other_resume}}</p>
              </div>
              <div class="left-kuang-bottom">
                <p style="margin-right: 50px">{{item.studentName}}</p> <p style="margin-right: 50px">{{item.competitionTime}}</p>
                <a href="javascript:void(0)" style="margin-right: 50px;padding-top: 14px" @click="jumpSecond()">查看</a> <a style="padding-top: 14px" href="javascript:void(0)" @click="dele()">删除</a>
              </div>
            </div>
            <div class="down-line">

            </div>
          </div>
        </div>
       <!-- <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[4, 8, 12, 16]"
            :page-size="4"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.results.length">
          </el-pagination>
        </div>-->
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
    export default {
        name: "Information",
        data() {
            return {
                result:{
                    resultId:'',
                    studentNum: '',
                    studentName: '',
                    competitionName: '',
                    competitionTime: '',
                    entryForm: '',
                    ambulatory: '',
                    other_resume: '',
                },
                results:[],
                stuNum: "",
              /*  currentPage1: 4,
                currentPage2: 4,
                currentPage3: 4,
                currentPage4: 3,*/
            }
        },
        mounted: function() {
            this.input();
        },
        methods: {
            jumpFirst: function () {
                this.$router.push({
                    path:'/inputInfo',
                })
            },
            jumpSecond:function() {
               this.$router.push({
                   path:'/view',
               })
            },
            /*handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {

            },*/
            dele() {

            },
            input() {
                 this.stuNum = this.$store.state.userInfo.studentNumber;
                 let postData = this.$qs.stringify({
                    stuNum:this.stuNum
                });
                this.$axios
                    .post('/selectResult',postData)
                    .then(res =>{
                        this.results = res.data;
                    })
                    .catch(failResponse => {
                        alert("输入错误");
                    })
            },
        }
    }
</script>

<style scoped>
  .balance {
    display: flex;
    flex-direction: row;
  }
  .left {
    width: 300px;
    height: 900px;
  }
  .center {
    width: 1100px;
    height: 1000px;
    border: 1px solid gainsboro;
  }
  .left-first {
    margin-top: 40px;
    margin-left: 10px;
    height: 500px;
    width: 280px;
    border: 1px solid blue;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px #000;
  }
  .left-second {
    background-color: dodgerblue;
    position: absolute;
    width: 309px;
    height: 500px;
    top:475px;
    left: 0;
    z-index: -1;
    transform: skew(30deg);
  }
  .right {
    background-color: dodgerblue;
    position: absolute;
    width: 309px;
    height: 500px;
    top:475px;
    left: 1295px;
    z-index: -1;
    transform: skew(30deg);
  }
  .left-top {
    margin:20px 0 5px 2px;
    width: 150px;
    height: 30px;
    text-align: left;
  }
  .left-center {
    margin:5px 0 5px 2px;
    width: 200px;
    height: 30px;
    text-align: left;
  }
  .left-bottom {
    margin: 30px 0 20px 40px;
    background-color: dodgerblue;
    width: 200px;
    height: 50px;
    border-radius: 6%;
    text-align: left;
  }
  .center-kuang {
    margin-top: 40px;
    margin-left: 35px;
    height: 900px;
    width: 1000px;
  }
  .center-top {
    height: 900px;
    width: 1000px;
    margin-bottom: 10px;
  }
  .block {
    margin-left: 400px;
  }
  .left-kuang {
    height: 200px;
    width: 900px;
    display: flex;
    flex-direction: column;
  }
  .down-line {
    width: 900px;
    height: 5px;
    background-color: gainsboro;
  }
  .left-kuang-top {
    width: 300px;
    height: 50px;
    text-align: left;
  }
  .left-kuang-center {
    width: 700px;
    height: 110px;
    background-color: white;
    text-align: left;
  }
  .left-kuang-bottom {
    width: 700px;
    height:40px;
    display: flex;
    flex-direction: row;
  }
</style>
