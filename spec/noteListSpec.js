(function(exports){
  function testNoteList(){
    var note = new Note ('JavaScript')
    var noteList = new NoteList();
    noteList.addNote(note)
    assert.isTrue(noteList.getNote()[0] === note );
  }
  exports.testNoteList = testNoteList();
})(this);
