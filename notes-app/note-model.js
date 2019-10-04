(function(exports) {
  function Note(text) {
    this.text = text
  }
  Note.prototype.showtext = function() {
    return this.text
  }
console.log("console log?")
  exports.Note = Note;
})(this);
