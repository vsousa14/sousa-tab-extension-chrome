var categories = [];

function addCategory(){

}


function setup(){
    let name = document.getElementById("user").value;

    if(!name){
        alert("Your name can't be blank");
        return;
    }

    if(categories.length <= 0){
        categories = ["nature","mountains","city","beach","winter","summer","animals"];
    }

    localStorage.setItem("username",name);
    location.reload();
}