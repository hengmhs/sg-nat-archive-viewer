const content = document.querySelector("#content");
const images = content.querySelectorAll("div.imageColumn")
const pageLinks = content.querySelector("div.pageLinks")

let getHighRes = function(address) {
  let tmp = address.split('.')
  let targetAddress = tmp[tmp.length-2].split("")
  targetAddress.pop()
  targetAddress = targetAddress.join("")
  tmp[tmp.length-2] = targetAddress
  tmp = tmp.join(".")
  console.log(targetAddress)
  console.log(tmp)
  return tmp
}

if (images) {
  content.innerHTML = ""
  images.forEach((imageColumn) => {
    // let image = imageColumn.querySelector("img")
    // image.src = getHighRes(image.src)
    content.appendChild(imageColumn)
  }
  )
  content.appendChild(pageLinks)
}

