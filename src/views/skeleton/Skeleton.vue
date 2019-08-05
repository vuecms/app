<template>
  <div>
    <header class="skeleton-header"></header>
    <div style="padding: 0 3.5%;">
      <div style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);">
        <div class="skeleton-query">
        </div>
        <div style="padding: 20px;">
          <div class="skeleton-content">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skeleton'
}
</script>

<style scoped>
  .skeleton-header {
    height: 61px;
    background: #324157;
    width: 100%;
  }

  .skeleton-query {
    border-bottom: 1px solid #ebeef5;
    height: 77px;
  }

  .skeleton-content {
    border-radius: 10px;
    min-height: 80vh;
    display: flex;
    flex-wrap: wrap;
  }

  .skeleton-card {
    width: 314px;
    height: 320px;
    margin-bottom: 40px;
    margin-right: 70px;
    background: #f6f6f6;
  }
</style>
