const titel = document.getElementById("titel")
const description1 = document.getElementById("description")
const category1 = document.getElementById("category")
const pic = document.getElementById("pic")
const price1 = document.getElementById("price")
const id2 = JSON.parse(localStorage.getItem("id"))
const arr = []
nweData.forEach((item) => {
    if (item.id === id2) {
        title.innerText = item.title
        pic.src = item.image
        price1.innerText = item.pricegit-exercise
        category1.innerText = item.category
        description1.innerText = item.description
    }
})

