---
layout: page
title:  "Nasumični brojevi"
permalink: /random/
exclude: true
---

<style>

#numbers li {    
    width: 60px;
    line-height: 60px;
    border-radius: 50%;
    text-align: center;
    font-size: 24px;
    font-weight: bolder;
    border: 3px solid #666;
    display:inline-block;
    list-style: none;
    margin-bottom: 5px;
    margin-right: 5px;
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

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

</style>

<form>
  <div class="form-group">
    <label for="numOfNums">Broj nasumičnih brojeva:</label>
    <input type="number" class="form-control" id="numOfNums" value="7" min="1" max="35" onChange="load();">
    
    <br><br>
    
    <label for="numOfNums">Maksimalan broj:</label>
    <input type="number" class="form-control" id="maxNum" value="35" min="1" max="255" onChange="load(); updateMax(this.value)">
    <br>
    <input id="submit" type="button" value="Izvuci nove brojeve" onclick="load()">
    </div>
</form>

<div style="text-align: center !important;">
    <ul id="numbers"></ul>
</div>

<script>

load();

function load(){

		var n = parseInt(document.getElementById("numOfNums").value);
    var max = parseInt(document.getElementById("maxNum").value);

    var array = [];
    
    for(var i = 1; i <= max; i++){
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
    
    for(var i = 0; i < n; i++){
        numbers.push(array[i]);
    }
    
    for(var i = 0; i < n-1; i++){
        for(var j = i+1; j < n; j++){
            if(numbers[i] > numbers[j]){
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    
    var field = document.getElementById('numbers');
    field.innerHTML = "";
    
    for(var i = 0; i < n; i++){
        var number = document.createElement('li');
        number.innerHTML = numbers[i];
        field.appendChild(number);
    }
}

function updateMax(max){
	document.getElementById("numOfNums").max=max;
}
</script>
