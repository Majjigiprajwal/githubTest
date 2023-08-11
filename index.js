console.log(document.domain);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.title);

var lists = document.getElementsByClassName('list-group-item');


for(let i=0;i<lists.length;i++){
    lists[i].style.fontWeight="bold";
}

var newList = document.createElement('li');
var mainList = document.getElementById('items');
mainList.appendChild(newList);
newList.classList="new-list";
newList.style.listStyle="none";
newList.style.width="auto";
newList.style.height="50px";
newList.style.marginTop="5px";
newList.style.border="0.5px solid grey";

var newLists = document.getElementsByTagName('li');
newLists[4].style.background="yellow";

var queryList = document.querySelectorAll('li');
queryList[1].style.background="green";
queryList[2].style.display="none";

var odd = document.querySelectorAll("li:nth-child(odd");

for(let i=0;i<odd.length;i++){
    odd[i].style.background="green";
}

var itemsList = document.querySelector('#items');
// console.log(itemsList.parentNode);

// itemsList.parentNode.style.background="grey";
// console.log(itemsList.parentNode.parentNode);

// var itemsList = document.querySelector('#items');
// console.log(itemsList.parentElement);

// itemsList.parentElement.style.background="grey";
// console.log(itemsList.parentElement.parentElement);

// console.log(itemsList.childNodes)

//    console.log(itemsList.children)
//    itemsList.children[1].style.background="yellow";
//    console.log(itemsList.firstElementChild);
//    itemsList.firstElementChild.textContent="Hello Text is Changed"
//    itemsList.lastElementChild.textContent="Hello Text is Changed"


// console.log(itemsList.nextSibling);
// console.log(itemsList.nextElementSibling);
// console.log(itemsList.previuosSibling);
// console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.color = "red";

var newDiv = document.createElement('div');
newDiv.className="hello";
console.log(newDiv);
newDiv.setAttribute("title","Hellow DIV");

var newDivText = document.createTextNode("Hello");
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

newDiv.style.fontSize="30px";

var newList = document.createElement("li");
newList.textContent="hello";
var parent= document.querySelector('#items');
console.log(parent);
parent.prepend(newList);
