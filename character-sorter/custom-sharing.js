/*jslint nomen:true */
/*global $ */


function sharePhrase() {
    var sortedPhrase = $('#sorting_result').text();
    var shareText = "ソートなぞなぞ\n";
    shareText += sortedPhrase;
    shareText += "(powered by ${title} ${link})";
    var a2a_config = a2a_config || {};
    a2a_config.templates = a2a_config.templates || {};
    a2a_config.templates.email = {
        body: shareText
    };
    a2a_config.templates.sms = {
        body: shareText
    };
    a2a_config.templates.twitter = {
        text: shareText,
    };
}
