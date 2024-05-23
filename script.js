var circle = document.querySelectorAll('.circle');
var nbtn = document.querySelector('.n-btn');
var pbtn = document.querySelector('.p-btn');
var current_c = 0;
 var add = ()=>{
   circle[current_c].classList.add('active')
   current_c++;
   update();
   
   console.log('next')
   console.log(current_c)
 }
var sub = ()=>{
  current_c--;
  update();
  circle[current_c].classList.remove('active')
  console.log('prev')
  console.log(current_c)
 }

function update(){
  if(current_c > circle.length){
    current_c = circle.length
  }
  else if(current_c <= 0){
    current_c = 0
  }
  // else{
  //   if(current_c == 1){
  //   console.log('1 is lastprev')
      
  //   }
 // }

}
function update2(){
  if(current_c < circle.length){
    current_c = circle.length
  }

}