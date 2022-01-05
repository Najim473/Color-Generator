 const colorGen = document.getElementById('newGen')
 const color = document.getElementById('color')

 const setBg =()=>{
     const randomColor = Math.floor(Math.random()*16777215).toString(16)
     document.body.style.backgroundColor = '#'+randomColor;
     document.getElementById('color').innerHTML = '#'+randomColor;
 }

 colorGen.addEventListener('click',setBg)
 setBg()