<template>
  <div class="app">
    <nav-bar class="app-nav"></nav-bar>
    <div class="app-content">
      <router-view/>
    </div>
    <footer-bar class="app-footer"></footer-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'app',
  components: { NavBar, FooterBar }
}
</script>

<style lang="less">
  .app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    &-nav{
      flex: 0;
    }
    &-content {
      flex: 1 0 auto;
      padding: 24px 0;
      background: #fff;
    }
    &-footer{
      flex: 0;
    }
  }
</style>
