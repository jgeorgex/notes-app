(function (exports) {
  function NoteListView(NoteList) {
    var notelist = NoteList
  }

  NoteListView.prototype.view = function() {

    var arrayofnotes = notelist.allNotes()
    var htmlnote = ""
    for (var i = 0; i < arrayofnotes.length; i++) {
      var singlenote = arrayofnotes[i]
      var note = singlenote.text
      htmlnote += "<li>" + note + "</li>"
    }

    return htmlnote
  }

  exports.NoteListView = NoteListView
})(this);
