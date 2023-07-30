// Task -2 :find your friends grade :

function checkGrade(){
    // Task -2 :find your friends grade :

var score = document.getElementById("scoreInput").value;

if (score >= 80) {
    document.getElementById("demo3").innerHTML = "Above A grade "
}
else if (score>=60)
{
    document.getElementById("demo3").innerHTML = "Above B grade "
}
else if (score>=50)
{
    document.getElementById("demo3").innerHTML = "Above C grade "
}
else if (score>=40)
{
    document.getElementById("demo3").innerHTML = "Above D grade "
}
else if (score<=39)
{
    document.getElementById("demo3").innerHTML = "F grade "
}


}
