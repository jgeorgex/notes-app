(function(exports) {
  function NoteList() {
    this._notes = [];
  };
  NoteList.prototype.allNotes = function() {
    return this._notes;
  };

  exports.NoteList = NoteList;
})(this);
