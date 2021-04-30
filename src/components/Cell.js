// класс клетки на поле
export class Cell {
    constructor(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Координаты клетки не корректны")
        } else {
            let el = document.createElement("div");
            el.setAttribute("data-i", x)
            el.setAttribute("data-j", y)
            el.classList.add("cell");
            return {el: el, x: x, y: y};
        }
    }

}