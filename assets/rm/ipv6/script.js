/**********************************************************************
 * IPv6 Address Compression Tool                                      *
 **********************************************************************/
/**
 * Copyright (c) 2020. Mario Kopjar
 */

/**
 * Ispituje valjanost unesene IPv6 adrese i vraća rezultat ispitivanja.
 * @return {bool} valjana/ne valjana IPv6 adresa
 */

function validateAddress(){

    let charAddress = document.getElementById("address").value.split(":").map(x => x); // Uzima vrijednost iz elementa za unos adrese, vrijednosti između ':' sprema u polje kao znakovnu vrijednost
    let address = document.getElementById("address").value.split(":").map(x => parseInt(x, 16)); // Uzima vrijednost iz elementa za unos adrese, vrijednosti između ':' sprema u polje kao cjelobrojnu vrijednost

    for(let i=0; i < charAddress.length; i++){
        for(let j=0; j < charAddress[i].length; j++){

            let tmp=charAddress[i][j].toLowerCase(); // Varijabla j-tog znaka iz i-tog bloka u adresi

            if(!((tmp>='a' && tmp<='f') || (tmp>='0' && tmp<='9'))){ // Ispitivanje: je li znak u rasponu 'a' - 'f' ili '0' - '9'
                return false;
            }
        }
    }

    for(let i = 0; i < address.length; i++){
        if(!(address[i]>=0 && address[i]<=2**16)){ // Ispitivanje: je li znak u rasponu 0 - 2^16
            return false;
        }
    }

    return true; // Ako su sve prethodne provjere uspješno izvedene, vraća 'true'
}

/**
 * Za valjanu IPv6 adresu vrši skračivanje i ispisuje rezultat u HTML kodu
 */

function compressIPv6(){

    let frame = document.getElementById("details"); // element za ispis rezultata funkcije

    if(validateAddress()){ // Provjerava je li upisna ispravna IPv6 adresa

        // Uzima vrijednost iz elementa za unos adrese, vrijednosti između ':' sprema u polje kao cjelobrojnu vrijednost
        let address = document.getElementById("address").value.split(":").map(x => parseInt(x, 16));

        let skipped = false; // Varijabla za provjeru preskočenog bloka nula
        let compressed = ""; // Inicijalizacija stringa skraćene IPv6 adrese

        for(let i = 0; i < address.length; i++){
            if(address[i]==0 && skipped==false){ // Ako je vrijednost elementa polja jednaka 0 i nule već nisu preskočene
                let start = i; // Sprema lokaciju prvog bloka nuli u adresi
                skipped=true; 
                for(i; i < address.length-1 && address[i+1]==0; i++); // for petlja koja prolazi kroz adresu i zaustavlja se kada element adrese bude različit od 0
                compressed += (start > 0) ? ":" : "::"; // U string umeće ':' ili '::', ovisno o lokaciji prvog bloka nuli u adresi
            }
            else
            {
                // U string umeće vrijednost elementa adrese i ':', ovisno o lokaciji elementa
                compressed += address[i].toString(16) + (i < 7 ? ":" : "");
            }
        }

        // Ispis vrijednosti skrećene IPv6 adrese u elementu 'details' unutar HTML koda sa dodavanjem CSS oblikovanja
        frame.innerHTML = "Skraćena IPv6 adresa: <strong>" + compressed + "</strong>";
        frame.style.marginTop = "12px";
        frame.style.padding = "10px";
        frame.style.color = "#3c763d";
        frame.style.backgroundColor = "#dff0d8";
        frame.border = "1px solid";
        frame.style.borderColor = "#d6e9c6";
    }
    else
    {
        // Ako adresa nije ispravna
        frame.innerHTML = ""; // Uklanjanje sadržaja unutar elementa 'details'
        frame.style = ""; // Uklanjanje CSS-a
        alert("Nije upisana ispravna IPv6 adresa!"); // Prikazivanje poruke o pogrešci unutar preglednika
    }
}

/**
 * Postavlja vrijednosti elemenata na početne vrijednosti.
 */

function reset(){
    document.getElementById("details").innerHTML = ""; // Uklanjanje sadržaja unutar elementa
    document.getElementById("details").style = ""; // Uklanjanje CSS-a
    document.getElementById("address").value = ""; // Brisanje sadržaja polja za unos IPv6 adrese
}