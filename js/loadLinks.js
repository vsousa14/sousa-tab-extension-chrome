function validateLink(string) {
    if(/(http(s?)):\/\//i.test(string)) {
      return true;
    }else{
        return false;
    }
  }

function loadSavedLinks(){
    let linksContainer = document.getElementById("linksArea");
    let links = eval(JSON.parse(localStorage.getItem("links")));
    let addLink = document.getElementById("openNewLinkDialog");

    if(!links){
        return;
    }

    for(let l = 0; l<=links.length-1; l++){
        //console.log(links[l]);
        //Create HTML to load all links
        let linkWrapper = document.createElement("a");
        linkWrapper.href = validateLink(links[l].url) ? `${links[l].url}` : `https://${links[l].url}`;
        linkWrapper.className = "link-container";
        linksContainer.insertBefore(linkWrapper,addLink);

        let favico = document.createElement("img");
        favico.dataset.link = links[l].url;
        linkWrapper.appendChild(favico);

        let linkLabel = document.createElement("span");
        linkLabel.innerText = links[l].text;
        linkWrapper.appendChild(linkLabel);
    }

}