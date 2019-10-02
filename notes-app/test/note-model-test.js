function showTextFunctionReturnsTheNoteText() {
  note = new Note('My fav language is JS')
  assert.isTrue(note.showtext() === 'My fav language is JS')
}

showTextFunctionReturnsTheNoteText()
