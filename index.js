// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);

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