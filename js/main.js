let circleBox = document.getElementById('circleBox');
let boilingForm = document.getElementById('boilingForm');
let boilingInput = document.getElementById('boilingInput');
let btn = document.getElementById('btn');


boilingForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let a = boilingInput.value;
  showCircle(a);
  boilingInput.value = '';
})

function showCircle(num){
  let circle = document.createElement('div');
  circle.innerHTML=num;
  setInterval(function() {
    if(num>1){
      circle.innerHTML = --num;
    }
    else{
      circle.classList='fade'
      circle.remove();
    }
  }, 1000);
  circle.className= 'circle';
  circleBox.appendChild(circle);
}


