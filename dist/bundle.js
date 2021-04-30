/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.sass":
/*!*******************!*\
  !*** ./main.sass ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Cell.js":
/*!****************************!*\
  !*** ./components/Cell.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cell": () => (/* binding */ Cell)
/* harmony export */ });
// класс клетки на поле
class Cell {
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

/***/ }),

/***/ "./components/IntervalEvent.js":
/*!*************************************!*\
  !*** ./components/IntervalEvent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntervalEvent": () => (/* binding */ IntervalEvent)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./components/config.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./index.js");



class IntervalEvent {
    constructor() {
        this.$funcList = []
        this.$idInterval = setInterval(function () {
            for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.app.$intervalEvent.$funcList.length; i++) {
                _index__WEBPACK_IMPORTED_MODULE_1__.app.$intervalEvent.$funcList[i]();
            }
        }, _config__WEBPACK_IMPORTED_MODULE_0__.config.speed)
    }

    clearInterval() {
        this.$funcList = [];
    }

    // Добавить функцию для выполнения после окончания тика
    addEvent(func) {
        this.$funcList.push(func);
    }
}

/***/ }),

/***/ "./components/Snake.js":
/*!*****************************!*\
  !*** ./components/Snake.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Snake": () => (/* binding */ Snake)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./components/config.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./index.js");
// класс змейки на поле




class Snake {
    constructor(x, y) {

    }


    // Добавить змею на поле
    startSnake() {
        // указать начальную точку змеи на поле
        this.listPoints = [];
        this.$direction = "down";
        //app.$model.$snake.addSnakeCell({x: config.snakeStartX, y: config.snakeStartY});
        _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.addSnakeCell({x: _config__WEBPACK_IMPORTED_MODULE_0__.config.snakeStartX, y: _config__WEBPACK_IMPORTED_MODULE_0__.config.snakeStartY});
        this.$lastCell = {x: _config__WEBPACK_IMPORTED_MODULE_0__.config.snakeStartX, y: _config__WEBPACK_IMPORTED_MODULE_0__.config.snakeStartY}

        _index__WEBPACK_IMPORTED_MODULE_1__.app.$intervalEvent.addEvent(function () {

            let firstCell = _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.getNewFirstCell()


            if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$table.$FieldState[firstCell.x][firstCell.y] === "2") {
                _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$table.setTargetCell()
            } else {
                _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.removeSnakeCell();
            }

            if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$table.$FieldState[firstCell.x][firstCell.y] === "1") {
                _index__WEBPACK_IMPORTED_MODULE_1__.app.newGame()
                return;
            }

            _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.addSnakeCell(firstCell)

            _index__WEBPACK_IMPORTED_MODULE_1__.app.$view.updateSnake()
        })
    }

    addSnakeCell(firstCell) {
        _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$table.$FieldState[firstCell.x][firstCell.y] = "1"
        _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints.unshift(firstCell)


        _index__WEBPACK_IMPORTED_MODULE_1__.app.$view.addSnakeCell(firstCell)
    }

    removeSnakeCell() {
        _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$lastCell = _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints.pop()
        _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$table.$FieldState[_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$lastCell.x][_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$lastCell.y] = "0"

        _index__WEBPACK_IMPORTED_MODULE_1__.app.$view.removeSnakeCell(_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$lastCell)
    }

    getNewFirstCell() {

        let firstCell = Object.assign({}, _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints[0])

        if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$direction === "up") {
            if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints[0].x !== 0) {
                firstCell.x -= 1;
            } else {
                firstCell.x = _config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount - 1;
            }
        } else if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$direction === "down") {
            if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints[0].x < (_config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount - 1)) {
                firstCell.x += 1;
            } else {
                firstCell.x = 0;
            }
        } else if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$direction === "left") {
            if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints[0].y !== 0) {
                firstCell.y -= 1;
            } else {
                firstCell.y = _config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount - 1;
            }

        } else if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$direction === "right") {
            if (_index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints[0].y < (_config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount - 1)) {
                firstCell.y += 1;
            } else {
                firstCell.y = 0;
            }
        }

        return firstCell;
    }


}


