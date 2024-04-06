/* Funktio responsiiviselle navigaatiolle (lisätään luokan nimen perään responsive - loput muokkaukset media queryssä*/

function navFunction() {
    var x = document.getElementById("navigaatio");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}


// Peli

var pisteet = 0;
var kysymys
var selitys = document.getElementById('vastauksen_selitys')
var nextButton = document.getElementById('seuraavaButton')

// Käytetään KysymysIndex laskemaan, monesko kysymys menossa
var KysymysIndex = 0;

var Kysymykset = [
    // tallennetaan kysymykset (väitteet) vastauksien ja selitysten kanssa
    { kysymys: 'Suomi on maa.', vastaus: 'totta', selitys: 'Totta, Suomi on maa Pohjois-Euroopassa!' },
    { kysymys: 'Maailmassa on 4 valtamerta.', vastaus: 'tarua', selitys: 'Tarua! Maailmassa on yhteensä 5 valtamerta: Atlantti, Tyynimeri, Intian valtameri, Eteläinen valtameri ja Pohjoinen jäämeri!' },
    { kysymys: 'Maa on kolmas planeetta Auringosta katsottuna.', vastaus: 'totta', selitys: 'Totta, Maa on kolmas planeetta Auringosta katsottuna!' },
    { kysymys: 'Pohjois-Amerikka on pinta-alaltaan maailman toiseksi suurin maanosa.', vastaus: 'tarua', selitys: 'Tarua! Afrikka on pinta-alaltaan maailman toiseksi suurin maanosa!' },
    { kysymys: 'Ekvaattori on toinen nimitys päiväntasaajalle.', vastaus: 'totta', selitys: 'Totta, ekvaattori on toinen nimitys päiväntasaajalle!' },
];  

// Luodaan funktio, joka näyttää kysymykset järjestyksessä, ja piilottaa totta - ja tarua -napit kysymysten päätyttyä.
function seuraavaKysymys() {
    if (KysymysIndex < Kysymykset.length) {
        kysymys = Kysymykset[KysymysIndex].kysymys;
        document.getElementById('kysymys').innerText = kysymys;
        KysymysIndex++;
    } else {

        document.getElementById('kysymysTotta').style.display = 'none';
        document.getElementById('kysymysTarua').style.display = 'none';
        nextButton.style.display = 'none';
        document.getElementById('loppu').innerText = "Kaikki kysymykset kysytty! Pisteesi näet alta.";
        return;
    }
}

// Seuraava kysymys - funktio
function seuraava() {

    // kun seuraava- nappia painetaan, näkyviin tulee kysymys sekä totta ja tarua napit
    document.getElementById('kysymys').style.display = 'inline';
    document.getElementById('kysymysTotta').style.display = 'inline';
    document.getElementById('kysymysTarua').style.display = 'inline';
    
    // selitys sekä seuraava- nappi poistetaan näkyvistä pelin selkeyttämiseksi
    selitys.style.display = 'none';

    nextButton.style.display = 'none';

    
}


// Pisteiden laskun funktio
function vastaus(kayttajanVastaus) {
    var oikeaVastaus = Kysymykset[KysymysIndex - 1].vastaus; 
    if (kayttajanVastaus === oikeaVastaus) {
        pisteet++;
        document.getElementById('pisteet').innerText = "Pisteet: " + pisteet;
        alert("Oikein!");
    } else {
        alert("Väärin!");
    }

    // Oikean vastauksen selitys sekä totta - ja tarua nappejen piilotus + kysymyksen piilotus (seuraava- napin ajaksi)
    var selitysTeksti = Kysymykset[KysymysIndex - 1].selitys;
    selitys.innerText = selitysTeksti;
    selitys.style.display = 'inline';
    document.getElementById('kysymys').style.display = 'none';
    document.getElementById('kysymysTotta').style.display = 'none'; 
    document.getElementById('kysymysTarua').style.display = 'none';
    nextButton.style.display = 'inline';


    seuraavaKysymys();
}


seuraavaKysymys();




