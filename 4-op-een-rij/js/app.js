document.addEventListener('DOMContentLoaded', ()=>{
    const box = document.querySelectorAll('.playground div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (var i = 0, len = box.length; i < len; i++)

    (function(index){

        box[i].onclick = function(){

            if(box[index + 7].classList.contains('taken')){
                if (currentPlayer === 1){
                    box[index].classList.add('taken')
                    box[index].classList.add('player-one')

                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                    console.log('taken')

                }   else if (currentPlayer === 2){
                    box[index].classList.add('taken')
                    box[index].classList.add('player-two')

                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                    console.log('taken')

                }
                
            }else alert('not possible')

        }
    }) (i)

    function checkBoard() {
        const winningArrays = [
            //from left to right
            [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],
            [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
            [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
            [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
            [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
            [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
            //from bottom to top
            [35,28,21,14],[28,21,14,7],[21,14,7,0],
            [36,29,22,15],[29,22,15,8],[22,15,8,1],
            [37,30,23,16],[30,23,16,9],[23,16,9,2],
            [38,31,24,17],[31,24,17,10],[24,17,10,3],
            [39,32,25,18],[32,25,18,11],[25,18,11,4],
            [40,33,26,19],[33,26,19,12],[26,19,12,5],
            [41,34,27,20],[34,27,20,13],[27,20,13,6],
            //from bottom left to upper right 
            [35,29,23,17],[36,30,24,18],[37,31,25,19],[38,32,26,20],
            [28,22,16,10],[29,23,17,11],[30,24,18,12],[31,25,19,13],
            [21,15,9,3],[22,16,10,4],[23,17,11,5],[24,18,12,6],
            //from bottem right to upper left
            [41,33,25,17],[40,32,24,16],[39,31,23,15],[38,30,22,14],
            [34,26,18,10],[33,25,17,9],[32,24,16,8],[31,23,15,7],
            [27,19,11,3],[26,18,10,2],[25,17,9,1],[24,16,8,0]
        ]

        for(let y = 0; y < winningArrays.length; y++){
            const box1 = box[winningArrays[y][0]]
            const box2 = box[winningArrays[y][1]]
            const box3 = box[winningArrays[y][2]]
            const box4 = box[winningArrays[y][3]]

            if(box1.classList.contains('player-one')&&
                box2.classList.contains('player-one')&&
                box3.classList.contains('player-one')&&
                box4.classList.contains('player-one')){
                    
                    result.innerHTML = 'Player One Wins!'

                }
                else if(box1.classList.contains('player-two')&&
                        box2.classList.contains('player-two')&&
                        box3.classList.contains('player-two')&&
                        box4.classList.contains('player-two')){
                    
                            result.innerHTML = 'Player Two Wins!'
                    }
        }

    }

    box.forEach(box => box.addEventListener('click', checkBoard))
})

