// Pirma užduotis
var names = ['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen', 'Theon Greyjoy', 'Tyrion Lannister', 'Arya Stark']
console.log(names[0])
console.log(names[names.length - 1])
var personazas = prompt('Įveskite skaičių nuo 1 iki 6')
console.log(names[personazas - 1])

// Antra užduotis
var skaiciuMasyvas = [18, 2, 6, -1, 22, 24];
var suma = 0;
var didziausias = Number.MIN_VALUE;
var maziausias = Number.MAX_VALUE;

for (var i = 0; i < skaiciuMasyvas.length; i++) {
  suma += skaiciuMasyvas[i];
  if (skaiciuMasyvas[i] > didziausias) {
    didziausias = skaiciuMasyvas[i];
  }
  if (skaiciuMasyvas[i] < maziausias) {
    maziausias = skaiciuMasyvas[i];
  }
}

var vidurkis = (suma / skaiciuMasyvas.length).toFixed(2);

document.write("Skaičių suma: " + suma + '<br/>');
document.write("Skaičių vidurkis: " + vidurkis + '<br/>');
document.write("Didžiausias skaičius: " + didziausias + '<br/>');
document.write("Mažiausias skaičius: " + maziausias + '<br/>');