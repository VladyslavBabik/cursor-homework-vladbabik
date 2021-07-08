//base
function randomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
function generateBlocks(){
    for (let i = 0; i < 25; i++){
        const element = document.createElement('div')
        element.style.background = randomColor()
        document.body.prepend(element)
    }
}
//advanced
function generateBlocksInterval(){
  setInterval(() => {
    const allElement = document.querySelectorAll('div');
    allElement.forEach(element => (element.style.backgroundColor = randomColor()));
  }, 1000)}
