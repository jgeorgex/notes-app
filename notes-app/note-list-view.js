(function (exports) {
  function NoteListView(NoteList) {
    var notelist = NoteList
  }

  NoteListView.prototype.view = function() {
    return "<html> <head> TESTARAMA! </head> <body> MORE TESTARAMA! </body> </html>"
  }
  
  exports.NoteListView = NoteListView
})(this);
