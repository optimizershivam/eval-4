// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()
import { appendData, getdata } from "../components/fetch.js";
const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
let results = document.getElementById("results")
get (url,results)
async function get(url,results)
{
 let data = await getdata(url)
 console.log(data)
data = data.articles
appendData(data,results)


}
let result = document.getElementById("results")
const q = document.getElementById("search_input")


async function get1(url,result)
{
 let data = await getdata(url)
 console.log(data)
data = data.articles
// console.log(data.results)
appendData(data,result)


}
q.onkeydown = function(e)
{
 if(e.key ==="Enter")
 {   
    
     const url = `https://masai-mock-api.herokuapp.com/news?q=${q.value}`
     get1(url,result)
     window.location.href = "../search.html"
     
 }
}

// function appendData2(data,cont)
// {
//     data.forEach(({title,description,urlToImage}) =>{
   
//         let div = document.createElement("div")
//         div.setAttribute("class","news")
//         let h3 = document.createElement("h3")
//         let p = document.createElement("p")

//         let img = document.createElement("img")
//         img.src=urlToImage
//         let textdiv = document.createElement("div")

//         h3.innerText = title
//         p.innerText = description
//        textdiv.append(h3,p)
//         div.append(img,textdiv)
//         cont.append(div)

//     })



// }

let box = document.getElementById("sidebar").children

function change() 
{
 console.log(this.id)
 let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
 getdata(url).then(
    (data) =>{
        console.log(data)
        let results = document.getElementById("results")
        results.innerHTML = null
        appendData(data.articles, results)
    }
 )


}
for(let el of box )
{
    el.addEventListener("click", change)
}