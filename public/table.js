

function numShowOf() {

    let lmn = JSON.parse(localStorage.getItem("DataNumber"))

    let datashow1 = document.createElement('h5')
    let datashow2 = document.createElement('h5')


    document.getElementById("numshow1").appendChild(datashow1)
    document.getElementById("numshow2").appendChild(datashow2)

    datashow1.innerHTML = lmn.mail
    datashow2.innerHTML = lmn.num
}


let n = 0
function tableData() {
    numShowOf()
    let pdata = JSON.parse(localStorage.getItem('Productdata'))

    for (let i = 0; i < pdata.length; i++) {
        n++
        let T1 = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')
        let bt1 = document.createElement('button')
        let bt2 = document.createElement('button')
        let img = document.createElement('img')

        T1.setAttribute('id', 'her' + n)
        bt1.setAttribute('class', 'bt1')
        bt1.setAttribute('onclick', 'edit(' + pdata[i].id + ')')
        bt2.setAttribute('class', 'bt2')
        bt2.setAttribute('onclick', 'remove(' + pdata[i].id + ',' + n + ')')
        img.setAttribute('width', '100px')

        T1.appendChild(td1)
        T1.appendChild(td2)
        T1.appendChild(td3)
        T1.appendChild(td4)
        T1.appendChild(td5)
        T1.appendChild(td6)
        T1.appendChild(td7)
        td6.appendChild(bt1)
        td7.appendChild(bt2)
        td5.appendChild(img)
        document.getElementById('tab1').appendChild(T1)

        td1.innerHTML = pdata[i].name
        td2.innerHTML = pdata[i].details
        td3.innerHTML = pdata[i].catagory
        td4.innerHTML = pdata[i].price
        img.src = pdata[i].img[0]
        bt1.innerHTML = 'Edit'
        bt2.innerHTML = '- X -'



    }

}

function remove(n, m) {
    pdata = JSON.parse(localStorage.getItem('Productdata'))

    document.getElementById('her' + m).remove()
    pdata = pdata.filter(obj => obj.id !== n)

    console.log(pdata);
    localStorage.setItem('Productdata', JSON.stringify(pdata))
}
function edit(id) {

    localStorage.setItem('select', id)

    window.location.href = "/admin.html"
}
