 /*window.addEventListener('click',function(){
    console.log("window clicked");
})

var x = document.getElementById("c");
var color = ["black","green","yellow"];
var i =0;

x.addEventListener("click",function(){
                   this.style.color=color[i];
                   i++;
                   console.log("colour changed");
                   })
*/

function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}
console.log(getRandomColor());
var elems = document.body.getElementsByTagName("*");
function generator()
{
for(var i = 0;i<elems.length;i++)
    {
        elems[i].style.color=getRandomColor();
        elems[i].style.backgroundColor=getRandomColor();
    }
        
}
var audio = new Audio('sond.mp3');
audio.play();
setInterval(generator,100);