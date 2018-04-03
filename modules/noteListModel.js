(function(exports){
  function NoteList(){
    this.note = [];
  };

  NoteList.prototype.addNote = function(note){
    this.note.push(note);
  };

  NoteList.prototype.getNote = function(){
    return this.note;
  }

  exports.NoteList = NoteList;
})(this);
