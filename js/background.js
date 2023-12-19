function setBgColor(){
    const rcolor = Math.floor(Math.random() * 256);
    const gcolor = Math.floor(Math.random() * 256);
    const bcolor = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${rcolor}, ${gcolor}, ${bcolor})`; 

    document.body.style.backgroundColor = bgColor;
}

setBgColor();
