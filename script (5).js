const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const h3 = document.querySelector("h3");


let search = JSON.parse(localStorage.getItem("search")) || ["HTML", "CSS", "Javascript", "React"];

b1.addEventListener("click", () => {
  for(let i = 0; i < search.length; i++){
    if(inp1.value == search[i]){
      h3.innerText = `${inp1.value} Found!`;
      break;
    }
    else if(inp1.value == ""){
      h3.innerText = `Type something to search`
    }
    else if(inp1.value !== search[i]){
      h3.innerText = `${inp1.value} isn't on our search list!`
    }
  }
});

b2.addEventListener("click", () => {
  search.push(inp2.value)

  let jsonString = JSON.stringify(search);

  localStorage.setItem("search", jsonString)
});
