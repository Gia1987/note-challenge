(function(exports){
  function testNoteListAddAndGet(){
    var note = new Note ('JavaScript')
    var noteList = new NoteList();
    noteList.addNote(note)
    assert.isTrue('NoteList add&Get method' ,noteList.getNote()[0] === note );
  }

  exports.testNoteListAddAndGet = testNoteListAddAndGet();
})(this);

(function(exports){
  function TestNoteCreateNote(){
    var notelist = new NoteList();
    notelist.createNote('JavaScript');
    assert.isTrue('NoteList createNote method',notelist.getNote()[0].getText() === 'JavaScript');
  }
  exports.TestNoteCreateNote = TestNoteCreateNote();
})(this);

(function(exports){
  function TestNoteIsEmpty(){
    var notelist = new NoteList();
    assert.isEmpty('NoteList starts as an empty array', notelist.note.length === 0);
  }
  exports.TestNoteIsEmpty = TestNoteIsEmpty();
})(this);
