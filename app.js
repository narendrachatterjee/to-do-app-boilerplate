var activities = [];
var text = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick=clickEvent;

function clickEvent(){
    activities.push(text.value);
    text.innerHTML="";
    displayList();
}

function displayList(){
    todolist.innerHTML = " ";
    activities.forEach(function(n,i){
        todolist.innerHTML +=
        "<li>" +
        n +
        "<a onclick='editItem(" +
        i +
        ")'>Edit</a>" +
        "<a onclick='deleteItem(" +
        i +
        ")'>&times | </a></li>";
    });
}

function editItem(i){
    var newVal = prompt("Enter new value");
    activities.splice(i,1,newVal);
    displayList();
}

function deleteItem(i){
    activities.splice(i,1);
    displayList()
}