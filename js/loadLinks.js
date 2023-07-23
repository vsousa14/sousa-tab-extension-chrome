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

        let linkDiv = document.createElement("div");
        linkDiv.id = `div-${links[l].id}-${links[l].text}`
        linkDiv.className = "div-link";
        linksContainer.insertBefore(linkDiv,addLink);

        let linkWrapper = document.createElement("a");
        linkWrapper.href = validateLink(links[l].url) ? `${links[l].url}` : `https://${links[l].url}`;
        linkWrapper.className = "link-container";
        linkDiv.appendChild(linkWrapper);

        let favico = document.createElement("img");
        favico.dataset.link = links[l].url;
        linkWrapper.appendChild(favico);

        let linkLabel = document.createElement("span");
        linkLabel.innerText = links[l].text;
        linkWrapper.appendChild(linkLabel);

        let linkRemove = document.createElement("span");
        linkRemove.className = "material-icons link-remove";
        linkRemove.innerText = "close";
        linkRemove.id = `${links[l].id}-${links[l].text}`;
        linkRemove.onclick = () => {removeLink(linkDiv,links[l].id)};
        linkDiv.appendChild(linkRemove);
        linkDiv.onmouseover = function(){linkRemove.style.display = "block";};
        linkDiv.onmouseout = function(){linkRemove.style.display = "none";};
    }

}