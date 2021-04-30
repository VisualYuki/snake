import {config} from "../components/config"
import {View} from "./View";
import {app} from "../index";

export class Controller {

    constructor() {
        this.$directionList = []; // Список стрелок нажатых во время одного тика
    }

    removeListenEvents() {
        document.removeEventListener("keyup", this.keyUpFunction);
    }

    keyUpFunction(event) {

        switch (event.code) {
            case "ArrowUp":
                app.$controller.$directionList.push("up");
                break;
            case "ArrowDown":
                app.$controller.$directionList.push("down");
                break;
            case "ArrowLeft":
                app.$controller.$directionList.push("left");
                break;
            case "ArrowRight":
                app.$controller.$directionList.push("right");
                break;
        }
    }

    // Слушачем события стрелок и добавляем их в массив событий
    startListenEvents() {
        this.$eventListener = document.addEventListener("keyup", this.keyUpFunction)

        // Берем последнее события стрелок в течении одного тика и меняем направление змеи
        app.$intervalEvent.addEvent(function (event) {
            let direction

            if (app.$controller.$directionList.length !== 0) {
                direction = app.$controller.$directionList.pop()

                if ((direction === "up" && app.$model.$snake.$direction !== "down") ){
                    app.$model.$snake.$direction = direction;
                }

                if ((direction === "down" && app.$model.$snake.$direction !== "up") ){
                    app.$model.$snake.$direction = direction;
                }

                if ((direction === "left" && app.$model.$snake.$direction !== "right") ){
                    app.$model.$snake.$direction = direction;
                }

                if ((direction === "right" && app.$model.$snake.$direction !== "left") ){
                    app.$model.$snake.$direction = direction;
                }

                console.log(direction)
            } else {
                console.log("no event")
            }
        })
    }


}
