<template>
  <div class="notesList">
    <el-tabs type="border-card">
      <el-tab-pane label="All Notes" class="item">所有笔记</el-tab-pane>
      <el-tab-pane label="Favorites" class="item">喜欢的笔记</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabPosition: 'allNotes'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .notesList{
     
   }
</style>
