// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);

var lists = document.getElementsByClassName('list-group-item');
console.log(lists);

lists[2].style.background="green";
for(let i=0;lists.length;i++){
    lists[i].style.fontWeight="bold";
}