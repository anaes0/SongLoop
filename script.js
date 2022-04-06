const btn = document.querySelector("button");

btn.addEventListener("click", function songConsole() 
 {
    var i=1;
	songConsole(i);
	function songConsole(i){
    //if condition used to avoid error: 'Uncaught RangeError: Maximum Call Stack Size Exceeded'
	if (i <= 1)
	{
        console.log(songConsole());
        i=i+1;
        songConsole(i);
	}
}
 });
 
function songConsole() 
{  
  var bottles;
  var bottlesLeft;
  //document.write("Loop starts" + "<br />");
  document.write ("<b>Lyrics of the song 99 Bottles of Beer:</b>");
  document.write("<br />");
  document.write("<br />");
  for (i = 99; i >= 1; i--) {
    if (i == 1) {
      bottles = "bottle";
      bottlesLeft = "No bottles of beer on the wall.";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 1 + " bottles of beer on the wall.";
    } console.log(i+ " " + bottles + " of beer on the wall,");
    console.log(i+ " " + bottles + " of beer.");
    console.log("Take one down, pass it around, ");
    console.log(bottlesLeft);
	
	
	document.write(i+ " " + bottles + " of beer on the wall, ");
	document.write(i+ " " + bottles + " of beer. ");
	document.write("Take one down, pass it around, ");
	document.write(bottlesLeft);
    document.write("<br />");
	document.write("<br />");
    } 
	document.write("<b>The end!</b>"); 
   //document.write("Loop stopps "); 
}

