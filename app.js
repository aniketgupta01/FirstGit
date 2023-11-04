let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 4px black';
let addItem = document.getElementById('add-items');
addItem.style.fontWeight = '900';
addItem.style.color='green';
// let items = document.getElementsByClassName('list-group-item');
// // for(let i=0;i<items.length;i++){
// //     items[i].style.fontWeight = '900'
// //     items[i].style.backgroundColor = 'yellow'
// // }
// items[2].style.backgroundColor='green'


let li = document.getElementsByTagName('li');
// li[4].style.backgroundColor='yellow'


//QuerySelector
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.display='none';

let items = document.querySelectorAll('.list-group-item');
items[1].style.color='green';

for(let i=0;i<items.length;i=i+2){
    items[i].style.backgroundColor='green'
}



