---
layout: post
title:  "Računalne mreže - Skraćivanje zapisa IPv6 adrese"
date:   2020-01-25 10:00:00 +0100
categories: racunalne-mreze static-ip
permalink: /racunalne-mreze/skracivanje-zapisa-ipv6-adrese/
---

<script src="/assets/rm/ipv6/script.js"></script>
<style>
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

#copy{
    color: white;
    background-color: #0066FF;
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    visibility : hidden;
}

#address{
    height: 24px;
    border: 1px solid lightgray;
    border-radius: 3px;
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
    <input id="copy" type="button" value="Kopiraj" onclick="copy()">
</div>

<div id="details">

</div>

<div style="margin-top: 15px;">
<details>
    <summary>Opis rješenja zadatka (JavaScript)</summary>
    <p>
    <script src="https://gist.github.com/recycleTheC/153cc464b535708398ad7e299d0128e9.js"></script>
    </p>
</details>
</div>