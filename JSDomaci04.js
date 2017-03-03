

var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3];
var noviNiz = [];
var trazenaVrednost = 4;
var vrednostZaZamenu = 25;


function zamena (ulazniNiz, vrednost1, vrednost2) {
	for(i=0; i<ulazniNiz.length; i++) {
	if (ulazniNiz[i] === vrednost1) {
		ulazniNiz[i] = vrednost2;
		noviNiz.push(vrednost2);
	} else {
		noviNiz.push(niz[i]);
	}
}
console.log(noviNiz);
}

zamena(niz, 5, 25);


var nizz = [1, 3, 1, 5];

function isteVrednosti (ulazniNizz) {
	for(var i=0; i<ulazniNizz.length; i++) {
		var privremena = ulazniNizz[i];
		for(var j=i+1; j<ulazniNizz.length; j++) {
			if (ulazniNizz[j] === temp) {
				return console.log(true);
			}
		}
	}
	return console.log(false);
}

isteVrednosti(nizz);


var weight1 = 50;
var weight2 = 180;
var maxWeight = 200;

function nosi (ulaz1, ulaz2, ulaz3) {
	if (ulaz1+ulaz2<=ulaz3) {
	console.log('nosimo oba');
} else if (ulaz1>ulaz3 && ulaz2>ulaz3) {
	console.log('ne nosimo nijedan');
} else if (ulaz1>ulaz3 && ulaz2<=ulaz3) {
	console.log('nosimo drugi');
} else if (ulaz1<=ulaz3 && ulaz2>ulaz3) {
	console.log('nosimo prvi');
} else if (ulaz1<=ulaz3 && ulaz2<=ulaz3 && (ulaz1+ulaz2>ulaz3)) {
	console.log('mozemo da biramo koji cemo poneti ali ne mozemo oba');
}
}

nosi(50, 180, 200);

