<template>
  <div class="wrap">
    <div class="cl-content" v-for="result in allResult">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">{{ result.competitionName}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-collapse v-model="activeNames" @change="handleChange" class="list">
              <el-collapse-item title="展开查看" name="1">
                <div>{{result.ambulatory}}</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <div class="grid-content bg-purple-dark">{{result.competitionTime}}</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-dark">{{result.studentName}}</div>
        </el-col>
      </el-row>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      page-size=1
      :total="allResult.length">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "AppIndex",
        data() {
            return {
                allResult: []
            }
        },
        beforeCreate() {
            var _this = this;
            this.$axios.get('/result/selectAllResult')
                .then(response => {
                    console.log(response.data);
                    _this.allResult = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
  .list {
    width: 800px;
  }

  .wrap {
    width: 800px;
    margin: 0 auto;
  }

  .grid-content {
    text-align: left;
  }
  .cl-content{
    border-bottom: 1px solid cornflowerblue;
    margin-bottom: 15px;
  }
</style>
