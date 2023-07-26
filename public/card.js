function allCrad() {
    let mnp = JSON.parse(localStorage.getItem('Productdata'))
    let id = JSON.parse(localStorage.getItem('cardId'))


    for (let i = 0; i < mnp.length; i++) {
        if (id == mnp[i].id) {
            let div = document.createElement('div')
            div.setAttribute('id', 'cd')
            div.setAttribute('class', 'cd1')

            let dv = document.createElement('div')
            div.appendChild(dv)
            let img = document.createElement('img')
            img.src = mnp[i].img[0]
            img.style.padding = ('20px')
            dv.appendChild(img)
            img.setAttribute('class', 'img-fluid')
            img.setAttribute('width', '410px')
            img.setAttribute('id', 'img1')



            for (let j = 0; j < mnp[i].img.length; j++) {

                let img = document.createElement('img')
                img.src = mnp[i].img[j]
                img.style.padding = '3px'
                div.appendChild(img)
                img.setAttribute('class', 'img-fluid')
                img.setAttribute('width', '100px')
                img.setAttribute('onclick', "setSrc('" + mnp[i].img[j] + "')")
            }


            let div1 = document.createElement('div')
            div1.setAttribute('class', 'div1')
            let div2 = document.createElement('div')
            div2.setAttribute('class', 'div2')


            let pname = document.createElement('p')
            let h3 = document.createElement('h3')
            h3.setAttribute('class', 'pdname')

            let pprice = document.createElement('p')
            let h4 = document.createElement('h4')
            h4.setAttribute('class', 'pdprice')


            div.appendChild(div1)
            div.appendChild(div2)
            div1.appendChild(pname)
            div1.appendChild(h3)
            div2.appendChild(pprice)
            div2.appendChild(h4)


            document.getElementById('ab1').appendChild(div)

            h3.innerHTML = mnp[i].name
            h4.innerHTML = mnp[i].price
            pname.innerHTML = 'Product Name:-'
            pprice.innerHTML = 'Price:-'



        }
    }
}

function setSrc(a) {

    let img2 = document.getElementById('img1')
    img2.setAttribute('src', a)
}