(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    this._noteList.addNote("Favourite drink: seltzer");
    this._noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.outputHtml = function() {
      var elem = document.getElementById("app");
      console.log(elem.innerHTML);
      elem.innerHTML = this._noteListView.view();
  };

  exports.NoteController = NoteController;
})(this);