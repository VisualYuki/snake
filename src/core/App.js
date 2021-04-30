import {config} from "../components/config"
import {Controller} from "./Controller";
import {Model} from "./Model";
import {View} from "./View";
import {IntervalEvent} from "../components/IntervalEvent";

// Главный экзепляр игры
export class App {
    constructor(axisCellCount, root) {
        this.$controller = new Controller()
        this.$model = new Model(axisCellCount)
        this.$view = new View()
        this.$intervalEvent = new IntervalEvent()
        this.$root = document.getElementById(config.root)
        this.$root.setAttribute ("style", `grid-template-columns: repeat(${config.axisCellCount},auto); grid-template-rows: repeat(${config.axisCellCount},auto)`);
    }

    // начать игру
    startGame() {
        this.$controller.startListenEvents()
        this.$model.$table.initTable()
        this.$model.$table.setTargetCell()
        this.$model.$snake.startSnake()
    }

    // Начать новую игру
    newGame() {
        //history.go(0)
        location.reload()

        // this.$controller = new Controller()
        // this.$model = new Model(config.axisCellCount)
        // this.$view = new View()
        // this.$intervalEvent = new IntervalEvent()

        // this.$intervalEvent.clearInterval()
        // this.$controller.removeListenEvents()
        //
        //
        // this.$model.$table.initTable()
        // this.$model.$snake.startSnake()
        // this.$model.$table.setTargetCell()
        // this.$controller.startListenEvents()

    }
}