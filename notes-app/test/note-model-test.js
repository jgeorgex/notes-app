function showTextFunctionReturnsTheNoteText() {
  testName = arguments.callee.name;
  note = new Note('My fav language is JS')
  assert.isTrue(note.showtext() === 'My fav language is JS', testName)
}

showTextFunctionReturnsTheNoteText()
