<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1100px">
    <a style="position: absolute;padding-top: 20px;right: 3%;font-size: 20px;font-weight: bold" href="javascript:void(0)" @click="jump()">学生获奖录入中心</a>
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <el-dropdown style="position: absolute;padding-top: 20px;left: 40%;font-size: 16px">
      <a  href="javascript:void(0)" style="color: #409EFF;cursor:pointer">学生 : {{this.$store.state.userInfo.name}}</a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
    </el-dropdown>
    <div style="display: flex;margin-bottom: 20px;position: absolute;padding-top: 15px;left: 60%">
      <el-input style="width: 180px;margin-right: 20px;margin-left: 95px;" v-model="nameKey" placeholder="请输入内容"></el-input>
      <el-button type="primary" v-on:click="searchStudent">搜索</el-button>
    </div>

  </el-menu>
</template>

<script>

    export default {
        name: "NavMenu",
        data () {
            return {
                navList: [
                    {name: '/index', navItem: '主页'},
                    {name: '/information',navItem:'个人中心'},
                    {name: '/inputInfo', navItem: '录入获奖信息'}
                ],
                results:[],
            }
        },
        methods : {
            jump: function () {
                this.$router.push({
                    path: '/index',
                })
            },
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
