import {Cell} from "./Cell";
import {Snake} from "./Snake";
import {app} from "../index";
import {config} from "./config";

// класс поля игры
export class Table {
    constructor(axisCellCount) {
        this.$cellCount = axisCellCount * axisCellCount;
        this.$axisCellCount = axisCellCount;

        // массив претендентов на свободную клетку для таргета змейки
        this.$randomFieldState = new Array(axisCellCount)
        this.$FieldState = new Array(axisCellCount)


        for (let i = 0; i < axisCellCount; i++) {
            this.$FieldState[i] = new Array(axisCellCount)
        }


    }

    setTargetCell() {
        let freeCell = app.$model.$table.getFreeCell()
        this.$FieldState[freeCell.x][freeCell.y] = "2";

        app.$view.setTargetCell(freeCell)
    }

    initTable() {
        app.$view.clearTable();

        for (let i = 0; i < config.axisCellCount; i++) {
            for (let j = 0; j < config.axisCellCount; j++) {
                this.$FieldState[i][j] = "0"
            }
        }

        let tempCell;
        for (let i = 0; i < config.axisCellCount; i++)
            for (let j = 0; j < config.axisCellCount; j++) {
                app.$view.addTableCell(new Cell(i, j))
            }
    }

    // получить свободную клетку на поле для таргет клетки
    getFreeCell(table, snake) {
        let randY = Math.floor(Math.random() * (this.$axisCellCount - 1 )) + 1
        let randX = Math.floor(Math.random() * (this.$axisCellCount - 1 )) + 1

        let randDirection = Math.floor(Math.random()) === 1 ? -1 : 1;

        // проходим по строке x, либо назад, либо вперед до конца
        for (let i = randX; 0 < i && i < this.$axisCellCount; i += randDirection) {
            if (this.$FieldState[randX][i] === "0") {
                return {x: randX, y: i}
            }
        }
        // // проходим по строке x, либо назад, либо вперед до конца
        for (let i = randX;0 < i && i < this.$axisCellCount; i -= randDirection) {
            if (this.$FieldState[randX][i] === "0") {
                return {x: randX, y: i}
            }
        }

        if (randDirection === 1) {
            for (let i = ++randX; i > 0 && i < this.$axisCellCount; i++) {
                for (let j = 0; j < this.$axisCellCount; j++) {
                    if (this.$FieldState[i][j] === "0") {
                        return {x: randX, y: i}
                    }
                }
            }
            for (let i = --randX; i > 0; i--) {
                for (let j = this.$axisCellCount - 1; j > 0; j--) {
                    if (this.$FieldState[i][j] === "0") {
                        return {x: randX, y: i}
                    }
                }
            }
        } else if (randDirection === -1) {
            for (let i = --randX; i > 0; i--) {
                for (let j = this.$axisCellCount - 1; j > 0; j--) {
                    if (this.$FieldState[i][j] === "0") {
                        return {x: randX, y: i}
                    }
                }
            }
            for (let i = ++randX; i > 0 && i < this.$axisCellCount; i++) {
                for (let j = 0; j < this.$axisCellCount; j++) {
                    if (this.$FieldState[i][j] === "0") {
                        return {x: randX, y: i}
                    }
                }
            }
        }
    }
}