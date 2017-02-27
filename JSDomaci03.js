var niz = [5, 145, 69, 56, 13, 456, 78, 4, 30];
porez(niz);

function porez(cene) {
	var cenaPorez = [];

	for(var i=0; i<cene.length; i++) {
		if (cene[i]<50) {
			cenaPorez.push((cene[i]*1.18).toFixed(2));
		} else {
			cenaPorez.push((cene[i]*1.08).toFixed(2));
		}
	}
	return console.log(cenaPorez);
}



var string = "ananaf";
palindrom(string);

function palindrom(rec) {
	
	rec.toLowerCase();
	var brojSlova = rec.length;
	var novaRec = [];

	if (brojSlova%2==0) {
		for(var i=0; i<rec.length/2; i++) {
			if (rec[i]===rec[(brojSlova-1)-i]) {
				novaRec.push(rec[i]);
				if (novaRec.length==rec.length/2) {
					return console.log('Rec ' + rec + ' je palindrom.');
				}
			} else {
				return console.log('Rec ' + rec + ' nije palindrom.');
			}
		}
	} else {
		for(var i=0; i<(rec.length-1)/2; i++) {
			if (rec[i]===rec[(brojSlova-1)-i]) {
				novaRec.push(rec[i]);
				if (novaRec.length==(rec.length-1)/2) {
					return console.log('Rec ' + rec + ' je palindrom.');
				}
			} else {
				return console.log('Rec ' + rec + ' nije palindrom.');
			}
		}
	}
}
