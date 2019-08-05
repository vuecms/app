<template>
  <Header class="header">
    <el-menu :default-active="activeIndex" background-color="#404CF6" text-color="#989FF9" active-text-color="#F4F4FD"
             mode="horizontal" router>
      <router-link tag="li" to="/">
        <a>
          <div class="header-logo"></div>
        </a>
      </router-link>
      <el-menu-item index="/">角色管理</el-menu-item>
      <el-menu-item index="/type">能力类型</el-menu-item>
      <el-menu-item index="/plan">培养计划</el-menu-item>
      <el-menu-item index="/top">角色排行榜</el-menu-item>
      <div class="header-user">
        <i class="el-icon-bell header-user-bell"></i>
        <el-dropdown>
          <a href="javascript:void(0)">
            {{userInfo.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a href="javascript:void(0)" @click="outClick">
                退出
              </a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </el-menu>
  </Header>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      activeIndex: '/',
      userInfo: {}
    }
  },
  mounted: async function () {
    this.userInfo = await this.$store.dispatch('getUserInfo')
  },
  methods: {
    async outClick () {
      console.log('out')
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    background-color: #404CF6;
    padding: 0 120px;
    &-logo {
      display: inline-block;
      float: left;
      margin-top: 14px;
      margin-right: 14px;
      width: 50px;
      height: 31px;
      background-image: url("../assets/imgs/logo.png");
    }
    &-user {
      display: flex;
      justify-content:center;
      align-items:Center;
      height: 60px;
      line-height: 60px;
      float: right;
      color: #FFF;
      &-bell{
        margin-right: 30px;
        font-size: 25px;
      }
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }
</style>
