# Zavrsni-projekat

## Opis

Aplikacija prikazuje recepte sa različitih sajtova i naziv joj je Food for ReBoot. Nalazi se na linku: https://andjelkalukovic.github.io .
* Prva strana koju korisnik vidi poseduje slider sa fotografijama u skladu sa aplikacijom. Na istoj stranici se nalazi i Login forma.
  * Ukoliko korisnik nije registrovan, može otići na link za kreiranje naloga. Klikom na link se odlazi na stranicu za registraciju, a takođe i tu postoji link koji vraća na Login formu.
  * Svi fajlovi vezani za ove dve rute koje svako može videti nalaze se u folderu "public" koji je u okviru foldera "layout". 
  * Dokumentacija za Login i registraciju se nalazi u folderu "services"
* Registrovani i ulogovani korisnici mogu pristupiti glavnoj stranici gde su izlistani popularni recepti. 
  * Podaci koji su vidljivi samo ulogovanim korisnicima smešteni su u fajlovima koji se nalaze u folderu "private" takođe u okviru "layout" foldera. Unutar njega se nalazi i folder "Recepti" koji je vezan samo za funkcije koje se odnose na recepte.
* Na vrhu stranice postoji input polje koje omogućava pretragu recepata po nazivu ili glavnom sastojku.
* Ispod input polja, postoje dva select polje koje omogućava filtriranje prikazanih recepata prema dijetetskim i zdravstvenim oznakama.   * Ponuđene opcije se razlikuju u zavisnosti od izlistanih recepata u tom momentu. 
  * Međusobno su povezani tako da predstavljaju duplo filtriranje.
* Klikom na sliku recepta, otvara se originalni izvor recepta.
* Svaki recept ima dugme "Show ingredients". Klikom na dugme prikazuje se lista potrebnih sastojaka, a tekst dugmeta se menja u "Hide ingredients". Drugim klikom na dugme, sastojci ponovo postaju sakriveni, a tekst dugmeta se vraća na prvobitno stanje.
* Kada se scroll traka pokrene ka dnu stranice, pojavljuje se dugme u vidu strelice koje omogućava vraćanje na početak stranice.
* Pri samom vrhu sa leve strane postoji i sličica koja ujedno predstavlja i logo stranice. Klikom na nju se prikazuju podaci o ulogovanom korisniku. Drugim klikom se podaci skrivaju.
* Ispod nje je dugme "Sign out" za odjavu pomoću kojeg se korisnik odjavljuje sa stranice i vraća na početnu stranu na kojoj je i Login.
  * Nakon odjave korisnik ne može pristupiti podacima koji su privatni.
