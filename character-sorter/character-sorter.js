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
    if ($('#remove_spaces').prop("checked")) {
        inputPhrase = inputPhrase.replace(/\s+/g, "");
    }
    var numWords = parseInt($('#num_words').val());
    var sortedPhrase = sortCharacters(inputPhrase);
    $('#sorting_result').html(sortedPhrase);
    var shareMessage = "";
    if (numWords <= 1) {
        shareMessage += "ソートなぞなぞ \n";
        shareMessage += "ソート前の文字列は？ \n";   
    } else {
        shareMessage += "マージなぞなぞ（" + String(numWords) + " 語） \n"
        shareMessage += "マージ＆ソート前の語句は？ \n";
    }
    shareMessage += sortedPhrase;
    shareMessage += " \n";
    $('#sorting_question').val(shareMessage);
    setShareButton(shareMessage);
}


function pressedEnter(code) {
    if (code == 13) {
        sortCharactersFromForm();
        return false;
    }
}
