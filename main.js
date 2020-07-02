var countTurn = 0;

(function() { 
    alert("welcome to the Tic Tac Toe");
})();

function winer($winers) { 
    alert("the winer is" + $winers);
    location.reload();
}

var Oneturn = 1;

$("button").click(function () { 
    if (Oneturn == 1) {
        $("#screen").text("turn of player number two");
        $(this).addClass("fa fa-times-circle-o");  
        Oneturn = 2; 
    }else {
        $("#screen").text("turn of player number one");
        $(this).addClass("fa fa-check-circle-o");
        Oneturn = 1;
    }
})

function tiedGame() {
    alert("the game has been tied");
    location.reload();
}

$("button").click(function () {
    if ($(this).hasClass("fa fa-times-circle-o")) {
        var time = check("fa fa-times-circle-o");

        $(this).css("background-color", "red");
        setTimeout(() => {
            $(this).css("background-color", "red");
        }, 800);
        setTimeout(() => {
            if (time) {
                return winer("X");
            }
        },820);
    }else {
        if ($(this).hasClass("fa fa-check-circle-o")) {

            var time = check("fa fa-check-circle-o");
            $(this).css("background-color", "blue");

            setTimeout(() => {
                $(this).css("background-color", "blue");
            }, 800);
            setTimeout(() => {
                if (time) {
                    return winer("O");
                }
            },820);
        }
    }
});
function check(symbol) { 
if ($(".1").hasClass(symbol) && $(".2").hasClass(symbol) && $(".3").hasClass(symbol)) 
    {
        $(".1").css("color", "green");
        $(".2").css("color", "green");
        $(".3").css("color", "green");
        return true;
    }
    else if($(".4").hasClass(symbol) && $(".5").hasClass(symbol) && $(".6").hasClass(symbol)) { 
        $(".4").css("color", "green");
        $(".5").css("color", "green");
        $(".6").css("color", "green");
        return true;
    }
    else if($(".7").hasClass(symbol) && $(".8").hasClass(symbol) && $(".9").hasClass(symbol)) { 
        $(".7").css("color", "green");
        $(".8").css("color", "green");
        $(".9").css("color", "green");
        return true;
    }
    else if($(".1").hasClass(symbol) && $(".5").hasClass(symbol) && $(".9").hasClass(symbol)) { 
        $(".1").css("color", "green");
        $(".5").css("color", "green");
        $(".9").css("color", "green");
        return true;
    }

    else if($(".3").hasClass(symbol) && $(".5").hasClass(symbol) && $(".7").hasClass(symbol)) { 
        $(".3").css("color", "green");
        $(".5").css("color", "green");
        $(".7").css("color", "green");
        return true;
    }
    else if($(".1").hasClass(symbol) && $(".4").hasClass(symbol) && $(".7").hasClass(symbol)) { 
        $(".1").css("color", "green");
        $(".4").css("color", "green");
        $(".7").css("color", "green");
        return true;
    }
    else if($(".2").hasClass(symbol) && $(".5").hasClass(symbol) && $(".8").hasClass(symbol)) { 
        $(".2").css("color", "green");
        $(".5").css("color", "green");
        $(".8").css("color", "green");
        return true;
    }

    else if($(".3").hasClass(symbol) && $(".6").hasClass(symbol) && $(".9").hasClass(symbol)) { 
        $(".3").css("color", "green");
        $(".6").css("color", "green");
        $(".9").css("color", "green");
        return true;
    }else { 
        countTurn++;
        console.log(countTurn);
        if (countTurn == 9 ) {
            setTimeout(() => { 
                return tiedGame();
            } , 820
        )
    }else { 
        return false;
        }
    }
}