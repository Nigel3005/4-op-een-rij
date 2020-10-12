import {ConnectFourView} from "../views/ConnectFourView.js";
import {ConnectFourModel} from "../models/ConnectFourModel.js";

export class ConnectFourController{

    constructor() {
        this.view = new ConnectFourView();
        this.view.addClickHandler(e=>{
            this.onPlayFieldClicked(e);
        })
        this.model = new ConnectFourModel();
        this.view.showValues(this.model.getValues());
    }

    onPlayFieldClicked(e){
        console.log("geklikt");
        let columnId = this.view.getClickedColumn(e);
       this.model.acceptMoveOn(columnId);
       let values = this.model.getValues();
       this.view.showValues(values);
    }
}