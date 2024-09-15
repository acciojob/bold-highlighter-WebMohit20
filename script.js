let bold = document.querySelectorAll("strong");


function highlight() {
    for(let t of bold){
		t.className = "highlight";
	}
}


function return_normal() {
    for(let t of bold){
		t.className = "";
	}

    
}
