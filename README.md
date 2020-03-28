# Zavrsni-projekat

## Opis

Potrebno je realizovati React aplikaciju koja demonstrira vaše znanje. Aplikacija mora da se ponaša responzivno, i da funkcioniše na različitim platformama(telefonu, tabletu, računaru). Zato dizajn aplikacije je potrebno napraviti da bude responzivan. 

## Obavezne funkcionalnosti

Aplikacija poseduje niz obaveznih funkcionalnosti:
* Postoji forma za registrovanje. Podaci koje je potrebno uneti su:
  * Ime
  * Prezime
  * Korisnicko ime (Username)
  * Mejl adresa (Email)
  * Sifra (Confirm Password)
  * Ponovljena Sifa(Confirm Password)
  * Sve sem ponovljene šifre se šalje serveru.
* Postoji forma za login. Podaci koje je potrebno uneti su:
  * Korisnik se loguje pomocu korisnickog imena i sifre.
* Provera ulogovanosti (Korisniku koji nije ulogovan zabraniti pristup odredjenim stranicama/rutama)
* Logovanje i Registracija moraju biti realizovani kroz komunikaciju sa serverom.

## Slobodne funkcionalnosti

Aplikacija prikazuje recepte sortirane po vrsti jela tj. glavnog sastojka. 
* Na vrhu stranice postoji input polje koje omogućava pretragu recepta po nazivu ili glavnom sastojku.
* Klikom na sliku recepta, otvara se originalni izvor recepta.
* Svaki recept ima dugme "Show ingredients". Klikom na dugme prikazuje lista potrebnih sastojaka, a tekst dugmeta se menja u "Hide ingredients". Drugim klikom na dugme sastojci ponovo postaju sakriveni, a tekst dugmeta se vraća na prvobitno stanje.
