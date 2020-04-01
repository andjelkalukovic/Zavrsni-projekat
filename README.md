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

Aplikacija prikazuje recepte sa različitih sajtova širom sveta.
* Prva strana koju korisnik vidi poseduje slider sa fotografijama u skladu sa aplikacijom. Na istoj stranici se nalazi i Login forma. Ukoliko korisnik nije ulogovan, može otići na link za kreiranje naloga. Klikom na link se odlazi na stranicu za registraciju. Registrovani i ulogovani korisnici mogu pristupiti glavnoj stranici gde su izlistani popularni recepti.
* Na vrhu stranice postoji input polje koje omogućava pretragu recepata po nazivu ili glavnom sastojku.
* Pored input polja, na vrhu se nalazi i select polje koje omogućava filtriranje prikazanih recepata prema hranljivim vrednostima. Ponuđene opcije se razlikuju u zavisnosti od izlistanih recepata u tom momentu.
* Klikom na sliku recepta, otvara se originalni izvor recepta.
* Svaki recept ima dugme "Show ingredients". Klikom na dugme prikazuje se lista potrebnih sastojaka, a tekst dugmeta se menja u "Hide ingredients". Drugim klikom na dugme, sastojci ponovo postaju sakriveni, a tekst dugmeta se vraća na prvobitno stanje.
* Kada se scroll traka pokrene ka dnu stranice, pojavljuje se dugme u vidu strelice koje vraća na početak stranice.
* Na stranici postoji dugme "Sign out" pomoću kojeg se korisnik odjavljuje sa stranice i vraća na početnu stranu na kojoj je i Login.
