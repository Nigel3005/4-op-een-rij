export class ConnectFourModel extends EventTarget{

    constructor(){
        super();
        const displayCurrentPlayer = document.querySelector('#current-player')
        const result = document.querySelector('#result')
        this.playerId = 1;
       this.values =[
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                    ]
    }

    acceptMoveOn(columnId){
       for(let row = 5; row >= 0; row--){
           if(this.values[row][columnId]===0){
               this.values[row][columnId]= this.playerId;
               if(this.playerId === 1){
                   this.playerId = 2
               }
               else{
                   this.playerId = 1    
               }
               break;
           }
           
       }
    }


    getValues(){
        return this.values;
    }
}