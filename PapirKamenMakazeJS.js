var unos = prompt('Unesi:').toLowerCase();

var papir = 'papir';
var kamen = 'kamen';
var makaze = 'makaze';
var random = Math.random();
var match = '';
var output;
var img = $('img').css({
		'width': '30%',
		'margin-left': 'auto',
		'margin-right': 'auto',
		'display': 'block'/*,
		'@media screen and (max-width: 700px)': '#ogranicavajuci {'
  overflow: hidden;
  width: 100%;
  '}'*/
	}).hide();
var font = $('*').css('font-family', '"Raleway"');



if (random <= 0.33) {
	match = 'papir';
} else if (random <= 0.66 && random > 0.33) {
	match = 'kamen';
} else {
	match = 'makaze';
}

if (match === unos) {
	output = $('div').append('<h1>Nereseno! Refresuj, pa ponovo.</h1>').css({
		'background-color': 'red',
		'color': 'blue',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	setInterval(function () {
        output.fadeIn(1000).fadeOut(1000).delay(500).fadeIn(1000);
    }, 1000);
} else if (match === 'papir' && unos === 'kamen') {
	output = $('div').append('<h1>Luzeru crve bedni! Ja na tvom mestu ne bih smeo ponovo.</h1>').css({
		'background-color': 'red',
		'color': 'yellow',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	setInterval(function () {
        output.fadeIn(500).fadeOut(500).delay(100).fadeIn(500);
    }, 1000);
    img.show();
} else if (match === 'papir' && unos === 'makaze') {
	output = $('div').append('<h1>Samo pocetnicka sreca. Ne lozi se previse. Refresuj stranicu ako smes, odracu te ko mace muskatl sad! BTW, brisem sad ovo jer je nebitno.</h1>').css({
		'background-color': 'red',
		'color': 'blue',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	output.delay(7000).fadeOut(1500);
} else if (match === 'kamen' && unos === 'papir') {
	output = $('div').append('<h1>Samo pocetnicka sreca. Ne lozi se previse. Refresuj stranicu ako smes, odracu te ko mace muskatl sad! BTW, brisem sad ovo jer je nebitno.</h1>').css({
		'background-color': 'red',
		'color': 'blue',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	output.delay(7000).fadeOut(1500);
} else if (match === 'kamen' && unos === 'makaze') {
	output = $('div').append('<h1>Luzeru crve bedni! Ja na tvom mestu ne bih smeo ponovo.</h1>').css({
		'background-color': 'red',
		'color': 'yellow',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	setInterval(function () {
        output.fadeIn(500).fadeOut(500).delay(100).fadeIn(500);
    }, 1000);
    img.show();
} else if (match === 'makaze' && unos === 'papir') {
	output = $('div').append('<h1>Luzeru crve bedni! Ja na tvom mestu ne bih smeo ponovo.</h1>').css({
		'background-color': 'red',
		'color': 'yellow',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	setInterval(function () {
        output.fadeIn(500).fadeOut(500).delay(100).fadeIn(500);
    }, 1000);
    img.show();
} else if (match === 'makaze' && unos === 'kamen') {
	output = $('div').append('<h1>Samo pocetnicka sreca. Ne lozi se previse. Refresuj stranicu ako smes, odracu te ko mace muskatl sad! BTW, brisem sad ovo jer je nebitno.</h1>').css({
		'background-color': 'red',
		'color': 'blue',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	output.delay(7000).fadeOut(1500);
} else {
	output = $('div').append('<h1>Unesi pravilnu rec, ne kliberi se!</h1>').css({
		'background-color': 'red',
		'color': 'blue',
		'text-align': 'center',
		'width': '50%',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	setInterval(function () {
        output.fadeIn(1000).fadeOut(1500).delay(500).fadeIn(1500);
    }, 1000);
}