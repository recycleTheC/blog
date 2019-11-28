---
layout: post
title:  "Računalne mreže - Postavljanje statičke IP adrese pomoću naredbenog retka"
date:   2019-11-28 10:00:00 +0100
categories: racunalne-mreze static-ip
permalink: /racunalne-mreze/postavljanje-staticke-ip-adrese/
---

# Alat netsh

`netsh` je alat komandne linije koji omogućava pregled i konfiguriranje mrežnih postavki na **Microsoft Windows** operativnom sustavu.

# Postavljanje statičke IP adrese

Pokrenuti alat **Naredbeni redak** kao administrator. Ako se otvori prozor **Kontrole korisničkog računa** i zatraži dopuštenje za izvršenje promjena na uređaju, dospustiti klikom na gumb **Da**.

U **Naredbeni redak** upisati naredbu `netsh` i potvrditi tipkom **Enter**. Otvara za konzola alata `netsh`:

![netsh konzola](/assets/rm/static-ip/image001.png)

Kako bi postavili željenu IP adresu računala, mora biti poznato ime mrežne kartice koja računalu omogućava povezivanje na Internet.

U konzolu alata `netsh` upisati: `interface ipv4 show interfaces`

![netsh konzola](/assets/rm/static-ip/image002.png)

Alat je prikazao 2 mrežne kartice: *Loopback Pseudo-Interface 1 (virtualna mrežna kartica)* i *Ethernet*. 
Statičku IP adresa je potrebno postaviti na mrežnu karticu **Ethernet**.

Dodatne informacije o mrežnim karticama moguće je saznati naredbom `interface ipv4 show config` u konzoli alata `netsh`:

![netsh konzola](/assets/rm/static-ip/image003.png)

Ako je mrežna kartica prethodno automatski konfigurirana pomoću mrežne usluge **DHCP**, u prikazu će biti ispisane IP adrese *zadanog pristupnika* (**default gateway**), IP adrese korištenih **DNS servera** i **subnet maska** mreže, što može biti korisno u konfiguriranju statičke IP adrese ili dijagnostici.

**Za postavljanje statičke IP adrese koristiti slijedeće podatke:**

- IP adresa: 192.168.100.15
- Mrežna maska: 255.255.255.0
- Default Gateway: 192.168.100.1
- Primarni DNS server: 192.168.100.1
- Sekundarni DNS server: 8.8.8.8

U konzolu alata `netsh` upisati slijedeću naredbu i potvrditi ju tipkom **Enter**: 

`interface ip set address name="Ethernet" source=static addr=192.168.100.15 mask=255.255.255.0 gateway=192.168.100.1`

Naredba postavlja statičku IP adresu **192.168.100.15** na mrežnu karticu **Ethernet**, zadaje mrežnu masku **255.255.255.0**, za IP adresu zadanog pristupnika postavlja **192.168.100.1**.

Nakon potvrde naredbe, u konzolu alata `netsh` upisati naredbu `interface ipv4 show config name="Ethernet"` kako bi provjerili postavke mrežne kartice **Ethernet**. (argument `name="Ethernet` djeluje kao filter)

![netsh konzola](/assets/rm/static-ip/image004.png)

S obzirom da prilikom konfiguracije nije postavljen niti jedan **DNS server**, pristup Internetu će biti ograničen.

U konzolu alata `netsh` upisati slijedeću naredbu i potvrditi ju tipkom **Enter**: 

`interface ipv4 add dns "Ethernet" 192.168.100.1` - dodavanje primarnog DNS servera

`interface ipv4 add dns "Ethernet" 8.8.8.8 index=2` - dodavanje sekundarnog DNS servera

Nakon potvrde naredbe, u konzolu alata `netsh` ponovno upisati naredbu `interface ipv4 show config name="Ethernet"` kako bi provjerili postavke mrežne kartice **Ethernet**.

![netsh konzola](/assets/rm/static-ip/image005.png)

Statička IP adresa je uspješno postavljena i omogućen je potpuni pristup Internetu!

# Izvori

<ol>
    <li><a href="https://docs.microsoft.com/en-us/windows-server/networking/technologies/netsh/netsh"><cite>Network Shell (Netsh)</cite>, Microsoft</a>, pregledano 28.11.2019.</li>
    <li><a href="https://ss64.com/nt/netsh.html"><cite>NETSH (Network Shell)</cite>, SS64</a>, pregledano 28.11.2019.</li>
<ol>