function testNoteListViewReturnsHTMLForNoteList() {
  notelist = new NoteList()
  let noteListView = new NoteListView(notelist);
  if (noteListView.view() !== "<html> <head> TESTARAMA! </head> <body> MORE TESTARAMA! </body> </html>"){
    throw new Error("No new page available")
  }
}

function testMethodReturnsNoNotesInArray() {
  notelist = new NoteList()
  assert.isTrue(notelist.allNotes().length === 0 )
}

function testMethodReturnsOneNoteInArray() {
  notelist = new NoteList()
  notelist.addNote("note1")
  let noteListView = new NoteListView(notelist);
  assert.isTrue(notelist.allNotes().length === 1 );
  assert.isTrue(notelist.allNotes()[0].showtext() === "note1" );
}

function testMethodReturnsTwoNoteInArray() {
  notelist = new NoteList()
  notelist.addNote("note1")
  notelist.addNote("note2")
  let noteListView = new NoteListView(notelist);
  assert.isTrue(notelist.allNotes().length === 2 );
  assert.isTrue(notelist.allNotes()[0].showtext() === "note1" );
  assert.isTrue(notelist.allNotes()[1].showtext() === "note2" );
}

testMethodReturnsTwoNoteInArray();
testNoteListViewReturnsHTMLForNoteList();
testMethodReturnsNoNotesInArray();
testMethodReturnsOneNoteInArray();
