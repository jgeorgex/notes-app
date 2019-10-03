function testNoteListViewReturnsHTMLForNoteList() {
  notelist = new NoteList()
  let noteListView = new NoteListView(notelist);
  if (noteListView.view === "<html> <head> TESTARAMA! </head> <body> MORE TESTARAMA! </body> </html>"){
    throw new Error("No new page available")
  }
}

testNoteListViewReturnsHTMLForNoteList();
