(function(exports){
  function testNoteText() {
    var note = new Note('JavaScript');
    assert.isTrue('NoteText has defined', note.getText() === 'JavaScript')
};
exports.testNoteText = testNoteText();
})(this);
