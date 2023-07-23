function renderItem(category, change){
    console.log("Category: ", category)
if(change){
    fetch(`https://source.unsplash.com/${window.screen.width}x${window.screen.height}/?${category}`).then((response) => {   
        localStorage.setItem("currentImg", response.url);
        document.body.style.backgroundImage = `url(${response.url})`; 
        document.body.style.backgroundPosition = `center`; 
        document.body.style.backgroundRepeat = `no-repeat`; 
        document.body.style.backgroundSize = `cover`; 

    }) 
}else{
     document.body.style.backgroundImage = `url(${localStorage.getItem("currentImg")})`; 
        document.body.style.backgroundPosition = `center`; 
        document.body.style.backgroundRepeat = `no-repeat`; 
        document.body.style.backgroundSize = `cover`; 
}
    
  }