
function generateId(){
    var idsStorage = localStorage.getItem('linksId');
    idsStorage = idsStorage ? JSON.parse(idsStorage) : [];
    var id = Math.random().toString(16).slice(2);
    if(!idsStorage.includes(id)){
        idsStorage.push(id);
        localStorage.setItem("linksId", JSON.stringify(idsStorage));
        return id;
    }else{
        generateId();
        return;
    }
    
}

categoryArr = ["nature","mountains","city","beach","winter","summer","animals"];
userCategories = [];
var savedCategories = JSON.parse(localStorage.getItem("categories"));
window.onload = () => {
 
        let setupWin = document.getElementById("setup");
        const username = localStorage.getItem("username");
        if(!username){
            setupWin.style.display = "block";
        }else{
            setupWin.style.display = "none";
            let greetingEl = document.getElementById("greeting")
        greetingEl.innerHTML = `${loadGreeting()}, ${username}`;
        //let randomCat = Math.floor(Math.random() * savedCategories.length);
          //  renderItem(savedCategories[randomCat]);
        
        loadSavedLinks();
        let linksWrapper = document.querySelectorAll(".div-link");
        
        if(linksWrapper.length >=1){
            for(let i = 0; i<=linksWrapper.length-1; i++){
                console.log(i);
            console.log(linksWrapper[i].children[0].children[0].dataset.link);
            let iconImage = getIcon(linksWrapper[i].children[0].children[0].dataset.link, linksWrapper[i].children[0].children[0]);
        }
        }
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
            }
            
            function formatDate(date) {
            return (
                [
                date.getFullYear(),
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate()),
                ].join('-') +
                ' ' +
                [
                padTo2Digits(date.getHours()),
                padTo2Digits(date.getMinutes()),
                padTo2Digits(date.getSeconds()),
                ].join(':')
            );
            }
            
            // todayDate e tomorrowDate, tem de vir do localStorage, só se nao tiver nada é que seta dados novos
            let todayDataStorage = localStorage.getItem("lastVisit");
            let tomorrowDataStorage = localStorage.getItem("nextImageDate");
            var todayDate = new Date();
            var tomorrowDate =  new Date();
            localStorage.setItem("lastVisit",formatDate(todayDate));
            
                
            tomorrowDate.setDate(tomorrowDate.getDate()+1);
            tomorrowDate.setHours(0,0,0);
            var lastVisit = localStorage.getItem("lastVisit");
            
            
                if(todayDataStorage < tomorrowDataStorage){
                //today lower than tomorrow
                renderItem(null,false);
            }else{
                //today after tomorrow
                let randomCat = Math.floor(Math.random() * savedCategories.length);
                renderItem(savedCategories[randomCat],true);
                localStorage.setItem("nextImageDate", formatDate(tomorrowDate));
            }
        }
      
    }
   