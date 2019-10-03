function canBeInstantiated() {
  noteList = new NoteList();
  noteController = new NoteController(noteList);
  assert.isTrue(noteController !== undefined);
}
canBeInstantiated();
