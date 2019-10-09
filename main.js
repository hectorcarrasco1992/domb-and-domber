function appendUl(element){
    const firstUl = document.querySelector('ul')
    firstUl.appendChild(element)
}

function appendLorem(element){
    const childOfLorem = document.querySelector('#lorem')
    childOfLorem.appendChild(element)
}


function newLi(str){
    const newTextLocation = document.querySelector('li')
    newTextLocation.innerText = str

    return newTextLocation
}

function newImage(str,img){
    const newImage1 = document.querySelector('img')
        newImage1.src = str
}


function sameClassElements(element1, element2){
    const something1 = document.querySelector(element1)
    const something2 = document.querySelector(element2)

    something2.ClassName = something1.ClassName
}


function newElementSameTag(name, id){
    const newElement1 = document.createElement(name)
    newElement1.idName= id
}

function colorId(color, iD){
    const newColor = style.color = 
}