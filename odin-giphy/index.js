
const img = document.querySelector('img');
const btnNew = document.querySelector(".btn-new");
const input = document.querySelector("input");
const form = document.querySelector("form");
const getData = (label ) =>{
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=SCalxOedgB6YNO386ZcygFDs7X4d9U6r&s=${label}`)
    .then((res) => res.json())
    .then((res) => 
    img.src = res.data.images.original.url
)
.catch((error)=> console.log("Error Fetching Data", error))
}


const updateImg = () =>{
const inputValue = input.value;
 getData(inputValue)
}
 
form.addEventListener("submit", (e)=>{
 e.preventDefault();
   updateImg()
})



btnNew.addEventListener("click", updateImg)


getData("cats");