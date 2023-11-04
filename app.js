let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 4px black';
let addItem = document.getElementById('add-items');
addItem.style.fontWeight = '900';
addItem.style.color='green';
let items = document.getElementsByClassName('list-group-item');
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = '900'
}
items[2].style.backgroundColor='green'

