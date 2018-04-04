(function (exports){
  function NoteListView(list){
    this.listNote = list;
  }

  NoteListView.prototype.listView = function() {
    var listHtml = '<ul>'
    var notelist = this.listNote.getNote();
    for (var i = 0; i < notelist.length; i ++) {
      listHtml += "<li><div>" + notelist[i].getText() + "</div></li>";
  }
  listHtml += '</ul>'
  return listHtml
};

exports.NoteListView = NoteListView;
})(this);
