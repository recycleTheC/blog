---
layout: post
title:  "Računalne mreže - Skraćivanje zapisa IPv6 adrese"
date:   2020-01-25 10:00:00 +0100
categories: racunalne-mreze static-ip
permalink: /racunalne-mreze/skracivanje-zapisa-ipv6-adrese/
---

<script src="/assets/rm/ipv6/script.js"></script>
<style src="/assets/rm/ipv6/style.css">
#submit{
    color: white;
    background-color: rgb(42, 189, 47);
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
}

#reset{
    color: white;
    background-color: rgb(189, 42, 47);
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
}

#address{
    height: 20px;
    border: 1px solid lightgray;
    border-radius: 3px;
    font-weight: bold;
}

.active-details{

    margin-top: 12px;
    padding: 10px;

    color: #3c763d;
    background-color: #dff0d8;
    border: 1px solid;
    border-color: #d6e9c6;
}

details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}
</style>

<div>
    <h1>Alat za skraćivanje IPv6 adresa</h1>
    IPv6 adresa: <br>
    <input type="text" name="IPv6 Adresa" id="address" size="40"> <br>
    <input id="submit" type="button" value="Skrati IPv6 adresu" onclick="compressIPv6()">
    <input id="reset" type="button" value="Resetiraj" onclick="reset()">
</div>

<div id="details">

</div>

<div style="margin-top: 15px;">
<details>
    <summary>Opis rješenja zadatka (JavaScript)</summary>
    <p>
    U izradi!
    </p>
    <p>
    Kod dostupan na <a href="https://github.com/recycleTheC/blog/blob/master/assets/rm/ipv6/script.js" target="_blank">GitHub.com</a>
    </p>
</details>
</div>