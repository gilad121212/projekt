function id(arr) {
    let length = nweData.length - 1
    let idLast = arr[length].id + 1
    return idLast
}
const add = document.getElementById("add")
const nweData = JSON.parse(localStorage.getItem("data"))
const value = document.getElementsByClassName("inputValue")
add.addEventListener("click", (event) => {
    const nweCard = {
        id: id(nweData),
        title: value[0].value,
        category: value[1].value,
        price: value[2].value,
        image: value[3].value,
        Quantiy: value[4].value,
        description: value[5].value
    }
    nweData.push(nweCard)
    localStorage.setItem("data", JSON.stringify(nweData))
    nweData = JSON.parse(localStorage.getItem("data"))
})


