// Ude Import export (MANDATORY)

import {navbar} from "../components/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()
import {appendDatanews} from "../components/fetch.js";

let x = document.getElementById("detailed_news")
let store = []
let data = JSON.parse(localStorage.getItem("news"))
store.push(data)
appendDatanews(store,x)