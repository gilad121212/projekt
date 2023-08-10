const title = document.getElementById("titel")
const category = document.getElementById("category")
const price = document.getElementById("price")
const img = document.getElementById("img")
const Quantity = document.getElementById("Quantity")
const description = document.getElementById("description")
const nweData = JSON.parse(localStorage.getItem("data"))
const id1 = JSON.parse(localStorage.getItem("id"))
nweData.forEach((item) => {
    if (item.id === id1) {
        title.value = item.title
        category.value = item.category
        price.value = item.price
        img.value = item.image
        Quantity.value = item
        description.value = item.description
    }
})
const edit = document.getElementById("edit")
edit.addEventListener("click", (event) => {
    const arr = []
    nweData.forEach((item) => {
        if (item.id === id1) {
            item.title = title.value
            category.value = item.category
            item.price = price.value
            item.image = img.value
            Quantity.value = item
            item.description = description.value
            arr.push(item)
        } else {
            arr.push(item)
        }
    })
    localStorage.setItem("data", JSON.stringify(arr))
})

