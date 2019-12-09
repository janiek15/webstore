//test code
const btns = document.getElementsByClassName('myBtn');
const test = document.getElementById('test');

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', clickBtnTest );
}

// i=0 -> btns[0].addEventListener  -> i++ // i=1
// i=1 -> btns[1].addEventListener  -> i++ // i=2 
// i=2 -> btns[2].addEventListener  -> i++ // i=3 {}
function clickBtnTest(){
    console.log(this);
}

function btn_onclick1(){
    window.alert('click 1');
}

function btn_onclick2(){
    window.alert('click 2');
}


const addCartBtns = document.getElementsByClassName('button-add-cart');

for(let i =0; i< addCartBtns.length;i++){
    console.log(addCartBtns[i]);
    addCartBtns[i].addEventListener('click', addCart);
}
function addCart(){
     var count= document.getElementById('cart-count').innerHTML;
     count++;   // count = count+1;
     document.getElementById('cart-count').innerHTML=count;
    // console.log(count);     
 }

function onChangeSearch(e){
    window.alert(e.value);
     console.log(e.value);
 }
function onSubmitSearchBtn(e){    
    console.log('aaa'); 
}


// i=0 -> btns[0].addEventListener  -> i++ // i=1
// i=1 -> btns[1].addEventListener  -> i++ // i=2 
// i=2 -> btns[2].addEventListener  -> i++ // i=3 {}

function clickBtnTest(){
    console.log(this);
}

function btn_onclick1(){
    window.alert('click 1');
}

function btn_onclick2(){
    window.alert('click 2');
}
const addFavoriteBtns = document.getElementsByClassName('button-add-favorite');

for(let i =0; i< addFavoriteBtns.length;i++){
    console.log(addFavoriteBtns[i]);
    addFavoriteBtns[i].addEventListener('click', addFavorite);
}
function addFavorite(){
     var count= document.getElementById('favorite-count').innerHTML;
     count++;   // count = count+1;
     document.getElementById('favorite-count').innerHTML=count;
    // console.log(count);     
 }

function onChangeSearch(e){
    window.alert(e.value);
     console.log(e.value);
 }
function onSubmitSearchBtn(e){    
    console.log('aaa');
}



