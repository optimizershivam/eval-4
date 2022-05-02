

async function getdata(url)
{
    let res = await fetch (url)
    let data = await res.json()
    console.log(data)
    return data
}

 function appendData(data,cont)
{
    data.forEach(({title,description,urlToImage,content}) =>{
   
        let div = document.createElement("div")
        div.setAttribute("class","news")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        let img = document.createElement("img")
        img.src=urlToImage
        let textdiv = document.createElement("div")

        h3.innerText = title
        p.innerText = description
       textdiv.append(h3,p)
        div.append(img,textdiv)
        cont.append(div)
        div.addEventListener("click", function(){
            let obj = {

                title:title,
                content:content,
                urlToImage:urlToImage,
            }
            localStorage.setItem("news", JSON.stringify(obj))
            window.location.href = "../news.html"
        })
    })



}
function appendDatanews(data,cont)
{
    data.forEach(({title,description,urlToImage,content}) =>{
   
        let div = document.createElement("div")
        div.setAttribute("class","news")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        let img = document.createElement("img")
        img.src=urlToImage
        let textdiv = document.createElement("div")

        h3.innerText = title
        p.innerText = content
       textdiv.append(h3,p)
        div.append(img,textdiv)
        cont.append(div)
        
    })



}
export {getdata,appendData,appendDatanews}