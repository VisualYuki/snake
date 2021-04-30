import {Cell} from "../components/Cell";
import {Table} from "../components/Table";
import {Snake} from "../components/Snake";
import {config} from "../components/config"
import {app} from "../index"

export class Model {
    constructor(axisCellCount) {
        this.$snake = new Snake()
        this.$table = new Table(config.axisCellCount); // 0 - пустая клетки, 1 - клетки змеи, 2 - таргет клетки

        // таргет клетка для змейки
        //this.$currentTargetCell = this.$table.getFreeCell(this.$snake);
    }
}
