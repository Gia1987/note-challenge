(function(exports){
  function testNoteListAddAndGet(){
    var note = new Note ('JavaScript')
    var noteList = new NoteList();
    noteList.addNote(note)
    assert.isTrue(noteList.getNote()[0] === note );
  }

  exports.testNoteListAddAndGet = testNoteListAddAndGet();
})(this);

(function(exports){
  function TestNoteCreateNote(){
    var notelist = new NoteList();
    notelist.createNote('JavaScript');
    assert.isTrue(notelist.getNote()[0].getText() === 'JavaScript');
  }
  exports.TestNoteCreateNote = TestNoteCreateNote();
})(this);
