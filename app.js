function totalcalculator(ahmad, ali, yazan) {
    var sum = parseInt(ahmad) + parseInt(ali) + parseInt(yazan);
    var pay = sum + 3;
    alert("total is" + pay);
}

var counter = 0;
var ahmad = 0;
var ali = 0;
var yazan = 0;

while (counter < 3) {
    if (counter == 0) {
        ahmad = prompt("how much ahmad pay ?");
    } else if (counter == 1) {
        ali = prompt("how much ali pay ?")
    } else {
        yazan = prompt("how much yazan pay ?")
    }

    counter += 1;
}
totalcalculator(ahmad, ali, yazan)

var numberofimg = prompt( "enter number of img you would show it " );
var storenumberofimg = numberofimg;

for (var i =0 ; i<storenumberofimg ; i++)
    {

        document.write('<img src="https://i.ytimg.com/vi/S9qGpS6IHuQ/maxresdefault.jpg">');
    }




