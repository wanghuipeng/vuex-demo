<template>
  <div class="note">
    <Toolbar />
    <NotesList />
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar'
import NotesList from '../components/NotesList'

export default {
  components:{ Toolbar, NotesList },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
