function testNoteListHasEmptyArrayOnInstantiation() {
notelist = new NoteList()
assert.isTrue(notelist._notes.length === 0 )

}

function testMethodReturnsAllNotesInArray() {
notelist = new NoteList()
assert.isTrue(notelist.allNotes().length === 0 )
}



testNoteListHasEmptyArrayOnInstantiation();
testMethodReturnsAllNotesInArray();
