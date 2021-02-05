modal = document.querySelector(".modal")

function openThis(){
    if(modal.style.display == 'block'){
        closeThis();
    }else {
        modal.style.display = 'block'
    }
}

function closeThis(){
    modal.style.display = 'none'
}

// modifier la couleur du texte on check 
 Checkbox = document.querySelector('input[value="other"]');
 changeText = document.querySelector('span[id="otherValue"]');
 Check = document.querySelector('input[value="yo"]');
 changeTxt = document.querySelector('span[id="yoValue"]');
 Cbox = document.querySelector('input[value="zer"]');
 cText = document.querySelector('span[id="zerValue"]');

Checkbox.onchange = function() {
  if(Checkbox.checked) {
    changeText.style.color = 'green';
    changeText.value = '';
  } else {
    changeText.style.color = 'black';
  }
}
Check.onchange = function(){
    if(Check.checked) {
        changeTxt.style.color = 'green';
        changeTxt.value = '';
      } else {
        changeTxt.style.color = 'black';
      }
}

Cbox.onchange = function(){
    if(Cbox.checked) {
        cText.style.color = 'green';
        cText.value = '';
      } else {
        cText.style.color = 'black';
      }
}