/***/ }),

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./components/Cell.js");
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ "./components/Snake.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./components/config.js");





// класс поля игры
class Table {
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
        let freeCell = _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$table.getFreeCell()
        this.$FieldState[freeCell.x][freeCell.y] = "2";

        _index__WEBPACK_IMPORTED_MODULE_2__.app.$view.setTargetCell(freeCell)
    }

    initTable() {
        _index__WEBPACK_IMPORTED_MODULE_2__.app.$view.clearTable();

        for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_3__.config.axisCellCount; i++) {
            for (let j = 0; j < _config__WEBPACK_IMPORTED_MODULE_3__.config.axisCellCount; j++) {
                this.$FieldState[i][j] = "0"
            }
        }

        let tempCell;
        for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_3__.config.axisCellCount; i++)
            for (let j = 0; j < _config__WEBPACK_IMPORTED_MODULE_3__.config.axisCellCount; j++) {
                _index__WEBPACK_IMPORTED_MODULE_2__.app.$view.addTableCell(new _Cell__WEBPACK_IMPORTED_MODULE_0__.Cell(i, j))
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

/***/ }),

/***/ "./components/config.js":
/*!******************************!*\
  !*** ./components/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
let config = {
    root: "board", // корневой элемент для поля
    axisCellCount: 8, // количество квадратов по оси x и y
    speed: 250, // скорость обновления поля в милисекундах
    snakeStartX: 4, // начальная точка змейки по x
    snakeStartY: 4, // начальная точка змейки по y
}

/***/ }),

/***/ "./core/App.js":
/*!*********************!*\
  !*** ./core/App.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./core/Controller.js");
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model */ "./core/Model.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View */ "./core/View.js");
/* harmony import */ var _components_IntervalEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IntervalEvent */ "./components/IntervalEvent.js");






// Главный экзепляр игры
class App {
    constructor(axisCellCount, root) {
        this.$controller = new _Controller__WEBPACK_IMPORTED_MODULE_1__.Controller()
        this.$model = new _Model__WEBPACK_IMPORTED_MODULE_2__.Model(axisCellCount)
        this.$view = new _View__WEBPACK_IMPORTED_MODULE_3__.View()
        this.$intervalEvent = new _components_IntervalEvent__WEBPACK_IMPORTED_MODULE_4__.IntervalEvent()
        this.$root = document.getElementById(_components_config__WEBPACK_IMPORTED_MODULE_0__.config.root)
        this.$root.setAttribute ("style", `grid-template-columns: repeat(${_components_config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount},auto); grid-template-rows: repeat(${_components_config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount},auto)`);
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

/***/ }),

/***/ "./core/Controller.js":
/*!****************************!*\
  !*** ./core/Controller.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./core/View.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./index.js");




class Controller {

    constructor() {
        this.$directionList = []; // Список стрелок нажатых во время одного тика
    }

    removeListenEvents() {
        document.removeEventListener("keyup", this.keyUpFunction);
    }

    keyUpFunction(event) {

        switch (event.code) {
            case "ArrowUp":
                _index__WEBPACK_IMPORTED_MODULE_2__.app.$controller.$directionList.push("up");
                break;
            case "ArrowDown":
                _index__WEBPACK_IMPORTED_MODULE_2__.app.$controller.$directionList.push("down");
                break;
            case "ArrowLeft":
                _index__WEBPACK_IMPORTED_MODULE_2__.app.$controller.$directionList.push("left");
                break;
            case "ArrowRight":
                _index__WEBPACK_IMPORTED_MODULE_2__.app.$controller.$directionList.push("right");
                break;
        }
    }

    // Слушачем события стрелок и добавляем их в массив событий
    startListenEvents() {
        this.$eventListener = document.addEventListener("keyup", this.keyUpFunction)

        // Берем последнее события стрелок в течении одного тика и меняем направление змеи
        _index__WEBPACK_IMPORTED_MODULE_2__.app.$intervalEvent.addEvent(function (event) {
            let direction

            if (_index__WEBPACK_IMPORTED_MODULE_2__.app.$controller.$directionList.length !== 0) {
                direction = _index__WEBPACK_IMPORTED_MODULE_2__.app.$controller.$directionList.pop()

                if ((direction === "up" && _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction !== "down") ){
                    _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction = direction;
                }

                if ((direction === "down" && _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction !== "up") ){
                    _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction = direction;
                }

                if ((direction === "left" && _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction !== "right") ){
                    _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction = direction;
                }

                if ((direction === "right" && _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction !== "left") ){
                    _index__WEBPACK_IMPORTED_MODULE_2__.app.$model.$snake.$direction = direction;
                }

                console.log(direction)
            } else {
                console.log("no event")
            }
        })
    }


}


/***/ }),

