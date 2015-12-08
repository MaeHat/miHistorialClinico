var lastRow = $('#last-row');
var lastInput = lastRow.find('input');

function addRow() {
    var newRow = $('<div><input name="multifield" placeholder="Value"><a class="row-delete"><img src="http://i.imgur.com/ZSoHl.png" /></a></div>');
    var newInput = newRow.find('input');
    lastRow.before(newRow);
    newInput.focus();

    var newDelete = newRow.find('a');
    newDelete.click(function() {
        newRow.remove();
    });
}

lastInput.focus(function() {
    addRow();
});