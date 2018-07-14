let playing = false;
let score;
let heartsLeft;
let fruits = ['apple', 'cherries', 'mango', 'orange', 'peach', 'pineapple', 'raspberry', 'watermelon', 'banana'];
let step;
let action;

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
            startAction();

        }
    });


    function addHearts() {
        $('#hearts').empty();
        for (let i = 0; i < heartsLeft; i++) {
            $('#hearts').append('<img src="images/heart.png" class="life">');
        }
    }

    function startAction() {
        $('#fruit1').show();
        chooseFruit();
        $('#fruit1').css({
            'left': Math.round(550 * Math.random())
        });
        step = Math.round(Math.random() * 5) + 1;
        action = setInterval(function() {

            $('#fruit1').css('top', $('#fruit1').position().top + step);

            if ($('#fruit1').position().top > $('#fruitsContainer').height()) {
                if (heartsLeft > 1) {

                    //remove 1 heart
                    //create again random fruit

                    $('#fruit1').show();
                    chooseFruit();
                    $('#fruit1').css({
                        'left': Math.round(550 * Math.random())
                    });
                    step = Math.round(Math.random() * 5) + 1;
                    heartsLeft--;
                    addHearts();


                } else {
                    //game over
                    playing = false;
                    $('#startreset').html("Start game");
                    $('#gameOver').show();
                    $('#gameOver').html('<p>Game over!</p><p>Your score is ' + score + '</p>');
                    $('#hearts').hide();
                    stopAction();

                }
            }
        }, 10);
    }

    function chooseFruit() {
        let randomNumber = Math.floor(Math.random() * 9);
        $('#fruit1').attr('src', 'images/' + fruits[randomNumber] + '.png');
    }


    function stopAction() {
        clearInterval(action);
        $("#fruit1").hide();
    }

});

/*function generateNewFruit() {
    $('#fruit1').show();
    chooseFruit();
    $('#fruit1').css({
        'left': Math.round(550 * Math.random())
    });
    step = Math.round(Math.random() * 5) + 1;
*/
