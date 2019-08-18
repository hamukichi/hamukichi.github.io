/*jslint nomen:true */
/*global $ */


function sortCharacters(phrase) {
    return phrase.split('').sort('').join('');
}


function sortCharactersFromForm() {
    var inputPhrase = $('#input_phrase').val();
    var sortedPhrase = sortCharacters(inputPhrase);
    $('#sorting_result').html(sortedPhrase);
}


function pressedEnter(code) {
    if (code == 13) {
        sortCharactersFromForm();
        return false;
    }
}