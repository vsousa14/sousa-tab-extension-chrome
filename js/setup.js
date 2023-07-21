function setup(){
    let name = document.getElementById("user").value;

    if(!name){
        alert("Your name can't be blank");
        return;
    }

    localStorage.setItem("username",name);
    location.reload();
}