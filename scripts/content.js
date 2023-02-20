const searchResult = document.querySelector("#searchResult");
const searchResultItems = document.querySelectorAll('div.searchResultItem')
const pageLinks = searchResult.querySelector("div.pageLinks")
const hr = document.querySelectorAll("hr")
const showDetails = document.querySelectorAll("div.showDetails")
const allLinks = document.querySelectorAll("div.allLinks")
let currentPage = document.querySelector(".currentPage").innerText

// Functions from search-result.min.js needed for arrow key navigation

function goToPage(e) {
  getHiddenElement(
    document.getElementById("searchResult"),
    "page-num"
  ).setAttribute("value", e),
    goSearch("search-result");
}

function getHiddenElement(e, t) {
  var n = document.getElementsByName(t)[0];
  return (
    null == n &&
      ((n = document.createElement("input")).setAttribute("type", "hidden"),
      n.setAttribute("name", t),
      e.appendChild(n)),
    n
  );
}

function goSearch(e, t) {
  t = t || "_self";
  var n = document.getElementById("searchResult");
  n.setAttribute("action", e), n.setAttribute("target", t), n.submit();
}

// End of functions from search-result.min.js

let checkKey = function(e) {
  if (e.keyCode == '37' && currentPage > 1) {
     // left arrow
     goToPage(String(parseInt(currentPage)-1))
  }
  if (e.keyCode == '39') {
     // right arrow
     goToPage(String(parseInt(currentPage)+1))
  }
}

let main = function (){
  document.onkeydown = checkKey;
}

window.onload = main

// Remove horizontal breaks between images
hr.forEach(element => {
  element.remove();
})

// Changes the img URL to get the high res version
let getHighRes = function(address) {
  let tmp = address.split('.')
  let targetAddress = tmp[tmp.length-2].split("")
  targetAddress.pop()
  targetAddress = targetAddress.join("")
  tmp[tmp.length-2] = targetAddress
  tmp = tmp.join(".")
  return tmp
}

// Delete showDetails and allLinks class because the cannot be used
showDetails.forEach(element => {
  element.remove();
})

allLinks.forEach(element => {
  element.remove();
})

const photos = document.createElement("div")
photos.id = "photos"

// Add the photos div before the last child of searchResult which is searchResultControl bottom
searchResult.insertBefore(photos, searchResult.children[searchResult.children.length-1])


if (searchResultItems) {
  searchResultItems.forEach((searchResultItem) => {
    let image = searchResultItem.querySelector("img")
    let link = searchResultItem.querySelector("a")
    searchResultItem.innerHTML = ""
    image.src = getHighRes(image.src)
    image.removeAttribute('onload')
    image.id = ""
    image.className = ""
    photos.appendChild(searchResultItem).appendChild(link).appendChild(image)
    searchResultItem.className = "zoom"
  }
  )
}



