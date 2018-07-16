let playing = false;
let score;
let heartsLeft;
//let fruits = ['apple', 'cherries', 'mango', 'orange', 'peach', 'pineapple', 'raspberry', 'watermelon', 'banana'];
let step;
let action;


$(function() {
    $('#startreset').click(function() {
        if (playing) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            $('#scorevalue').html(score.toString());

            $('#hearts').show();
            heartsLeft = 3;
            game.addHearts();
            $("#gameOver").hide();
            $('#startreset').html('Reset game');
            game.startAction();

        }
    });


    $("#fruit1").mouseover(function() {
        score++;
        $("#scorevalue").html(score);
        $("#slice-sound")[0].play();
        clearInterval(action);
        //stopAction();
        $("#fruit1").hide("explode", 200);
        //startAction();
        setTimeout(game.startAction, 300);
    });

    function generateNewFruit() {
        $('#fruit1').show();
        this.chooseFruit();
        $('#fruit1').css({
            'left': Math.round(550 * Math.random()),
            'top': -50
        });
        let step = Math.round(Math.random() * 5) + 1;
    }

    const game = {
        fruits: ['apple', 'cherries', 'mango', 'orange', 'peach', 'pineapple', 'raspberry', 'watermelon', 'banana'],
        stopAction: function() {
            clearInterval(action);
            $("#fruit1").hide();
        },
        chooseFruit: function() {
            let randomNumber = Math.floor(Math.random() * game.fruits.length);
            $('#fruit1').attr('src', 'images/' + game.fruits[randomNumber] + '.png');
        },
        addHearts: function() {
            $('#hearts').empty();
            for (let i = 0; i < heartsLeft; i++) {
                $('#hearts').append('<img src="images/heart.png" class="life">');
            }
        },
        startAction: function() {
            generateNewFruit();
            let action = setInterval(function() {
                $("#fruit1").css('top', $("#fruit1").position().top + step);
                if ($("#fruit1").position().top > $("#fruitsContainer").height()) {
                    if (heartsLeft > 1) {
                        generateNewFruit();
                        heartsLeft--;
                        this.addHearts();
                    } else {
                        playing = false;
                        $("#startreset").html("Start Game");
                        $("#gameOver").show();
                        $("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
                        $("#hearts").hide();
                        this.stopAction();
                    }
                }
            }, 10);
        },
    }
});
