<template>
  <i-layout>
    <nav-bar></nav-bar>
    <i-layout class="main">
      <Content class="main-content">
        <router-view/>
      </Content>
    </i-layout>
    <footer-bar></footer-bar>
  </i-layout>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import FooterBar from '../../components/FooterBar.vue'

export default {
  name: 'Main',
  components: {
    NavBar, FooterBar
  }
}
</script>

<style lang="less" scoped>
  .main {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    &-bra {
      flex: 0 0 auto;
      margin: 8px 0;
    }
    &-content {
      flex: 1 0 auto;
      padding: 24px 0;
      background: #fff;
    }
  }
</style>
