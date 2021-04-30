import {config} from "./config";
import {app} from "../index";

export class IntervalEvent {
    constructor() {
        this.$funcList = []
        this.$idInterval = setInterval(function () {
            for (let i = 0; i < app.$intervalEvent.$funcList.length; i++) {
                app.$intervalEvent.$funcList[i]();
            }
        }, config.speed)
    }

    clearInterval() {
        this.$funcList = [];
    }

    // Добавить функцию для выполнения после окончания тика
    addEvent(func) {
        this.$funcList.push(func);
    }
}