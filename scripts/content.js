const searchResult = document.querySelector("#searchResult");
const dataColumns = searchResult.querySelectorAll("div.dataColumn")
const pageLinks = searchResult.querySelector("div.pageLinks")
const hr = document.querySelectorAll("hr")
let currentPage = document.querySelector(".currentPage").innerText

/*

console.log("The Current Page: " + currentPage)

let checkKey = function(e) {
  if (e.keyCode == '37' && currentPage > 1) {
     // left arrow
     goToPage(currentPage-1)
     // Requires loading the js script first
     // https://stackoverflow.com/questions/44760732/chrome-extension-run-extensions-script-after-all-other-page-scripts-have-loade
  }
  else if (e.keyCode == '39') {
     // right arrow
     goToPage(currentPage+1)
  }
}

let main = function (){
  document.onkeydown = checkKey;
}

window.onload = main
*/

hr.forEach(element => {
  element.remove();
})

let getHighRes = function(address) {
  let tmp = address.split('.')
  let targetAddress = tmp[tmp.length-2].split("")
  targetAddress.pop()
  targetAddress = targetAddress.join("")
  tmp[tmp.length-2] = targetAddress
  tmp = tmp.join(".")
  return tmp
}

if (dataColumns) {
  dataColumns.forEach((dataColumn) => {
    let image = dataColumn.querySelector("img")
    let link = dataColumn.querySelector("a")
    dataColumn.innerHTML = ""
    image.src = getHighRes(image.src)
    image.removeAttribute('onload')
    image.id = ""
    image.className = ""
    dataColumn.appendChild(link).appendChild(image)
  }
  )
}


