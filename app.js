const textarea = document.getElementById('textarea')
const wordOutput = document.getElementById('word-count')
const letterOutput = document.getElementById('letter-count')
const spaceOutput = document.getElementById('space-count')
const buttonClear = document.getElementById('clear')
const buttonCount = document.getElementById('count')
let fullText = ''

const singleChar = text =>{
    const letters = text.match(/[A-Za-z0-9_]/gi)
    return letters
}
const words = w =>{
    const splited = w.trim().split(/[\s-]/)
    return splited
}
const spaces = e =>{
    const space = e.match(/\s+/g)
    return space
}

buttonClear.addEventListener('click', e=>{
    textarea.value = ''
})
buttonCount.addEventListener('click', e =>{
    const numChars = singleChar(textarea.value)
    const numWords = words(textarea.value)
    const numSpaces = spaces(textarea.value)


    if (numChars != null ){
        if (numWords != null){
            wordOutput.innerHTML = numWords.length
        }else{
            wordOutput.innerHTML = 0
        }
        if(numSpaces != null){
            spaceOutput.innerHTML = numSpaces.length
        }else{
            spaceOutput.innerHTML = 0
        }
        letterOutput.innerHTML = numChars.length
        
    }else{
        textarea.setAttribute('placeholder', 'Insert some text :)') 

    }

    
})
