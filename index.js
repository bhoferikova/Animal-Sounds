var numberOfAnimals = document.querySelectorAll(".button").length;

for(var i=0; i < numberOfAnimals; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){;
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        animatedButton(buttonInnerHTML);
    });
}

    function makeSound(key){

        switch (key) {
            case "a":
                var aligator = new Audio("sounds/aligator.mp3");
                aligator.play();                
                break;                
            case "b":
                var antilopa = new Audio("sounds/antilopa.mp3");
                antilopa.play();                
                break;                        
            case "c":
                var bizon = new Audio("sounds/bizon.mp3");
                bizon.play();                
                break;
            case "d":
                var chrestys = new Audio("sounds/chrestys.mp3");
                chrestys.play();                
                break;
            case "e":
                var dinosaurus = new Audio("sounds/dinosaurus.mp3");
                dinosaurus.play();                
                break;
            case "f":
                var fretka = new Audio("sounds/fretka.mp3");
                fretka.play();                
                break;
            case "g":
                var holub = new Audio("sounds/holub.mp3");
                holub.play();                
                break;
            case "h":
                var jesterka = new Audio("sounds/jesterka.mp3");
                jesterka.play();                
                break;
            case "i":
                var jestrab = new Audio("sounds/jestrab.mp3");
                jestrab.play();                
                break;
            case "j":
                var jezek = new Audio("sounds/jezek.mp3");
                jezek.play();                
                break;
            case "k":
                var kachna = new Audio("sounds/kachna.mp3");
                kachna.play();                
                break;
            case "l":
                var kocka = new Audio("sounds/kocka.mp3");
                kocka.play();                
                break;
            case "m":
                var kohout = new Audio("sounds/kohout.mp3");
                kohout.play();                
                break;
            case "n":
                var kralik = new Audio("sounds/kralik.mp3");
                kralik.play();                
                break;
            case "o":
                var krava = new Audio("sounds/krava.mp3");
                krava.play();                
                break;
            case "p":
                var krocan = new Audio("sounds/krocan.mp3");
                krocan.play();                
                break;
            case "q":
                var krysa = new Audio("sounds/krysa.mp3");
                krysa.play();                
                break;
            case "r":
                var kun = new Audio("sounds/kun.mp3");
                kun.play();                
                break;
            case "s":
                var labut = new Audio("sounds/labut.mp3");
                labut.play();                
                break;
            case "t":
                var lama = new Audio("sounds/lama-alpaca.mp3");
                lama.play();                
                break;
            case "u":
                var lev = new Audio("sounds/lev.mp3");
                lev.play();                
                break;
            case "v":
                var liska = new Audio("sounds/liska.mp3");
                liska.play();                
                break;
            case "w":
                var delfin = new Audio("sounds/delfin1.mp3");
                delfin.play();                
                break;
            case "x":
                var morce = new Audio("sounds/morce.mp3");
                morce.play();                
                break;
            case "y":
                var motyl = new Audio("sounds/motyl.mp3");
                motyl.play();                
                break;
            case "z":
                var opice = new Audio("sounds/opice.mp3");
                opice.play();                
                break;
            case "aa":
                var ovce = new Audio("sounds/ovce.mp3");
                ovce.play();                
                break;
            case "bb":
                var prase = new Audio("sounds/prase.mp3");
                prase.play();                
                break;
            case "cc":
                var slepice = new Audio("sounds/slepice.mp3");
                slepice.play();                
                break;
            case "dd":
                var slon = new Audio("sounds/slon.mp3");
                slon.play();                
                break;
            case "ee":
                var sova = new Audio("sounds/sova.mp3");
                sova.play();                
                break;
            case "ff":
                var tygr = new Audio("sounds/tygr.mp3");
                tygr.play();                
                break;
            case "gg":
                var velryba = new Audio("sounds/velryba.mp3");
                velryba.play();                
                break;
            case "hh":
                var vrana = new Audio("sounds/vrana.mp3");
                vrana.play();                
                break;
            case "ii":
                var vydra = new Audio("sounds/vydra.mp3");
                vydra.play();                
                break;
            case "jj":
                var zaba = new Audio("sounds/zaba.mp3");
                zaba.play();                
                break;
            case "kk":
                var hroch = new Audio("sounds/hroch.mp3");
                hroch.play();                
                break;
            case "ll":
                var hyena = new Audio("sounds/hyena.mp3");
                hyena.play();                
                break;
            case "mm":
                var leopard = new Audio("sounds/leopard.mp3");
                leopard.play();                
                break;
            case "nn":
                var panda = new Audio("sounds/panda.mp3");
                panda.play();                
                break;
            case "oo":
                var papousek = new Audio("sounds/papousek-sedy-zako.mp3");
                papousek.play();                
                break;
            case "pp":
                var pes = new Audio("sounds/pes.mp3");
                pes.play();                
                break;
            case "qq":
                var tucnak = new Audio("sounds/tucnak.mp3");
                tucnak.play();                
                break;
            case "rr":
                var varan = new Audio("sounds/varan.mp3");
                varan.play();                
                break;
            case "ss":
                var vlk = new Audio("sounds/vlk.mp3");
                vlk.play();                
                break;
            case "tt":
                var zebra = new Audio("sounds/zebra.mp3");
                zebra.play();                
                break;
            case "uu":
                var zirafa = new Audio("sounds/zirafa.mp3");
                zirafa.play();                
                break;
            case "vv":
                var zralok = new Audio("sounds/zralok.mp3");
                zralok.play();                
                break;
                        
            default: console.log(buttonInnerHTML)
                break;        }
    };

    function animatedButton(currentKey){
        var activeButton = document.querySelector("." + currentKey);

        activeButton.classList.add("pressed-button");

        setTimeout(function(){
            activeButton.classList.remove("pressed-button");
        }, 200);
    }