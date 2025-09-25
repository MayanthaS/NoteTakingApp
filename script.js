/*variabel*/
var form = document.getElementById('add-frm');


//---Events---
form.addEventListener('submit',addNote);

//--Function---
function addNote(e){
    e.preventDefault();
    console.log('Hello');
}