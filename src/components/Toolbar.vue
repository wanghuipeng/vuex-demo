<template>
  <div class="toolbar">
    <i class="fa fa-plus" @click="addNote"></i>
    <i :class="favorite ? 'fa fa-heart' : 'fa fa-heart-o'" @click="toggleFavorite"></i>
    <i class="fa fa-remove" @click="deleteNote"></i>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations([
      'addNote',
      'toggleFavorite',
      'deleteNote'
    ]),
    ...mapState([
      'activeNote'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.toolbar{
   height: 100%;
   float: left;
   width: 30px;
   text-align: center;
   i{
     height: 30px;
     line-height: 30px;
     display: block;
   }
}
</style>
