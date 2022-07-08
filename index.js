const imgBox=document.querySelector('.imgBox');
const whiteBoxes=document.getElementsByClassName('whiteBox');
console.log(imgBox,whiteBoxes)
imgBox.addEventListener('dragstart',(e)=>{
console.log('u are dragging');
setTimeout(() => {
    e.target.classList.add('hold')
    
}, 1);

})
imgBox.addEventListener('dragend',(e)=>{
    console.log('ended')
    e.target.classList.remove('hold')


})

for (let whiteBox of whiteBoxes) {
    
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log('dragover')
        e.target.classList.add('special')
    });
    
    whiteBox.addEventListener('dragenter',(e)=>{
        console.log('dragenter')
    });
    whiteBox.addEventListener('dragleave',(e)=>{
        console.log('dragleave')
        e.target.classList.remove('imgBox')
        e.target.classList.remove('special')


    });
    whiteBox.addEventListener('drop',(e)=>{
        console.log('drop')
        e.target.append(imgBox)
        e.target.classList.remove('special')
        

    });
    

}