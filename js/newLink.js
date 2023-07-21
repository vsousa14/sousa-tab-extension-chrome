const newButton = document.getElementById("openNewLinkDialog");
const dialogWrapper = document.getElementById("newLink");

const confirmBtn = document.getElementById("confirmBtn");

newButton.addEventListener("click", () => {
    dialogWrapper.showModal();
  });

  dialogWrapper.addEventListener("close", (e) => {
    dialogWrapper.close();
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    let webText = document.getElementById("newLinkName").value;
    let webLink = document.getElementById("newLinkUrl").value;
    
    let item = {
        text: webText,
        url: webLink
        };

    if(!webLink || !webText){
        alert("All inputs needs a value");
        return;
    }

    let savedLinks = JSON.parse(localStorage.getItem("links")) ;
    if(!savedLinks){
        localStorage.setItem("links", JSON.stringify(item));
    }else{
        const newLink = [savedLinks, ...[item]];
    localStorage.setItem("links", JSON.stringify(newLink));
   
    }
    location.reload();

  });