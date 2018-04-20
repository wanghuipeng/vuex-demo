<template>
  <div class="note">
    <Toolbar />
    <NotesList />
    <NotesEditor />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import NotesList from '@/components/NotesList'
import NotesEditor from '@/components/NotesEditor'

export default {
  components: { Toolbar, NotesList, NotesEditor },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note{
  height: 100%;
}
</style>
