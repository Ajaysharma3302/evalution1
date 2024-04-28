let container = document.getElementById("container")
 


async function fetchdata(){

API_LINK = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"

try{
    let res = await fetch(API_LINK)
let data = await res.json()
 console.log(data.data)
data.forEach(element =>{
    // let div = document.createElement("div")

    // let table = document.createElement("table")

    // let td = document.createElement("td")

    // let tr = document.createElement("tr")

    let h1 = document.createElement("h1")
    h1.innerHTML="hello"

    let p =document.createElement("p")
    p.innerText=("hl")

//     td.innerText="hello"

//     table.appendChild(td)

//     div.append(table)

    // container.appendChild(div)
    container.appendChild(p)
    container.appendChild(h1)

   })

}catch(error){
    console.log(error)
}
}
// fetchdata()

// function showdata(){
     
// }
// showdata()
//  function sort(){


//  }