/***/ "./core/Model.js":
/*!***********************!*\
  !*** ./core/Model.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _components_Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Cell */ "./components/Cell.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_Snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Snake */ "./components/Snake.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./index.js");






class Model {
    constructor(axisCellCount) {
        this.$snake = new _components_Snake__WEBPACK_IMPORTED_MODULE_2__.Snake()
        this.$table = new _components_Table__WEBPACK_IMPORTED_MODULE_1__.Table(_components_config__WEBPACK_IMPORTED_MODULE_3__.config.axisCellCount); // 0 - пустая клетки, 1 - клетки змеи, 2 - таргет клетки

        // таргет клетка для змейки
        //this.$currentTargetCell = this.$table.getFreeCell(this.$snake);
    }
}


/***/ }),

/***/ "./core/View.js":
/*!**********************!*\
  !*** ./core/View.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./index.js");




class View {
    constructor() {
        this.$root = document.getElementById(_components_config__WEBPACK_IMPORTED_MODULE_0__.config.root);
        this.$cellComponents = new Array(_components_config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount);
        for (let i = 0; i < _components_config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount; i++)
            this.$cellComponents[i] = new Array(_components_config__WEBPACK_IMPORTED_MODULE_0__.config.axisCellCount)
    }

    clearTable() {
        this.$root.innerHTML = "";
    }

    addTableCell(cell) {

        this.$cellComponents[cell.x][cell.y] = cell
        //cell.el.innerText = `${cell.x} , ${cell.y}`
        //this.$cellComponents[1][2]
        _index__WEBPACK_IMPORTED_MODULE_1__.app.$root.appendChild(cell.el);
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
        _index__WEBPACK_IMPORTED_MODULE_1__.app.$intervalEvent.addEvent(function () {
            let lastSnakeCellX = _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$lastCell.x
            let lastSnakeCellY = _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.$lastCell.y

            let firstSnakeCellX = _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints[0].x
            let firstSnakeCellY = _index__WEBPACK_IMPORTED_MODULE_1__.app.$model.$snake.listPoints[0].y

            _index__WEBPACK_IMPORTED_MODULE_1__.app.$view.$cellComponents[lastSnakeCellX][lastSnakeCellY].el.classList.remove("cell_snake")
            _index__WEBPACK_IMPORTED_MODULE_1__.app.$view.$cellComponents[firstSnakeCellX][firstSnakeCellY].el.classList.add("cell_snake")
        })
    }

    setTargetCell(cell) {
        this.$cellComponents[cell.x][cell.y].el.classList.add("cell_target")
    }
}


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.sass */ "./main.sass");
/* harmony import */ var _core_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/App */ "./core/App.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/config */ "./components/config.js");




let app = new _core_App__WEBPACK_IMPORTED_MODULE_1__.App(_components_config__WEBPACK_IMPORTED_MODULE_2__.config.axisCellCount, "board");
app.startGame()















/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map