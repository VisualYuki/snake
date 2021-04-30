// класс змейки на поле

import {config} from "./config";
import {app} from "../index";

export class Snake {
    constructor(x, y) {

    }


    // Добавить змею на поле
    startSnake() {
        // указать начальную точку змеи на поле
        this.listPoints = [];
        this.$direction = "down";
        //app.$model.$snake.addSnakeCell({x: config.snakeStartX, y: config.snakeStartY});
        app.$model.$snake.addSnakeCell({x: config.snakeStartX, y: config.snakeStartY});
        this.$lastCell = {x: config.snakeStartX, y: config.snakeStartY}

        app.$intervalEvent.addEvent(function () {

            let firstCell = app.$model.$snake.getNewFirstCell()


            if (app.$model.$table.$FieldState[firstCell.x][firstCell.y] === "2") {
                app.$model.$table.setTargetCell()
            } else {
                app.$model.$snake.removeSnakeCell();
            }

            if (app.$model.$table.$FieldState[firstCell.x][firstCell.y] === "1") {
                app.newGame()
                return;
            }

            app.$model.$snake.addSnakeCell(firstCell)

            app.$view.updateSnake()
        })
    }

    addSnakeCell(firstCell) {
        app.$model.$table.$FieldState[firstCell.x][firstCell.y] = "1"
        app.$model.$snake.listPoints.unshift(firstCell)


        app.$view.addSnakeCell(firstCell)
    }

    removeSnakeCell() {
        app.$model.$snake.$lastCell = app.$model.$snake.listPoints.pop()
        app.$model.$table.$FieldState[app.$model.$snake.$lastCell.x][app.$model.$snake.$lastCell.y] = "0"

        app.$view.removeSnakeCell(app.$model.$snake.$lastCell)
    }

    getNewFirstCell() {

        let firstCell = Object.assign({}, app.$model.$snake.listPoints[0])

        if (app.$model.$snake.$direction === "up") {
            if (app.$model.$snake.listPoints[0].x !== 0) {
                firstCell.x -= 1;
            } else {
                firstCell.x = config.axisCellCount - 1;
            }
        } else if (app.$model.$snake.$direction === "down") {
            if (app.$model.$snake.listPoints[0].x < (config.axisCellCount - 1)) {
                firstCell.x += 1;
            } else {
                firstCell.x = 0;
            }
        } else if (app.$model.$snake.$direction === "left") {
            if (app.$model.$snake.listPoints[0].y !== 0) {
                firstCell.y -= 1;
            } else {
                firstCell.y = config.axisCellCount - 1;
            }

        } else if (app.$model.$snake.$direction === "right") {
            if (app.$model.$snake.listPoints[0].y < (config.axisCellCount - 1)) {
                firstCell.y += 1;
            } else {
                firstCell.y = 0;
            }
        }

        return firstCell;
    }


}
