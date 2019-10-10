function appendUl(element){
    const firstUl = document.querySelector('ul')
    firstUl.appendChild(element)
}

function appendLorem(element){
    const childOfLorem = document.querySelector('#lorem')
    childOfLorem.appendChild(element)
}


function newLi(str){
    const newTextLocation = document.createElement('li')
    newTextLocation.innerText = str

    return newTextLocation
}

function newImage(url,img){
    img.src = url
    
    
}

function sameClassElements(element1, element2){
    
    
    element2.className=element1.className
}


function newElementSameTag(name, id){
    const newElement1 = document.createElement(name)
    newElement1.idName= id
}


function ColorId(str1, str2){
    const coloration = document.querySelector(str1)
    coloration.style.color = str2
}


appendUl(newLi('yerrrrr'))
appendUl(newLi('yerrrrr'))
appendUl(newLi('yerrrrr'))




const newUrl = 'https://media.tenor.com/images/71d6911bdf294693b4e5bc0263f30e47/tenor.gif'
const createImg = document.createElement('img')

appendLorem(newImage(newUrl, createImg))

 sameClassElements('.numberedItem', '#thing-2')
 sameClassElements('.numberedItem', '#thing-c')

 ColorId('#heading','lightgreen')
