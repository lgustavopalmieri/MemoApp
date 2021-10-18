//https://www.youtube.com/watch?v=OR8ySydmqLQ

const menuMobile = document.querySelector('.menu-mobile')
const navList = document.querySelector('.nav-list')

menuMobile.addEventListener('click', ()=>{
    navList.classList.toggle('active')
})

const newMemo = document.querySelector('.btn-addmemo')
const addMemo = document.querySelector('.newmemo')
newMemo.addEventListener('click', () =>{
    addMemo.classList.toggle('active')

    if(addMemo.classList != 'active'){
        let hideBtn = document.querySelector('.addmemo')
        hideBtn.classList.toggle('active')        
    }
})

const cancelNote = document.querySelector('.btn-cancel')
cancelNote.addEventListener('click',()=>{
    addMemo.classList.toggle('active')
    if(addMemo.classList != 'active'){
        let hideBtn = document.querySelector('.addmemo')
        hideBtn.classList.toggle('active')
    }
})



const allMemos = document.querySelector('.allmemos')

const yourMemo = document.querySelector('#your-memo')

const saveMemo = document.querySelector('.btn-save')

saveMemo.addEventListener('click', () =>{
    if(yourMemo.value.length == 0){
        alert("Airhead...")
    }else{
        document.querySelector('.allmemos').innerHTML +=
        `
            <div class="memos">
                <span id="new-fresh-memo" class="span-memo">
                    
                    ${document.querySelector('#your-memo').value}
                      
                </span>
            </div>        
        `

    }
})


