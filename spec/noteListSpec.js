(function(exports){

  function testNoteListAddAndGet(){
    var note = new Note ('JavaScript')
    var noteList = new NoteList();
    noteList.addNote(note)
    assert.isTrue('NoteList add&Get method' ,noteList.getNote()[0] === note );
  }

  function TestNoteCreateNote(){
    var notelist = new NoteList();
    notelist.createNote('JavaScript');
    assert.isTrue('NoteList createNote method',notelist.getNote()[0].getText() === 'JavaScript');
  }

  function TestNoteIsEmpty(){
    var notelist = new NoteList();
    assert.isEmpty('NoteList starts as an empty array', notelist.note.length === 0);
  }


  exports.TestNoteCreateNote = TestNoteCreateNote();

  exports.testNoteListAddAndGet = testNoteListAddAndGet();

  exports.TestNoteIsEmpty = TestNoteIsEmpty();

})(this);
