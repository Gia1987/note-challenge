(function(exports){
  function testNoteText() {
    var note = new Note('JavaScript');
    if(note.getText() !== 'JavaScript'){
      throw new Error('text not defined');
  }
  console.log('passed')
};
testNoteText();
})(this);
