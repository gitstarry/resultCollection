<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1100px">
    <span style="position: absolute;padding-top: 20px;right: 3%;font-size: 20px;font-weight: bold">学生获奖录入中心</span>
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "NavMenu",
        data () {
            return {
                navList: [
                    {name: '/index', navItem: '主页'},
                    {name: '/student',navItem: '学生'},
                    {name: '/information',navItem:'个人中心'},
                    {name: '/inputInfo', navItem: '录入比赛信息'}
                ]
            }
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
