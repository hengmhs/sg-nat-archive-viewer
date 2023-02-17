const searchResult = document.querySelector("#searchResult");
const dataColumns = searchResult.querySelectorAll("div.dataColumn")
const pageLinks = searchResult.querySelector("div.pageLinks")

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


