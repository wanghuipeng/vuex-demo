import * as types from './mutations-types.js'

export default {
  // ta切换
  [types.CHANGE_LIST_STATUS] (state, bool) {
    state.isAllList = bool
  },
  // 添加note项
  [types.ADDNOTE] (state) {
    // 初始化note项
    const newNote = {
      text: 'new note',
      id: Math.random(),
      favotite: !state.isAllList
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  // 编辑note项
  [types.EDITNOTE] (state, text) {
    state.activeNote.text = text
  },
  // 删除note项
  [types.DELETENOTE] (state) {
    let id = state.activeNote['id']
    let index = state.notes.findIndex((v, i) => {
      if (id === v['id']) {
        return true
      } else {
        return false
      }
    })
    if (index >= 0) {
      state.notes.splice(index, 1)
    }
    state.activeNote = state.notes[0] || {}
  },
  // 喜欢切换
  [types.TOGGLEFAVORITE] (state) {
    state.activeNote.favotite = !state.activeNote.favotite
  },
  // 设置激活项
  [types.SETFAVORITE] (state, note) {
    state.activeNote = note
  }
}
