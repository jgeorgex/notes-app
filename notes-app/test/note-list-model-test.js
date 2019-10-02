function testNoteListHasEmptyArrayOnInstantiation() {
notelist = new NoteList()
assert.isTrue(notelist._notes.length === 0 )

}

function testMethodReturnsAllNotesInArray() {
notelist = new NoteList()
assert.isTrue(notelist.allNotes().length === 0 )
}

function testCreateSingleNoteFromString() {
notelist = new NoteList()
notelist.addNote('Fav drink: seltzer')
assert.isTrue(notelist._notes[0].text === 'Fav drink: seltzer')
}


testNoteListHasEmptyArrayOnInstantiation();
testMethodReturnsAllNotesInArray();
testCreateSingleNoteFromString();
