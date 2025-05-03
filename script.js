const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.inpu-box');

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes();

function updateStorage(){
  localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () =>{

  const noteDiv = document.createElement('div');
  noteDiv.className = 'note-wrapper';
 
 const inputBox = document.createElement('p');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');

  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-trash');

  noteDiv.appendChild(inputBox);
  noteDiv.appendChild(i);

  notesContainer.appendChild(noteDiv);
});

notesContainer.addEventListener('click',function(e){
  if(e.target.tagName === 'I'){
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName==='P'){
    notes = document.querySelectorAll('.input-box');
   notes.forEach(nt =>{
    nt.onkeyup = function(){
      updateStorage();
    }
   })
  }
})

document.addEventListener('keydown', event =>{
  if(event.key === 'enter'){
    document.execCommand('insertLineBreak'); //execommand is depricated so there are other alternative which I will update in this 
      event.preventDefault();
    
  }
})