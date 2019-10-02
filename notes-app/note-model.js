(function(exports) {
  function Note(text) {
    this.text = text
  }
  Note.prototype.showtext = function() {
    return this.text
  }

  exports.Note = Note;
})(this);
