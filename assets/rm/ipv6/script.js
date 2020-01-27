function validateAddress(){

    let charAddress = document.getElementById("address").value.split(":").map(x => x);
    let address = document.getElementById("address").value.split(":").map(x => parseInt(x, 16));

    for(let i=0; i < charAddress.length; i++){
        for(let j=0; j < charAddress[i].length; j++){

            let tmp=charAddress[i][j].toLowerCase();

            if(!((tmp>='a' && tmp<='f') || (tmp>='0' && tmp<='9'))){
                return false;
            }
        }
    }

    for(let i = 0; i < address.length; i++){
        if(!(address[i]>=0 && address[i]<=65535)){
            return false;
        }
    }

    return true;
}

function compressIPv6(){

    if(validateAddress()){

        let address = document.getElementById("address").value.split(":").map(x => parseInt(x, 16));

        let skipped = false;
        let compressed = "";

        for(let i = 0; i<address.length; i++){
            if(address[i]!=0 || i===0){
                compressed += address[i].toString(16) + (i < 7 ? ":" : "");
            }
            else if(skipped == false){
                skipped = true;
                for(i; i < address.length && address[i+1] === 0; i++);
                compressed += ":";
            }
            else compressed += i < 7 ? "0:" : "0";
        }

        document.getElementById("details").innerHTML = "Skraćena IPv6 adresa: <strong>" + compressed + "</strong>";
        document.getElementById("details").className = "active-details";
    }
    else{
        document.getElementById("details").innerHTML = "";
        document.getElementById("details").className = "";
        alert("Nije upisana ispravna IPv6 adresa!")
    }
}

function reset(){
    document.getElementById("details").innerHTML = "";
    document.getElementById("details").className = "";
    document.getElementById("address").value = "";
}