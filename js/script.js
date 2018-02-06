// scripts.js

var a = 3,
	b = 4,
	value;

a = prompt('Podaj dowolną liczbę dla "a"');
b = prompt('Podaj dowolną liczbę dla "b"');

value = (a * a) - (2 * a * b) - (b * b);

alert('Wynik obliczenia (a * a) - (2 * a * b) - (b * b) wynosi: ' + value);
console.log('(a * a) - (2 * a * b) - (b * b) dla a: ' + a + ' dla b: ' + b + ' wynik to: ' + value);

if (value > 0) {
	alert('Wynik dodatni');
	console.log('Wynik dodatni');
} else if (value < 0) {
	alert('Wynik ujemny');
	console.log('Wynik ujemny');
} else {
	alert('Wynik jest równy zero');
	console.log('Wynik jest równy zero');
}