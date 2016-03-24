var card = document.getElementsByClassName('card');
var scrl = 0;
var n = 0;
var prev;
for (i = 0; i < card.length; i++) {
   card[i].style.zIndex = i;
}

function stack()
{

  scrl = window.pageYOffset;
  prev = n;
  // Define n = card to stack

  n= Math.floor(scrl/600);

    // add card to stack
    if (n > prev && n < card.length)
      {
        card[n].style.position = 'fixed';
        card[n].style.top = '0px';
        card[n].style.marginTop = '0';
        card[n+1].style.marginTop = 600*(n+1) +'px';
      }
    // remove card from stack
     if (n < prev)
      {
        card[n+1].style.position ="relative";
        card[n+1].style.top = '0';
        card[n+1].style.marginTop = 600*(n+1) +'px';
        card[n+2].style.marginTop = 0;
      }


}


window.addEventListener('scroll' , stack);
