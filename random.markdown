---
layout: page
title:  "7 nasumičnih brojeva"
permalink: /random/
exclude: true
---

<style>

#numbers li {
    display:inline;
    list-style: none;
    margin: 2em;
    font-size: 20px;
    font-weight: bolder;
}

#submit{
    color: white;
    background-color: rgb(42, 189, 47);
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
}

</style>

<div>
    <ul id="numbers"></ul>
</div>

<input id="submit" type="button" value="Izvuci nove brojeve" onclick="load()">

<script>

load();

function load(){

    var array = [];
    
    for(var i = 1; i <= 35; i++){
        array.push(i);
    }
    
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    
    shuffle(array);
    
    var numbers = [];
    
    for(var i = 0; i < 7; i++){
        numbers.push(array[i]);
    }
    
    for(var i = 0; i < 6; i++){
        for(var j = i+1; j < 7; j++){
            if(numbers[i] > numbers[j]){
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    
    var field = document.getElementById('numbers');
    field.innerHTML = "";
    
    for(var i = 0; i < 7; i++){
        var number = document.createElement('li');
        number.innerHTML = numbers[i];
        field.appendChild(number);
    }
}


</script>