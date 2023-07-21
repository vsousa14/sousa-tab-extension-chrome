function renderItem(category){
    console.log();
    fetch(`https://source.unsplash.com/${window.screen.width}x${window.screen.height}/?${category}`).then((response) => {   
        document.body.style.backgroundImage = `url(${response.url})`; 
        document.body.style.backgroundPosition = `center`; 
        document.body.style.backgroundRepeat = `no-repeat`; 
        document.body.style.backgroundSize = `cover`; 
    }) 
  }