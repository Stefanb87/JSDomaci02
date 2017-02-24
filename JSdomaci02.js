$("button#D1").on('click', function sumaPrirBrojeva () {
$('div#rezText1').text('');
do {
   var user = prompt("Unesi ceo, nenegativan broj:");
} while ((user <= 0) || (user!=Number(user)) || user%1 != 0);
    var sum = 0;

    for (i=0; i<=user; i++) {
    sum = sum + i;
    }
$('div#rezText1').append(sum);

});


$("button#D2").on('click', function faktorijel () {
$('div#rezText2').text('');
do {
   var user = prompt("Unesi ceo, nenegativan broj:");
} while ((user <= 0) || (user!=Number(user)) || user%1 != 0);
    var fak = 1;

    for (i=1; i<=user; i++) {
    fak = fak * i;
    }
$('div#rezText2').append(fak);

});


$("button#D3").on('click', function kupovnaMoc () {
$('div#rezText3').text('');
do {
    var racun = prompt("Koliko imas kesa?");
} while ((racun % 1!= 0) || (racun<0) || (racun!=Number(racun)));
do {
    var cena = prompt("Koja je cena proizvoda? \n *moras uneti broj veci od nule.");
}
while ((cena % 1!= 0) || (cena<=0) || (cena!=Number(cena)));
	if (cena>racun) {
		alert('Proizvod kosta vise nego sto imas para na racunu.')
	}

    var kolicinaProizvoda = racun / cena;
    var kolicinaProizvodaCeoBr = Math.floor(kolicinaProizvoda);
$('div#rezText3').append('<p> Mozes kupiti ' + kolicinaProizvodaCeoBr + ' proizvoda.</p>');
});


$("button#D4").on('click', function zbirBrojevaInterval () {
$('div#rezText4').text('');
var n;

do {
	n = prompt("Unesi ceo broj:");
}
while ((n % 1!= 0))
	n = Number(n);
do {
	var k = prompt("Unesi jos jedan ceo broj veci od prethodnog:");
}
while ((k % 1!= 0) || (n>=k))
	k=Number(k);
	var zbir = 0;
    
    for (var i=n; i<=k; i++) {
        zbir = zbir + i;
	}
$('div#rezText4').append(zbir);
});