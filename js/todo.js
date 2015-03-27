//GLOBAL VARIABLE
var List = []

//MY OBCJ CONSTRUCTOR 
function CreateTodo (text, isChecked, list){
	this.text = text;
	this.isChecked = isChecked; 
	this.list = list;
	this.ListItem = document.createElement('li')
	this.AddNew= function () {
					var checkbox = document.createElement('input')
					checkbox.type = "checkbox"
 					var toDo = this;
 					List.push(toDo)
 					console.log(List)
					checkbox.onclick = function updateStatusItem (){
						if (!toDo.isChecked){
							this.parentNode.style.textDecoration = "line-through";
							toDo.isChecked = true
							for (var x = 0; x<List.length; x++){
								if(List[x].text == this.text){
									List[x].isChecked = true
								}
							}
						}
						else{
							this.parentNode.style.textDecoration = "none"
							toDo.isChecked = false
							}
						
					}
					var ItemText = document.createElement('span')
					ItemText.innerText = this.text
					this.ListItem.appendChild(checkbox)
					this.ListItem.appendChild(ItemText)
					this.list.appendChild(this.ListItem)
				}
			}
	
//FILTERING FUNCTION	
function Filtering (list, status, all){	
	for (var x = 0; x<list.length; x++){ //LOOP THOUGHT MY TODOS LIST
		//console.log(list[x].isChecked)
		list[x].ListItem.style.display = "block" //SHOW THEM ALL
		//console.log(list[x].isChecked)
	if(!all){ //IF IS NOT THE ALL FILTER
		if (list[x].isChecked != status){ //IF THE STATUS IS NOT CHECKED MEANS THEY ARE UNCOMPLETED
			//alert(list[x])
			list[x].ListItem.style.display = "none"	
			//alert(status)
		}
	}
	}
}

// EVENTLISTENERS

var Completed = document.getElementById("completed");
Completed.addEventListener("click", function(){  Filtering(List, true, false) } )
var uncompleted = document.getElementById('uncompleted');
uncompleted.addEventListener("click", function() {Filtering(List,false,false)})

var AddNewBtn = document.getElementById("AddNew");
AddNewBtn.addEventListener("click", function(){ 
	var NewTodo = new CreateTodo(document.getElementById("newItem").value, false, document.getElementById("todolist")) 
	NewTodo.AddNew()
	});

document.getElementById("all").addEventListener("click", function(){ Filtering(List, true, true) } )

