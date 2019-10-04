function testNoteListViewReturnsHTMLForNoteList() {
  notelist = new NoteList()
  notelist.addNote('notecoffee')
  notelist.addNote('notecoffee two the bigger coffee')
  let noteListView = new NoteListView(notelist);
  if (noteListView.view() !== "<li>notecoffee</li><li>notecoffee two the bigger coffee</li>"){
    throw new Error("No new page available")
  }
}

function testMethodReturnsNoNotesInArray() {
  testName = arguments.callee.name;
  notelist = new NoteList()
  assert.isTrue(notelist.allNotes().length === 0, testName )
}

function testMethodReturnsOneNoteInArray() {
  testName = arguments.callee.name;
  notelist = new NoteList()
  notelist.addNote("note1")
  let noteListView = new NoteListView(notelist);
  assert.isTrue(notelist.allNotes().length === 1, testName+" 1");
  assert.isTrue(notelist.allNotes()[0].showtext() === "note1", testName+" 2" );
}

function testMethodReturnsTwoNoteInArray() {
  testName = arguments.callee.name;
  notelist = new NoteList()
  notelist.addNote("note1")
  notelist.addNote("note2")
  let noteListView = new NoteListView(notelist);
  assert.isTrue(notelist.allNotes().length === 2 );
  assert.isTrue(notelist.allNotes()[0].showtext() === "note1", testName+" 1" );
  assert.isTrue(notelist.allNotes()[1].showtext() === "note2", testName+" 2" );
}

testMethodReturnsTwoNoteInArray();
testNoteListViewReturnsHTMLForNoteList();
testMethodReturnsNoNotesInArray();
testMethodReturnsOneNoteInArray();
