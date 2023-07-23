

function addCategory(cat){
    if(!userCategories.includes(cat)){
        let inputCategory = document.getElementById(`category`)
        let categoriesWrapper = document.getElementById("selected-Categories");
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
        userCategories.push(cat);
        inputCategory.value = "";
    }
}

function deleteCategory(cat){
    deleteThis = document.getElementById(`category-${cat}`);
    const indexToRemove = userCategories.indexOf(cat);
    userCategories.splice(indexToRemove, 1);
    deleteThis.remove();
}


function setup(){
    let name = document.getElementById("user").value;

    if(!name){
        alert("Your name can't be blank");
        return;
    }

    if(userCategories.length <= 0){
        userCategories = categoryArr;
    }

    localStorage.setItem("username",name);
    localStorage.setItem("categories", JSON.stringify(userCategories));
    location.reload();
}