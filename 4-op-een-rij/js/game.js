let playfield = document.querySelector('.playground');
playfield.addEventListener('click', log)

function log(e){
    let box = document.querySelectorAll('.box')
    let touched = e.target;
    let bron = null;

    for(let i = 0 ; i<box.length; i++){
        if( box[i] === touched){
            bron = box[i];
            console.log(i)
            break;
        }
    }
    bron.style.backgroundColor="blue";
}