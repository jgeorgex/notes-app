function testNoteListHasEmptyArrayOnInstantiation() {
  testName = arguments.callee.name;
  notelist = new NoteList()
  assert.isTrue(notelist._notes.length === 0, testName )
}

function testMethodReturnsAllNotesInArray() {
  testName = arguments.callee.name;
  notelist = new NoteList()
  assert.isTrue(notelist.allNotes().length === 0, testName )
}

function testCreateSingleNoteFromString() {
  testName = arguments.callee.name;
  notelist = new NoteList()
  notelist.addNote('Fav drink: seltzer')
  assert.isTrue(notelist._notes[0].text === 'Fav drink: seltzer', testName)
}

testNoteListHasEmptyArrayOnInstantiation();
testMethodReturnsAllNotesInArray();
testCreateSingleNoteFromString();
