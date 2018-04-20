<template>
  <div class="notesList">
    <el-tabs type="border-card">
      <el-tab-pane label="All Notes">
        <div class="item">所有的笔记</div>
      </el-tab-pane>
      <el-tab-pane label="Favorites">
        <div class="item">喜欢的笔记</div>
      </el-tab-pane>
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
<style lang="less">
.notesList{
  float: left;
  width: 250px;
  height: 100%;
  .item{
    background-color: chocolate;
    color: white;
    font-size: 14px;
    padding: 10px;
    text-align: left;
  }
  .el-tabs__nav{
    width: 100%;
    .el-tabs__item{
      width: 50%;
    }
  }
  .el-tabs--border-card{
    background-color: whitesmoke;
    .el-tabs__content{
      padding: 0;
    }
    height: 100%;
    border: none
  }
  .el-tabs__item{
     margin: 0;
     ~.is-active{
        border: none;
     }
  }
}
</style>
