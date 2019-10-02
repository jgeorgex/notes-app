(function(exports) {
  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.allNotes = function() {
    return this._notes;
  };

  NoteList.prototype.addNote = function(text) {
    note = new Note(text)
    this._notes.push(note);
  }

  exports.NoteList = NoteList;
})(this);
