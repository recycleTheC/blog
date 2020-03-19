---
layout: post
title:  "Dizajn baza podataka - Instalacija Microsoft SQL Servera"
date:   2020-03-19 07:00:00 +0100
categories: dbp sql-server
permalink: /dbp/install-sql-server/
toc: true
---

<hr>

<h2>Priprema za instalaciju</h2>

<h3>Preuzimanje instalacijske datoteke za Micrososft SQL Server</h3>

Sa web stranice <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads"><cite>SQL Server Downloads</cite>, Microsoft</a>, preuzeti
datoteku za instalaciju <strong>SQL Server 2019 Developer</strong> inačice.

![SQL Server](/assets/dbp/1.jpg)

<h3>Preuzimanje instalacijske datoteke za Micrososft SQL Server Management Studio</h3>

Sa web stranice <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads"><cite>Download SQL Server Management Studio</cite>, Microsoft</a>, preuzeti
datoteku za instalaciju <strong>SSMS</strong>.

![SQL Server Management Studio](/assets/dbp/9.jpg)

<h2>Instalacija</h2>

<h3>Instalacija Micrososft SQL Servera</h3>

Pokrenuti izvršnu datoteku za instalaciju SQL Servera (<cite>SQL2019-SSEI-DEV.exe</cite>).

![Instalacija SQL Servera](/assets/dbp/2.jpg)

Odabrati <strong><cite>Basic</cite></strong> način instalacije.

Pročitati i prihvatiti uvjete korištenja:

![Instalacija SQL Servera](/assets/dbp/3.jpg)

Odabrati lokaciju za instalaciju (preporučljivo ostaviti zadanu vrijedost):

![Instalacija SQL Servera](/assets/dbp/4.jpg)

Kliknuti na gumb <strong>Install</strong> i pričekati da postupak završi.

![Instalacija SQL Servera](/assets/dbp/6.jpg)

Nakon što instalacija uspješno završi, prikazuje se prozor:

![Instalacija SQL Servera](/assets/dbp/7.jpg)

Kliknuti na <strong>Connect Now</strong> za testiranje ispravnosti instalacije.

Ako je instalacija ispravno i uspješno napravljena, trebao bi se prikazati prozor:

![SQL Server](/assets/dbp/8.jpg)

<h3 class="install">Instalacija Micrososft SQL Server Management Studio</h3>

Pokrenuti izvršnu datoteku za instalaciju SQL Server Management Studio (<cite>SSMS-Setup-ENU.exe</cite>).

![SQL Server Management Studio](/assets/dbp/10.jpg)

Odabrati lokaciju za instalaciju (preporučljivo ostaviti zadanu vrijedost), kliknuti na gumb <strong>Install</strong> i pričekati da postupak završi.

![SQL Server Management Studio](/assets/dbp/11.jpg)

Ako je instalacija ispravno i uspješno napravljena, trebao bi se prikazati prozor:

![SQL Server Management Studio](/assets/dbp/12.jpg)

<h2>Pokretanje Micrososft SQL Server Management Studio</h2>

Pomoću Start Menija pokrenuti Microsoft SQL Server Management Studio.

![SQL Server Management Studio](/assets/dbp/13.jpg)

(<cite>Ukoliko se pojavi pogreška da se apliakcija ne može pokrenuti jer je instalacija u tijeku, ponovno pokrenuti računalo</cite>.)

Nakon učitavanja aplikacije, prikazuje se prozor:

![SQL Server Management Studio](/assets/dbp/14.jpg)

<strong>SQL Server je uspješno instaliran i konfiguriran!</strong>

<h2>Poznati problemi</h2>

<h3>SQL Server Management Studio ne prikazuje naziv servera na koji se povezuje</h3>

![SQL Server Management Studio](/assets/dbp/16.jpg)

Ukoliko je instalacija SQL Servera napravljena naknadno, poterbno je ručno dodati server koji će se koristiti za povezivanje.

Kliknuti na padajući izbornik <cite>Server Name</cite> i zatim kliknuti na <cite>Browse for more</cite>.

![SQL Server Management Studio](/assets/dbp/17.jpg)

U prozoru <cite>Browse for Servers</cite> kliknuti na <cite>Database Engine</cite> i odabrati naziv trenutno korištenog računala (SQL Server):

![SQL Server Management Studio](/assets/dbp/18.jpg)

Odabir potvrditi klikom na <cite>OK</cite>.

Ukoliko se ne prikazuje, postoji više mogućih problema:

- SQL Server nije instaliran na računalu (<a href="#install">rješenje</a>)
- SQL Server nije ispravno konfigururan
- ostali razlozi

# Dodatne napomene

Korišten software za izradu uputa:

<p>Operacijski sustav: <a href="https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/"><cite>Microsoft Windows 10 Enterprise, Development verzija</cite></a></p>
<p>Virtualizacija:  <a href="https://www.virtualbox.org/"><cite>Oracle VirtualBox, verzija 6.1</cite></a></p>