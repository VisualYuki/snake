import {config} from "../components/config";
import {app} from "../index";


export class View {
    constructor() {
        this.$root = document.getElementById(config.root);
        this.$cellComponents = new Array(config.axisCellCount);
        for (let i = 0; i < config.axisCellCount; i++)
            this.$cellComponents[i] = new Array(config.axisCellCount)
    }

    clearTable() {
        this.$root.innerHTML = "";
    }

    addTableCell(cell) {

        this.$cellComponents[cell.x][cell.y] = cell
        //cell.el.innerText = `${cell.x} , ${cell.y}`
        //this.$cellComponents[1][2]
        app.$root.appendChild(cell.el);
        //this.$cellComponents.push(cell );
    }

    initSnake(table, snake) {
        for (let i = 0; i < snake.listPoints.length; i++) {
            let snakeX = snake.listPoints[i].x
            let snakeY = snake.listPoints[i].y
            this.$cellComponents[snakeX][snakeY].el.classList.add("cell_snake")
        }
    }

    addSnakeCell(firstCell) {
        this.$cellComponents[firstCell.x][firstCell.y].el.classList.add("cell_snake")
        this.$cellComponents[firstCell.x][firstCell.y].el.classList.remove("cell_target")
    }

    removeSnakeCell(lastCell) {
        this.$cellComponents[lastCell.x][lastCell.y].el.classList.add("cell_snake")
        this.$cellComponents[lastCell.x][lastCell.y].el.classList.remove("cell_target")
    }

    updateSnake() {
        app.$intervalEvent.addEvent(function () {
            let lastSnakeCellX = app.$model.$snake.$lastCell.x
            let lastSnakeCellY = app.$model.$snake.$lastCell.y

            let firstSnakeCellX = app.$model.$snake.listPoints[0].x
            let firstSnakeCellY = app.$model.$snake.listPoints[0].y

            app.$view.$cellComponents[lastSnakeCellX][lastSnakeCellY].el.classList.remove("cell_snake")
            app.$view.$cellComponents[firstSnakeCellX][firstSnakeCellY].el.classList.add("cell_snake")
        })
    }

    setTargetCell(cell) {
        this.$cellComponents[cell.x][cell.y].el.classList.add("cell_target")
    }
}
