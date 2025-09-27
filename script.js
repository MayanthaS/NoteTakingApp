/*variabel*/
var form = document.getElementById('add-frm');
var items = document.getElementById('items');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
var tableDiv = document.getElementById('tbl-div');
var search = document.getElementById('srch');

var noteCount = 0;
var newNote = '';
var isUpdate = false;
var record ='';
var note = '';
var nbody = '';




//---Events---
//form submit
form.addEventListener('submit',addNote);

//for page 
window.onload = updateTable;

form.addEventListener('submit',addNote);

//for search
search.addEventListener('keyup',searchNotes);

//for Remove 
items.addEventListener('click',removeNote);

//--Function---

// Updatetable
function updateTable(){
    //Display the table when notes get added
    if(noteCount >0){
        tableDiv.style.display = '';
        
        //update note
        if(isUpdate == true){
            note.firstChild.textContent =ntitle.value;
            note.lastChild.textContent = nbody.valuel;
            //reset update and notecount
            isUpdate = false;
            noteCount--;
        }
        else{
            //add new note
            items.appendChild(newNote);
        }
    }
    else{
        tableDiv.style.display ='none';
    }
}

//add Note
function addNote(e){
    //stop initial behaviour
    e.preventDefault();
   
    //validate inputs
    if(ntitle.value == ''|| nbody.value == ''){
        alert('please enter fill all feilds');
    }
    else{
        //create a new note record
        //New tr
        var tr = document.createElement('tr');
        tr.className = 'item';

        //new td for title and body
        
        var td1 =document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span =document.createElement('span');
        span.className ='note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);
 
        //new td for view
        var td2 =document.createElement('td');
        td2.className ='btcellv';
        var btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('view'));
        btn1.setAttribute('id','vw');
        td2.appendChild(btn1);

        //new td for delete
         var td3 =document.createElement('td');
        td2.className ='btcelld';
        var btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute('id','del');
        td3.appendChild(btn2);

        // add all tds a tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        //increment note count
        noteCount++;

       //set new note
       newNote = tr ;

       //add or update the note of the value
       updateTable();
    }
}

//search notes
function searchNotes(e){
    // Text to lower case
    var searchTxt = e.target.value.toLowerCase();

    // Get list
    var list = items.getElementsByClassName('item');

    // Convert to an array
    var listArr = Array.from(list);
    listArr.forEach(function(item){
        // Get title
        var noteTitle = item.firstChild.textContent;
        // Match
        if(noteTitle.toLowerCase().indexOf(searchTxt) != -1){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    });
}

//remove note
function removeNote(e){
    if(e.target.id ==='del'){
        if(confirm('Are you sure?')){
            //Delete the note
            var tr = e.target.parentElement.parentElement;
            items.removeChild(tr);
            noteCount--;
            if(noteCount ==0){
                updateTable();
            }
        }
    }
}

//view and update a note
function viewNUpdate(e){
    if(e.target.id ==='vw'){
        //get the element values &update input feilds
        record = e.target.parentElement.parentElement;
        note =  record.firstChild.textContent;
        ntitle.value= note.firstChild.textContent;
        nbody.value = note.lastChild.textContent;
        isUpdate = true;
     }
}