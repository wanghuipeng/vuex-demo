<template>
  <div class="toolbar">
    <i class="fa fa-plus" @click="addNote"></i>
    <i :class="favorite ? 'fa fa-heart' : 'fa fa-heart-o'" @click="likeNote"></i>
    <i class="fa fa-remove" @click="delNote"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favorite: false
    }
  },
  methods: {
    addNote() {
      console.log('新建note')
    },
    likeNote() {
      this.favorite = !this.favorite;
      console.log('收藏note')
    },
    delNote() {
      console.log('删除note')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.toolbar{
   position: absolute;
   top: 0;
   border-right: 1px solid gray;
}
</style>
