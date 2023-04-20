$(document).ready(function () {
    let gomb;
    let kidb;
    let ki = 'rgb(205, 205, 152)';
    let be = 'rgb(255, 255, 0)';
    let lepesek = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            gomb = '<div id="' + i + '' + j + '" class="lampa"></div>';

            $(gomb).appendTo('#jatekter').css({
                top: 30 + (i * 70),
                left: 30 + (j * 70)
            });
        }
    }

    //elso szint
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            $('#'+i+''+j+'').css('background-color', ki);
        }
    }
    lepesek = 0;
    $('#pontszam').text(lepesek);

    $('#00').css('background-color', be);
    $('#01').css('background-color', be);
    $('#03').css('background-color', be);
    $('#04').css('background-color', be);
    $('#10').css('background-color', be);
    $('#12').css('background-color', be);
    $('#14').css('background-color', be);
    $('#21').css('background-color', be);
    $('#22').css('background-color', be);
    $('#23').css('background-color', be);
    $('#30').css('background-color', be);
    $('#32').css('background-color', be);
    $('#34').css('background-color', be);
    $('#40').css('background-color', be);
    $('#41').css('background-color', be);
    $('#43').css('background-color', be);
    $('#44').css('background-color', be);


    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            $('#'+i+''+j+'').click(function () {

                if($(this).css('background-color') === ki){
                    $(this).css('background-color', be);
                } else if($(this).css("background-color") === be) {
                    $(this).css('background-color', ki);
                }

                let felette = $('#'+(i-1)+''+(j)+'');
                if($(felette).css('background-color') === ki){
                    $(felette).css('background-color', be);
                } else if($(felette).css("background-color") === be) {
                    $(felette).css('background-color', ki);
                }
                let alatta = $('#'+(i+1)+''+(j)+'');
                if($(alatta).css('background-color') === ki){
                    $(alatta).css('background-color', be);
                } else if($(alatta).css("background-color") === be) {
                    $(alatta).css('background-color', ki);
                }
                let balra = $('#'+(i)+''+(j-1)+'');
                if($(balra).css('background-color') === ki){
                    $(balra).css('background-color', be);
                } else if($(balra).css("background-color") === be) {
                    $(balra).css('background-color', ki);
                }
                let jobbra = $('#'+(i)+''+(j+1)+'');
                if($(jobbra).css('background-color') === ki){
                    $(jobbra).css('background-color', be);
                } else if($(jobbra).css("background-color") === be) {
                    $(jobbra).css('background-color', ki);
                }


                lepesek++;
                $('#pontszam').text(lepesek);


                kidb=0
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        if ($('#'+i+''+j+'').css('background-color')===ki) {
                            kidb++;
                        }
                    }
                }
                if(kidb === 25){
                    console.log("nyert");
                    $('#nyert').css('visibility', 'visible');


                }
                // console.log('#'+i+''+j+'');

            });
        }
    }

    $('#szabaly').click(function (){
        if($('#szabalyleiras').css('visibility') === 'hidden'){
            $('#szabalyleiras').css('visibility', 'visible');
        } else {
            $('#szabalyleiras').css('visibility', 'hidden');
        }

    })

    $('#elsoSzint').click(function () {
        $('#nyert').css('visibility', 'hidden');
        $('#szabalyleiras').css('visibility', 'hidden');
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                $('#'+i+''+j+'').css('background-color', ki);
            }
        }
        lepesek = 0;
        $('#pontszam').text(lepesek);

        $('#00').css('background-color', be);
        $('#01').css('background-color', be);
        $('#03').css('background-color', be);
        $('#04').css('background-color', be);
        $('#10').css('background-color', be);
        $('#12').css('background-color', be);
        $('#14').css('background-color', be);
        $('#21').css('background-color', be);
        $('#22').css('background-color', be);
        $('#23').css('background-color', be);
        $('#30').css('background-color', be);
        $('#32').css('background-color', be);
        $('#34').css('background-color', be);
        $('#40').css('background-color', be);
        $('#41').css('background-color', be);
        $('#43').css('background-color', be);
        $('#44').css('background-color', be);
    });

    $('#masodikSzint').click(function () {
        $('#nyert').css('visibility', 'hidden');
        $('#szabalyleiras').css('visibility', 'hidden');
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                $('#'+i+''+j+'').css('background-color', ki);
            }
        }
        lepesek = 0;
        $('#pontszam').text(lepesek);

        $('#01').css('background-color', be);
        $('#03').css('background-color', be);
        $('#10').css('background-color', be);
        $('#11').css('background-color', be);
        $('#13').css('background-color', be);
        $('#14').css('background-color', be);
        $('#21').css('background-color', be);
        $('#23').css('background-color', be);
        $('#30').css('background-color', be);
        $('#32').css('background-color', be);
        $('#34').css('background-color', be);
        $('#40').css('background-color', be);
        $('#42').css('background-color', be);
        $('#44').css('background-color', be);
    });

    $('#harmadikSzint').click(function () {
        $('#nyert').css('visibility', 'hidden');
        $('#szabalyleiras').css('visibility', 'hidden');
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                $('#'+i+''+j+'').css('background-color', ki);
            }
        }
        lepesek = 0;
        $('#pontszam').text(lepesek);

        $('#00').css('background-color', be);
        $('#01').css('background-color', be);
        $('#03').css('background-color', be);
        $('#04').css('background-color', be);
        $('#20').css('background-color', be);
        $('#21').css('background-color', be);
        $('#23').css('background-color', be);
        $('#24').css('background-color', be);
        $('#34').css('background-color', be);
        $('#40').css('background-color', be);
        $('#41').css('background-color', be);
    });

    $('#negyedikSzint').click(function () {
        $('#nyert').css('visibility', 'hidden');
        $('#szabalyleiras').css('visibility', 'hidden');
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                $('#'+i+''+j+'').css('background-color', ki);
            }
        }
        lepesek = 0;
        $('#pontszam').text(lepesek);

        $('#02').css('background-color', be);
        $('#03').css('background-color', be);
        $('#04').css('background-color', be);
        $('#13').css('background-color', be);
        $('#14').css('background-color', be);
        $('#20').css('background-color', be);
        $('#24').css('background-color', be);
        $('#30').css('background-color', be);
        $('#31').css('background-color', be);
        $('#40').css('background-color', be);
        $('#41').css('background-color', be);
        $('#42').css('background-color', be);
    });

    // $('#hatterzene').play();

});