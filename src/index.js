import "./main.sass"
import {App} from "./core/App"
import {config} from "./components/config"

export let app = new App(config.axisCellCount, "board");
app.startGame()













