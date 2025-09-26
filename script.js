/*variabel*/
var form = document.getElementById('add-frm');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');


//---Events---
form.addEventListener('submit',addNote);

//--Function---

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
        tr.className = 'items';

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

        console.log(tr);
    }
}