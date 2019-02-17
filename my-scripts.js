// store data
var myList = (JSON.parse(localStorage.getItem("myData")) || [])

// create item
function createItem(){
	var newItem = {text: window.prompt("Add new bucket list goal"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData", JSON.stringify(myList))
	printItem(newItem)
}

// print item
function printItem(item){
	var p = document.createElement("p")
	p.innerHTML = item.text
	p.className = item.style
	p.onclick = function(){
		this.className = item.style = (this.className == "none") ? "strike" : "invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(p)
}

//loop and print list
for (x=0; x < myList.length; x++) {printItem(myList[x])} 

