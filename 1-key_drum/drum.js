document.querySelector('body').addEventListener('keydown', function (event) {

    tecla = event.keyCode;

    function clicou() {
    document.getElementById(x).style.background = "black";
    }

    function back() {
        document.getElementById(x).style.background = "gray";
    }

    if (tecla == 65) {
        x = "clique_a";
        clicou();
        setTimeout(back, 200);
        document.getElementById("play1");
        play1.play();
    }
    if (tecla == 83) {
        x = "clique_s";
        clicou();
        setTimeout(back, 200);
        document.getElementById("play2");
        play2.play();
    }
    if (tecla == 68) {
        x = "clique_d";
        clicou();
        setTimeout(back, 200);
        document.getElementById("play3");
        play3.play();
    }
    if (tecla == 87) {
        x = "clique_w";
        clicou();
        setTimeout(back, 200);
        document.getElementById("play4");
        play4.play();
    }

});