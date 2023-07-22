

function addCategory(cat){
    if(!categoryArr.includes(cat)){
        let categoriesWrapper = document.getElementById("selected-Categories");
        console.log(categoriesWrapper);
        categoryArr.push(cat);
        let categoryWrapper = document.createElement("div");
        categoryWrapper.className = "catSelected";
        categoryWrapper.id = `category-${cat}`;
        categoriesWrapper.appendChild(categoryWrapper);

        let delCategory = document.createElement("span");
        delCategory.className = "material-icons catSelectedDel";
        delCategory.id = `del-${cat}`;
        delCategory.innerText = "close";
        delCategory.onclick = () => {deleteCategory(cat)}
        categoryWrapper.appendChild(delCategory);
        
        let categoryText = document.createElement("span");
        categoryText.innerText = cat;
        categoryText.style.display = "flex";
        categoryText.style.justifyContent = "center";
        categoryText.style.alignItems = "center";
        categoryWrapper.appendChild(categoryText);
    }
}

function deleteCategory(cat){
    deleteThis = document.getElementById(`category-${cat}`);
    const indexToRemove = categoryArr.indexOf(cat);
    categoryArr.splice(indexToRemove, 1);
    deleteThis.remove();
    
}


function setup(){
    let name = document.getElementById("user").value;

    if(!name){
        alert("Your name can't be blank");
        return;
    }

    if(categoryArr.length <= 0){
        categoryArr = ["nature","mountains","city","beach","winter","summer","animals"];
    }

    localStorage.setItem("username",name);
    localStorage.setItem("categories", JSON.stringify(categoryArr));
    location.reload();
}