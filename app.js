// Task -1 :find banana index ,then replace banana with Mango,then remove Orange and push Watermelon


var fruits = ['Apple','Banana','Orange'];
var element = fruits.indexOf('Banana');
// element = ;
document.getElementById("demo").innerHTML = element;
 fruits[element] = 'Mango';
fruits.pop();
fruits.push("WaterMelon");
document.getElementById("demo1").innerHTML = (fruits);





