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
          <div v-for="(item,index) in currentPageData" v-bind:key="index">
            <div class="left-kuang">
              <div class="left-kuang-top">
                <a style="font-size: 26px;text-decoration: none" href="javascript:void(0)"  @click="jumpSecond(item)">{{item.competitionName}}</a>
              </div>
              <div class="left-kuang-center">
                <p>{{item.other_resume}}</p>
              </div>
              <div class="left-kuang-bottom">
                <p style="margin-right: 50px">{{item.studentName}}</p> <p style="margin-right: 50px">{{item.competitionTime}}</p>
                <a href="javascript:void(0)" style="margin-right: 50px;padding-top: 14px" @click="jumpSecond(item)">查看</a> <a style="padding-top: 14px" href="javascript:void(0)" @click="dele(item.resultId)">删除</a>
              </div>
            </div>
            <div class="down-line">

            </div>
          </div>
        </div>
        <div class="block">
          <span style="margin-right: 80px">第 {{currentPage}} 页 / 共 {{totalPage}} 页</span>
          <a @click="prevPage()"  href="javascript:void(0)" style="text-decoration: none;margin-right: 40px">上一页</a>
          <a @click="nextPage()"  href="javascript:void(0)" style="text-decoration: none">下一页</a>
        </div>
      </div>
    </div>
    <div class="right">

    </div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>是否要删除？</span>
      <span slot="footer" class="dialog-footer">
         <el-button @click="centerDialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="delet()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="消息"
      :visible.sync="correct"
      width="15%"
      center>
      <span>删除成功</span>
      <span slot="footer" class="dialog-footer">
         <el-button type="primary" @click="correct = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "Information",
        data() {
            return {
                result:{
                    resultId:0,
                    studentNum: '',
                    studentName: '',
                    competitionName: '',
                    competitionTime: '',
                    entryForm: '',
                    ambulatory: '',
                    other_resume: '',
                },
                centerDialogVisible:false,
                correct:false,
                stuNum: "",
                id:'',
                results:[],
                totalPage: 1, // 统共页数，默认为1
                currentPage: 1, //当前页数 ，默认为1
                pageSize: 4, // 每页显示数量
                currentPageData: [] //当前页显示内容
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
            jumpSecond:function(item) {
               this.$router.push({
                   path:'/view',
                   query:{
                       result : item
                   }
               })
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
                        this.totalPage = Math.ceil(this.results.length / this.pageSize);
                        this.totalPage = this.totalPage === 0 ? 1 : this.totalPage;
                        this.getCurrentPageData();
                    })
                    .catch(failResponse => {
                        alert("添加失败");
                    })
            },
            getCurrentPageData() {
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.results.slice(
                    begin,
                    end
                );
            },
            prevPage() {
                if (this.currentPage === 1) {
                    alert("已经是第一页");
                    return false;
                } else {
                    this.currentPage--;
                    this.getCurrentPageData();
                }
            },
            nextPage() {
                if (this.currentPage === this.totalPage) {
                    alert("已经是最后一页");
                    return false;
                } else {
                    this.currentPage++;
                    this.getCurrentPageData();
                }
            },
            dele(resultId) {
                this.centerDialogVisible = true;
                this.id = resultId;
            },
            delet() {
                let postData = this.$qs.stringify({
                    id: this.id
                });
                this.$axios
                    .post('/delete',postData)
                    .then(res =>{
                        var id = res.data;
                        if(id === 1) {
                            this.correct = true;
                        }
                        this.input();
                        this.centerDialogVisible = false;
                    })
                    .catch(failResponse =>{
                        alert("删除失败");
                    });
            }
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
