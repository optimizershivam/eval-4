// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

import { appendData, getdata } from "../components/fetch.js";

const q = document.getElementById("search_input")
let result = document.getElementById("results")
q.onkeydown = function(e)
{
 if(e.key ==="Enter")
 {   
     
     const url = `https://masai-mock-api.herokuapp.com/news?q=${q.value}`
     get(url,result)
    
 }


}
async function get(url,result)
{
 let data = await getdata(url)
 console.log(data)
data = data.articles
// console.log(data.results)
appendData(data,result)


}
