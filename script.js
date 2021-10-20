var plusButton = document.querySelector('.btn-addmemo')
var cancelButton = document.querySelector('.btn-cancel')
var saveButton = document.querySelector('.btn-save')

const menuMobile = document.querySelector('.menu-mobile')
const navList = document.querySelector('.nav-list')

menuMobile.addEventListener('click', ()=>{
    navList.classList.toggle('active')
})

//plusButton.addEventListener('click',openNewNote)
saveButton.addEventListener('click',saveNote)
cancelButton.addEventListener('click',cancelMemo)



function openNewNote(){
    document.querySelector('.allmemos').classList.toggle('active')
    document.querySelector('.newmemo').classList.toggle('active')
    plusButton.classList.toggle('active')
}

function cancelMemo(){
    document.querySelector('.newmemo').classList.toggle('active')
    plusButton.classList.toggle('active')
    document.querySelector('.allmemos').classList.toggle('active')
}

function saveNote(){

    var yourMemo = document.querySelector('#your-memo')

    if(yourMemo.value.length == 0){
        alert("Airhead...")
    }else{
        document.querySelector('.allmemos').innerHTML +=
        `
            <div class="memos">
                <textarea class="memo">
                    ${document.querySelector('#your-memo').value}
                </textarea>
                <button class="delete">
                    delete
                </button>    
            </div>        
        `;

        var allMemosToDelete = document.querySelectorAll('.delete')
        for(let i = 0; i < allMemosToDelete.length;i++){
            allMemosToDelete[i].onclick=function (){
                this.parentNode.remove()
            }
        }
       



        document.querySelector('.your-memo').value = '' 
        document.querySelector('.allmemos').classList.toggle('active')
        document.querySelector('.newmemo').classList.remove('active')
        document.querySelector('.btn-addmemo').classList.toggle('active')      
    } 
}    






