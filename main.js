let playing = false;
let score;

$(function() {
    $('#startreset').click(function() {
        if (playing) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            console.log(score);
        }
    });
});