const arrText = []

const input = document.getElementById('input')

const addButton = document.getElementById('add')

// input.addEventListener(type: 'change', listener. (e Event ) => {

// return arrText.push(e.target.value)

// })
const h1Node= document.querySelector('h1')
addButton.onclick = () => {
    if(input.value.trim()===''){
        return
    }else{
        arrText.unshift(input.value)
        input.value=''
        h1Node.innerHTML= arrText
       
    }
}

function setColor(a){
    a.style.background= 'red'
}
setColor(h1Node)
setColor(input)
setColor(addButton)