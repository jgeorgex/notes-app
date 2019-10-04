function canBeInstantiated() {
  testName = arguments.callee.name;
  noteList = new NoteList();
  noteController = new NoteController(noteList);
  assert.isTrue(noteController !== undefined, testName);
}

function controllerOutputsHtml() {

}

canBeInstantiated();
