(function(exports){
  function TestNoteViewList(){
    var notelist = new NoteList;
    notelist.createNote("JavaScript");

    var noteListView = new NoteListView(notelist);
    listHtml = noteListView.listView();
    output = "<ul><li><div>JavaScript</div></li></ul>";


    assert.isTrue('NoteView single note',listHtml === output);

  };
  exports.TestNoteViewList = TestNoteViewList();
})(this);

(function(exports){
  function TestNoteMultipleView(){
    var notelist = new NoteList;
    notelist.createNote("JavaScript");
    notelist.createNote("PHP");

    var noteListView = new NoteListView(notelist);
    listHtml = noteListView.listView();
    output = "<ul><li><div>JavaScript</div></li><li><div>PHP</div></li></ul>";
    assert.isTrue('NoteView multiple notes',listHtml === output);

  };
  exports.TestNoteMultipleView = TestNoteMultipleView();
})(this);

(function(exports){
  function TestNoteViewNoNote(){
    var notelist = new NoteList;

    var noteListView = new NoteListView(notelist);
    listHtml = noteListView.listView();
    output = "<ul></ul>";
    assert.isTrue('NoteView NoNote',listHtml === output);

  };
  exports.TestNoteViewNoNote = TestNoteViewNoNote();
})(this);
