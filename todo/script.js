var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click",addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click",removeItem);

var removeButtonAll = document.getElementById("removeAll");
removeButtonAll.addEventListener("click",removeAllItem);





function addItem() {
    var input = document.getElementById("input");
    var item = input.value;
    var textNode = document.createTextNode(item);

    if(item === ""){
        document.getElementById("demo").innerHTML = `*Enter Todo`;

        setTimeout(() => {
            document.getElementById("demo").innerHTML = '';
        }, 2000);
        
    } 
    else {

        //create li
        li = document.createElement("li");

        //create input which is having a type checkbox and a id check
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox"; //to add a type in a tag
        checkbox.setAttribute('id','check'); //to add a attribute of id or class

        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item'); //optional


        //ADD THIS Element to webpage
            
            li.appendChild(checkbox);
            li.appendChild(label);
            label.appendChild(textNode);
            
            //inserting li element and where at the first postion
            ul.insertBefore(li, ul.childNodes[0]);
            

            setTimeout(() => {
                //giving li a classname for visusal
                li.className = 'visual';
            }, 4);

            input.value = ''


    }

}

function removeItem() {
    li= ul.children;
    for ( let index = 0; index < li.length; index++) {
        
        while(li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function removeAllItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        ul.remove(li[index])
        
    }
}