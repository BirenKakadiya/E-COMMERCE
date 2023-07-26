

let n = 0

function card() {
    let xyz = JSON.parse(localStorage.getItem('Productdata'))
    let id = JSON.parse(localStorage.getItem('id'))

    for (let i = 0; i < xyz.length; i++) {
        n++
        let divv = document.createElement('div')
        divv.setAttribute('id', 'cd' + n)
        divv.setAttribute('class', 'col-lg-3')
        divv.setAttribute('onclick', 'openCard(' + xyz[i].id + ')')

        let div = document.createElement('div')
        div.setAttribute('class', 'cd1')

        let img = document.createElement('img')
        img.setAttribute('class', 'img-fluid img1')

        let h3 = document.createElement('h3')
        h3.setAttribute('class', 'pdname')

        let h4 = document.createElement('h4')
        h4.setAttribute('class', 'pdprice')

        divv.appendChild(div)
        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(h4)
        document.getElementById('card').appendChild(divv)

        img.src = xyz[i].img[0]
        h3.innerHTML = xyz[i].name
        h4.innerHTML = xyz[i].price
        h3.style.paddingTop = '20px'
    }

}

function openCard(id) {
    localStorage.setItem('cardId', id)

    window.location.href = '/card.html'
}