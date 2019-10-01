(function () {
    notelist = new NoteList()
    let noteListView = new NoteListView(notelist);
    // let noteListView = noteListView.NoteList
if (noteListView.view !== "New page"){
  throw new Error("No new page available")
}
})(this);
