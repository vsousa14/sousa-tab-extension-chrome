var categories = [];

function addCategory(cat){
    if(!categories.includes(cat)){
        let categoriesWrapper = document.getElementById("selected-Categories");
        console.log(categoriesWrapper);
        categories.push(cat);
        let categoryWrapper = document.createElement("div");
        categoryWrapper.className = "catSelected";
        categoryWrapper.id = `category-${cat}`;
        categoryWrapper.innerText = cat;
        categoriesWrapper.appendChild(categoryWrapper);

        let delCategory = document.createElement("span");
        delCategory.className = "material-icons catSelectedDel";
        delCategory.id = `del-${cat}`;
        delCategory.innerText = "close";
        delCategory.onclick = () => {deleteCategory(cat)}
        categoryWrapper.appendChild(delCategory);
    }
}

function deleteCategory(cat){
    deleteThis = document.getElementById(`category-${cat}`);
    deleteThis.remove();
    
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