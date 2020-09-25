alert("Hallo.");
var naam = prompt("Wat is jouw naam?");
alert("Hallo " + naam + "." );
var woonPlek = prompt("Waar kom je vandaan?");
alert("Zo te zien ben je dan verdwaalt, " + naam + ".");
alert("Geen zorgen, als je goed leest en de juiste keuzes maakt ben je zo weer thuis.");

alert("Het lijkt erop dat je in een bos zit.");
alert("Het is donker maar niet nacht.")
alert("Je bent alleen.");
alert("Of niet?");

var geluid = prompt('Terwijl dat je om je heen kijkt hoor je opeens geschreuw in de beurt. Wat doe je? [Typ "ga erheen" of "ga ervan weg" om je beslissing te maken. LET OP: dat je altijd een van de twee keuzes typt anders heeft het geen invloed in de game!]');
var geluid = geluid.toLowerCase()

if (geluid == "ga erheen") {
	alert("Je rent naar het geschreuw.");
	alert("Na een paar minuten rennen kom je aan bij een rivier. Het geschreuw is inmiddels gestopt, maar je weet zeker dat het geschreuw van dit rivier vandaan kwam.");
	alert('Je ziet een bord bij het rivier staan wat leest: "' + woonPlek + ' ->". De pijl wijst naar de andere kant van de rivier.');
	alert("Als je naar de rivier kijkt zie je een brug er over heen gaan.");
	
	var brug = prompt('De brug ziet er niet stevig uit, ga je er overheen of blijf je zoeken voor een andere manier om aan de andere kant te komen? [Typ "oversteken" om de rivier over te steken of typ "blijf zoeken" om een andere manier te vinden om aan de overkant van de rivier te komen.]');
	var brug = brug.toLowerCase()
	
	if (brug == "blijf zoeken") {
		alert("Je blijft zoeken naar een andere manier om aan de overkant te komen.");
		alert("Na een tijdje zoeken vind je een bijl die in een boom is geslagen en er naast legt een persoon op de grond.");
		alert("De persoon is een man, je kan de man's gezicht niet goed zien, omdat hij op zijn zij ligt.");
		alert("Ook weet je niet zeker of de man wel eigenlijk slaapt.");

		var man = prompt('Wat doe je? [kies uit: "pak bijl" om de bijl op te pakken, "maak man wakker" om de man wakker te maken of "blijf zoeken" om te blijven zoeken en de man te verlaten.]');
		var man = man.toLowerCase()

		if (man == "pak bijl") {
			alert("Je probeert de bijl uit de boom te halen.");
			alert("De bijl zit goed vast en je moet met alle kracht de eruit halen.");
			alert("De bijl vliegt eruit en je valt om en land op de man.");
			alert("...")
			alert("De man beweegt niet.");
			alert("Je staat weer op en loopt zachtjes weg met de bijl.");
		}
		else if (man == "maak man wakker") {
			alert("Rustig kom je meer dichterbij de man en probeert hem wakker te schudden.");
			alert("Terwijl dat je de man probeert wakker te maken valt hij op zijn rug en kan je zien dat hij bloed heeft op zijn schouder.");
			alert("De man's gezicht is wit een lijkt niet meer te ademen.");
			alert("De man is dood.");
			alert("Als je de man nog eens visueel inspecteert zie je dat zijn arm onder krabwonden zit.");
			alert("Het lijkt erop alsof de man had gevochten met iets...");
			
			var man2 = prompt('Wat doe je? [kies uit: "pak bijl" om de bijl op te pakken of "blijf zoeken" om een andere manier te vinden om aan de overkant van de rivier te komen.]');
			var man2 = man2.toLowerCase()
		}
		else {
			alert("Je blijft zoeken.");
			alert("Na een tijd zoeken kan je niks vinden wat jouw kan helpen om naar de overkant te komen.");
			alert("Het wordt donkerder.");
			alert("Het is te donker om te blijven zoeken.");
			
			var teDonker = prompt('Wat doe je? [kies uit: "pak bijl" om terug te gaan en de bijl te pakken of "oversteken" om terug te gaan en toch de brug te gebruiken om aan de andere kant van de rivier te komen.]');
			var teDonker = teDonker.toLowerCase()

			if (teDonker == "pak bijl") {
				alert("dasasdasdasda")//copy hier wat begint op regel 33
			}
			else {
				alert("Je loopt naar de brug toe.");
				alert("Terwijl " + naam + " probeerde over te steken brak de brug, omdat de brug toch te zwak was. " + naam + " viel in de rivier en kon zichzelf niet reden. Hierbij was het gevaarlijke avontuur van " + naam + " tot een eind gekomen.");
				alert("GAME OVER");
				alert("Vernieuw de pagina als je het nog een keer wilt proberen.");
			}		
		}
	}
	else {
		alert("Je loopt naar de brug toe.");
		alert("Terwijl " + naam + " probeerde over te steken brak de brug, omdat de brug toch te zwak was. " + naam + " viel in de rivier en kon zichzelf niet reden. Hierbij was het gevaarlijke avontuur van " + naam + " tot een eind gekomen.");
		alert("GAME OVER");
		alert("Vernieuw de pagina als je het nog een keer wilt proberen.");
	}
}

