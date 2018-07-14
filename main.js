let playing = false;
let score;
let heartsLeft;

$(function() {
    $('#startreset').click(function() {
        if (playing) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            $('#scorevalue').html(score);

            $('#hearts').show();
            heartsLeft = 3;
            addHearts();

            $('#startreset').html('Reset game');


        }
    });
});

function addHearts() {
    for (let i = 0; i < heartsLeft; i++) {
        $('#hearts').append('<img src="images/heart.png" class="life">');
    }
}

function startAction() {
    $('#fruitsContainer').append('<img src="images/apple.png" class="fruit">');
}
