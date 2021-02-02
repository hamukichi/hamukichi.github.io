/*jslint nomen:true */
/*global $ */


function sortCharacters(phrase) {
    return phrase.split('').sort().join('');
}


function setShareButton(msg) {
    var tweetMessage = msg || "";
    $(".tweet").socialbutton("twitter", {
        button: "horizontal",
        text: tweetMessage
    });
}


function sortCharactersFromForm() {
    var inputPhrase = $('#input_phrase').val();
    var sortedPhrase = sortCharacters(inputPhrase);
    $('#sorting_result').html(sortedPhrase);
    var shareMessage = "ソートなぞなぞ \n";
    shareMessage += "ソート前の文字列は？ ";
    shareMessage += sortedPhrase;
    shareMessage += " \n\n";
    setShareButton(shareMessage);
}


function pressedEnter(code) {
    if (code == 13) {
        sortCharactersFromForm();
        return false;
    }
}
