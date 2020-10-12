export class ConnectFourView {
    
    constructor() {
        this.stapel = document.querySelectorAll('.box');
    }
    
    getClickedColumn(e) {
        let bron = e.target;
        let i;
        for (i = 0; i < this.stapel.length; i++) {
            if (this.stapel[i] === bron) {
                return i % 7;
            }
        }
    }
    
    addClickHandler(handler) {
        document.querySelector('.playground').addEventListener('click', handler);
    }

    showValues(values) {
        for (let row = 0; row < 6; row++) {
            for (let column = 0; column < 7; column++) {
                let value = values[row][column];
                let location= 7*row + column;
                let color;
                switch(value){
                    case 0:
                        color = "white";
                        break;
                    case 1:
                        color = "linear-gradient(to bottom, #ff0101, #770000 50%, #ff0101)";
                        break;
                    case 2:
                        color = "linear-gradient(to bottom, yellow, #4b6600 50%, yellow)";
                        break;
                    case 3:
                        color = "linear-gradient(to bottom, lime, #105200 50%, lime)"
                        break;
                }
                this.stapel[location].style.background=color;
            }
        }
    }
}