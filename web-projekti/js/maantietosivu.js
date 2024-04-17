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
var tulos = document.getElementById('oikein-vaarin')
var aloitaPeli = document.getElementById('start')

// Käytetään KysymysIndex laskemaan, monesko kysymys menossa
var KysymysIndex = 0;

var Kysymykset = [
    // tallennetaan kysymykset (väitteet) vastauksien ja selitysten kanssa
    { kysymys: 'Suomi on maa.', vastaus: 'totta', selitys: 'Totta, Suomi on maa Pohjois-Euroopassa!' },
    { kysymys: 'Maailmassa on 4 valtamerta.', vastaus: 'tarua', selitys: 'Tarua! Maailmassa on yhteensä 5 valtamerta: Atlantti, Tyynimeri, Intian valtameri, Eteläinen valtameri ja Pohjoinen jäämeri!' },
    { kysymys: 'Maa on kolmas planeetta Auringosta katsottuna.', vastaus: 'totta', selitys: 'Totta, Maa on kolmas planeetta Auringosta katsottuna!' },
    { kysymys: 'Pohjois-Amerikka on pinta-alaltaan maailman toiseksi suurin maanosa.', vastaus: 'tarua', selitys: 'Tarua! Afrikka on pinta-alaltaan maailman toiseksi suurin maanosa!' },
    { kysymys: 'Ekvaattori on toinen nimitys päiväntasaajalle.', vastaus: 'totta', selitys: 'Totta, ekvaattori on toinen nimitys päiväntasaajalle!' },
    { kysymys: 'Bulgarian pääkaupunki on Varna.', vastaus: 'tarua', selitys: 'Tarua, Bulgarian pääkaupunki on Sofia!' },
    { kysymys: 'Maailman suurin tulivuori sijaitsee Japanissa.', vastaus: 'tarua', selitys: 'Tarua, maailman suurin tulivuori sijaitsee Havaijilla!' },
    { kysymys: 'Yhdysvallat koostuvat 52 osavaltiosta.', vastaus: 'tarua', selitys: 'Tarua, Yhdysvallat koostuvat 50 osavaltiosta!' },
    { kysymys: 'Kanadan korkeimman vuoren nimi on Mount Logan.', vastaus: 'totta', selitys: 'Totta, Kanadan korkeimman vuoren nimi on Mount Logan!' },
    { kysymys: 'Tonava on Euroopan pisin joki.', vastaus: 'tarua', selitys: 'Tarua, Volga on Euroopan pisin joki!' },
];  


// Funktio pelin aloittamiselle - piilotetaan aloitusnappi sekä pelin ohje, sekä näytetään kaikki tarvittavat pelin osat.
function startGame() {

    localStorage.removeItem('pisteet'); // Poistetaan pisteet local storagesta
    pisteet = 0;

    document.getElementById('pisteet').innerText = "Pisteet: 0/10";

    aloitaPeli.style.display = 'none';
    document.getElementById('kysymys').style.display = 'inline';
    document.getElementById('kysymysTotta').style.display = 'inline';
    document.getElementById('kysymysTarua').style.display = 'inline';
    document.getElementById('pelinOhje').style.display = 'none';
    document.getElementById('uusiPeliHuom').style.display = 'none';
}

// Pelin lopetuksen funktio
function endGame() {
    document.getElementById('return').style.display = 'inline';

    document.getElementById('pelinAloitus').style.display = 'none';
    document.getElementById('napit').style.display = 'none';
    document.getElementById('seuraava_lopetus').style.display = 'none';
    selitys.style.display = 'none';
    tulos.style.display = 'none';
    document.getElementById('endGameButton').style.display = 'none';
    document.getElementById('loppu').innerText = "Kaikki kysymykset kysytty! Pisteesi näet alta.";

    // tallennetaan pisteet local storageen
    localStorage.setItem('pisteet', pisteet)
}

// funktio pelin alkuun palaamiselle - käytännössä vain päivittää sivun.
function returnStart() {
    window.location.reload();
}

// Pisteiden haku local storagesta
var localPisteet = localStorage.getItem('pisteet');
if (localPisteet !== null) {
    pisteet = localPisteet;
    document.getElementById('pisteet').innerText = "Pisteet: " + pisteet + "/10";
    document.getElementById('uusiPeliHuom').style.display = 'inline';
} else {
    document.getElementById('uusiPeliHuom').style.display = 'none';
}




// Luodaan funktio, joka näyttää kysymykset järjestyksessä, ja piilottaa totta - ja tarua -napit kysymysten päätyttyä.
function seuraavaKysymys() {
    if (KysymysIndex < Kysymykset.length) {
        kysymys = Kysymykset[KysymysIndex].kysymys;
        document.getElementById('kysymys').innerText = kysymys;
        KysymysIndex++;
    } else {

        document.getElementById('endGameButton').style.display = 'inline';
        document.getElementById('kysymysTotta').style.display = 'none';
        document.getElementById('kysymysTarua').style.display = 'none';
        nextButton.style.display = 'none';

        return;
    }
}

// Seuraava kysymys - funktio
function seuraava() {

    // kun seuraava- nappia painetaan, näkyviin tulee kysymys sekä totta ja tarua napit
    document.getElementById('kysymys').style.display = 'inline';
    document.getElementById('kysymysTotta').style.display = 'inline';
    document.getElementById('kysymysTarua').style.display = 'inline';
    
    // selitys sekä seuraava- nappi + tulos poistetaan näkyvistä pelin selkeyttämiseksi
    selitys.style.display = 'none';
    tulos.style.display = 'none';
    nextButton.style.display = 'none';

    
}


// Pisteiden laskun funktio
function vastaus(kayttajanVastaus) {
    var oikeaVastaus = Kysymykset[KysymysIndex - 1].vastaus; 
    if (kayttajanVastaus === oikeaVastaus) {
        pisteet++;
        document.getElementById('pisteet').innerText = "Pisteet: " + pisteet + "/10";
        tulos.innerText = "Oikein! +1p"
        tulos.style.color = 'green';
        tulos.style.fontSize = '1.3em';
    } else {
        tulos.innerText = "Väärin! 0p"
        tulos.style.color = 'red';
        tulos.style.fontSize = '1.3em';
    }

    // Oikean vastauksen selitys sekä totta - ja tarua nappejen piilotus + kysymyksen piilotus (seuraava- napin ajaksi)
    var selitysTeksti = Kysymykset[KysymysIndex - 1].selitys;
    selitys.innerText = selitysTeksti;
    selitys.style.display = 'inline';
    tulos.style.display = 'inline';
    document.getElementById('kysymys').style.display = 'none';
    document.getElementById('kysymysTotta').style.display = 'none'; 
    document.getElementById('kysymysTarua').style.display = 'none';
    nextButton.style.display = 'inline';


    seuraavaKysymys();
}


seuraavaKysymys();




