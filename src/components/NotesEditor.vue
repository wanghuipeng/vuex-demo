<template>
  <div class="notesEditor">
    <textarea>notesEditor</textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.notesEditor{
  height: 100%;
  margin-left: 280px;
  textarea{
    width: 100%;
    height: 100%;
    padding: 15px;
  }
}
</style>
