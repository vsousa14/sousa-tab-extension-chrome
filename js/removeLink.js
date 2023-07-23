function removeLink(el,id){
    let allLinks = document.getElementById("linksArea");
    var data = localStorage.getItem('links');
    data = data ? JSON.parse(data) : [];
    const itemToRemove = data.findIndex((obj) => obj.id === id);
    console.log(itemToRemove);
    if (itemToRemove > -1) {
        data.splice(itemToRemove, 1);
        localStorage.setItem("links", JSON.stringify(data));
        el.remove();
      }


}