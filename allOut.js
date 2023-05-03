let timer = false;

$(document).ready(function () {
    let gomb;
    let kidb;
    let ki = 'rgb(205, 205, 152)';
    let be = 'rgb(255, 255, 0)';
    let lepesek = 1;
    let ido = 0;
    let im;

    let w = window.innerWidth;
    let h = window.innerHeight;

    let aktualisSzint = 1;

    $("#szabalyleiras").animate({
        height: 'toggle'
    }, 2000);


    let hatterzene = $('#hatterzene');
    let kapcsolohang = $('#kapcsolo');
    $(hatterzene).get(0).volume = 0.5;
    $(kapcsolohang).get(0).volume = 0.7;


    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            gomb = '<div id="' + i + '' + j + '" class="lampa"></div>';

            $(gomb).appendTo('#jatekter').css({
                top: 30 + (i * 70),
                left: 30 + (j * 70)
            });
        }
    }

    function csiga_alap(){
        $('#csiga').attr("src","csiga_megy_rem.png");
        $('#csiga').css({
            left: 0,
            top: 600
        });
    }

    // konfetti
    let szinek = ['yellow', 'red', 'blue', 'green', 'aqua', 'orange', 'pink']

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            konfetti = '<div class="konfetti" id="konfetti'+i+''+j+'"></div>';
            $(konfetti).appendTo('body').css({
                width: 0,
                height: 0,
                position: 'absolute',
                top: Math.floor(Math.random() * 500) + 100,
                left: Math.floor(Math.random() * 1300) + 100,
                'background-color': szinek[Math.floor(Math.random() * szinek.length)],
                rotate: Math.floor(Math.random() * 60)-30 +'deg'
            });
        }

    }

    function konfetti_alap(){
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                $('#konfetti'+i+''+j+'').css({
                    width: 0,
                    height: 0
                });
            }
        }
    }

    // im = setInterval(idomeres, 1000);

    elsoSzint();

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            $('#'+i+''+j+'').click(function () {

                $(kapcsolohang).get(0).play();
                $(hatterzene).get(0).play();

                $('#'+i+''+j+'').css('border','none');

                if(timer === false){
                    im = setInterval(idomeres, 1000);
                    timer = true;
                }


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

                $('#csiga').animate({
                        left: kidb*40
                }, 2000);

                if(kidb === 25){
                    // console.log("nyert");
                    $('#nyert').css('visibility', 'visible');
                    $('#konfettihang').get(0).play();

                    clearInterval(im);
                    timer = false;

                    for (let i = 0; i < 15; i++) {
                        for (let j = 0; j < 15; j++) {
                            $('#konfetti'+i+''+j+'').animate({
                                width: Math.floor(Math.random() * 7) + 5,
                                height: Math.floor(Math.random() * 17) + 5
                            }, 500).animate({
                                top: h/2,
                                left: w/2
                            }, 500).animate({
                                top: Math.floor(Math.random() * h) - 15,
                                left: Math.floor(Math.random() * w) - 15
                            }, 1000).animate({
                                top: h - 25
                            }, 2000);
                        }
                    }

                    $('#csiga').attr("src","csiga_boldog_rem.png");

                    $('#csiga').animate({
                        top: 500
                    }).animate({
                        top: 600
                    }).animate({
                        top: 500
                    }).animate({
                        top: 600
                    });

                    var nev = prompt("Add meg a neved:", "anonymus");
                    // eltaroljuk localStorage-ben az aktualis jatekos klikkeleseinek szamat
                    localStorage.setItem(nev, lepesek);

                    fill_toplist();
                }

            });
        }
    }


    function fill_toplist() {

        var data = [];
        for (var i = 0; i < localStorage.length; i++) {
            data[i] = [localStorage.key(i), parseInt(localStorage.getItem(localStorage.key(i)))];
        }

        data.sort(function (a, b) {
            return a[1] - b[1];
        });
        $('#lista').text("");

        for (let act_data of data.keys()) {
            if (act_data < 10) {
                $('#lista').append(data[act_data][0] + ' : ' + data[act_data][1] + '<br>');
            }
        }
    }

    function idomeres(){
        ido++;
        $('#mp').text(ido);
        if(kidb === 25){
            clearInterval(im);
        }
    }

    $('#megoldas').click(function (){
        if (confirm("Biztos megnézed a megoldást?")) {
            if(aktualisSzint === 1){
                elsoSzint();
                $('#info').css('visibility', 'visible');
                $('#00').css('border','black 2px solid');
                $('#04').css('border','black 2px solid');
                $('#22').css('border','black 2px solid');
                $('#40').css('border','black 2px solid');
                $('#44').css('border','black 2px solid');
            } else if(aktualisSzint === 2){
                masodikSzint();
                $('#info').css('visibility', 'visible');
                $('#11').css('border','black 2px solid');
                $('#13').css('border','black 2px solid');
                $('#40').css('border','black 2px solid');
                $('#42').css('border','black 2px solid');
                $('#44').css('border','black 2px solid');
            } else if(aktualisSzint === 3){
                harmadikSzint();
                $('#info').css('visibility', 'visible');
                $('#00').css('border','black 2px solid');
                $('#04').css('border','black 2px solid');
                $('#20').css('border','black 2px solid');
                $('#40').css('border','black 2px solid');
                $('#24').css('border','black 2px solid');
            } else if(aktualisSzint === 4){
                negyedikSzint();
                $('#info').css('visibility', 'visible');
                $('#10').css('border','black 2px solid');
                $('#20').css('border','black 2px solid');
                $('#30').css('border','black 2px solid');
                $('#31').css('border','black 2px solid');
                $('#32').css('border','black 2px solid');
                $('#23').css('border','black 2px solid');
                $('#13').css('border','black 2px solid');
                $('#03').css('border','black 2px solid');
                $('#02').css('border','black 2px solid');
                $('#01').css('border','black 2px solid');
            }
        } else {

        }
    })


    $('#szabaly').click(function (){
        $("#szabalyleiras").animate({
            height: 'toggle'
        });
    })

    function szint_alap(){
        $('#nyert').css('visibility', 'hidden');
        csiga_alap();
        konfetti_alap();

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                $('#'+i+''+j+'').css({
                    'background-color': ki,
                    'border': 'none'
                });
            }
        }
        lepesek = 0;
        $('#pontszam').text(lepesek);
        $('#info').css('visibility','hidden');
        ido = 0;
        $('#mp').text("0");
        clearInterval(im);
    }

    function elsoSzint(){
        szint_alap();

        aktualisSzint = 1;
        $('#hanyadikSzint').text('Első szint');

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
    }

    $('#elsoSzint').click(function () {
        elsoSzint();
    });

    function masodikSzint(){
        szint_alap();

        aktualisSzint = 2;
        $('#hanyadikSzint').text('Második szint');

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
    }

    $('#masodikSzint').click(function () {
        masodikSzint();
    });

    function harmadikSzint(){
        szint_alap();

        aktualisSzint = 3;
        $('#hanyadikSzint').text('Harmadik szint');

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
    }

    $('#harmadikSzint').click(function () {
        harmadikSzint();
    });

    function negyedikSzint() {
        szint_alap();

        aktualisSzint = 4;
        $('#hanyadikSzint').text('Negyedik szint');

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
    }

    $('#negyedikSzint').click(function () {
        negyedikSzint();
    });

});