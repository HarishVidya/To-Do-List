const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList); 
input.addEventListener('keyup', (e)=>{
    (e.keyCode == 13 ? addList(e) : null);
})


function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkbutton = document.createElement('button');
    const trashbutton = document.createElement('button');
    
    checkbutton.innerHTML = '<i class="fa fa-check"></i>';
    trashbutton.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkbutton);
        newLi.appendChild(trashbutton);
    }

    checkbutton.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkbutton.style.display = 'none';
    });

    trashbutton.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    }); 
}