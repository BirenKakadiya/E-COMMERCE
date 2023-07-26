let pdata = []

function numShow() {

    let lmn = JSON.parse(localStorage.getItem("DataNumber"))

    let datashow1 = document.createElement('h5')
    let datashow2 = document.createElement('h5')


    document.getElementById("numshow1").appendChild(datashow1)
    document.getElementById("numshow2").appendChild(datashow2)

    datashow1.innerHTML = lmn.mail
    datashow2.innerHTML = lmn.num

}

let b = 0
let image = []

var loadFile = function (event) {
    var image1 = document.getElementById('priview');
};
let fileInput = document.getElementById('pimg');
let newImage = ''
if (fileInput) {
    fileInput.addEventListener('change', (event) => {
        for (let i = 0; i < event.target.files.length; i++) {
            const imageFile = event.target.files[i];

            if (imageFile) {
                const reader = new FileReader();
                // let url = URL.createObjectURL(event.target.files[i]);
                reader.readAsDataURL(imageFile);

                reader.addEventListener('load', () => {
                    b++
                    let img = document.createElement('img')
                    img.setAttribute('class', 'shyam img-fluid')
                    img.width = 80
                    img.setAttribute('id', 'img' + b)
                    img.src = reader.result
                    let btn = document.createElement('button')
                    btn.innerHTML = '-X-'
                    btn.setAttribute('onclick', 'handleImg(' + b + ',"' + reader.result + '")')
                    btn.setAttribute('id', 'btn' + b)
                    btn.setAttribute('class', 'but')

                    document.getElementById('priview').appendChild(img)
                    document.getElementById('priview').appendChild(btn)
                    image.push(reader.result)
                    // console.log(reader.result);
                });
            }
        }
    });
}

function handleImg(a, url) {
    let main = document.getElementById('priview')
    let par = document.getElementById('img' + a)
    let btn = document.getElementById('btn' + a)

    main.removeChild(par)
    main.removeChild(btn)

    image = image.filter((item) => item !== url);

    // console.log(image);
}

function productCatalog() {

    let name = document.getElementById("pname").value;
    let details = document.getElementById("pdetails").value;
    let catagory = document.querySelector('#myselect').value;
    let price = document.getElementById("pprice").value;


    let productData = {
        name: name,
        details: details,
        catagory: catagory,
        price: price,
        img: image,
        id: Date.now(),
    }

    let nameAlready = false

    let alreadyIn = JSON.parse(localStorage.getItem('Productdata'))
    if (alreadyIn) {
        pdata = alreadyIn
        for (let i = 0; i < pdata.length; i++) {
            if (document.getElementById("pname").value == pdata[i].name) {
                nameAlready = true;
            }
        }
    }
    if (nameAlready) {
        alert("Name has been already Add")
    }
    else {
        // document.getElementById("pname").value = ''
        // document.getElementById("pdetails").value = ''
        // document.querySelector("#myselect").value = ''
        // document.getElementById("pprice").value = ''



        pdata.push(productData);
        console.log(pdata);
        localStorage.setItem("Productdata", JSON.stringify(pdata))
    }
}

function dataEdit() {
    numShow()

    if (localStorage.getItem('Productdata') && localStorage.getItem('select')) {

        let edata = JSON.parse(localStorage.getItem('Productdata'))

        let dataId = JSON.parse(localStorage.getItem('select'))

        for (let i = 0; i < edata.length; i++) {
            if (dataId == edata[i].id) {
                document.getElementById("pname").value = edata[i].name
                document.getElementById("pdetails").value = edata[i].details
                document.querySelector('#myselect').value = edata[i].catagory
                document.getElementById("pprice").value = edata[i].price
                image = edata[i].img
                for (let j = 0; j < image.length; j++) {

                    let img = document.createElement('img')
                    img.setAttribute('class', 'shyam img-fluid')
                    img.width = 80
                    img.setAttribute('id', 'img' + j)
                    img.src = image[j]
                    let btn = document.createElement('button')
                    btn.innerHTML = '-X-'
                    btn.setAttribute('onclick', 'handleImg(' + j + ',"' + image[j] + '")')
                    btn.setAttribute('id', 'btn' + j)
                    btn.setAttribute('class', 'but')

                    document.getElementById('priview').appendChild(img)
                    document.getElementById('priview').appendChild(btn)
                }
                // document.getElementById("priview").value = 
            }
        }
    }
}

let n = 0
function tableData() {
    numShow()
    if (localStorage.getItem('Productdata')) {
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



function update() {
    if (localStorage.getItem('Productdata')) {

        let menuData = JSON.parse(localStorage.getItem('Productdata'))

        let id = localStorage.getItem('select')

        let updata = false
        for (let i = 0; i < menuData.length; i++) {
            if (document.getElementById("pname").value == menuData[i].name) {
                updata = true
            }
        }
        if (updata) {
            alert('This name is already register')
        }
        else {
            let objIndex = menuData.findIndex(obj => obj.id == id)
            console.log(objIndex);
            menuData[objIndex].name = document.getElementById("pname").value
            menuData[objIndex].details = document.getElementById("pdetails").value
            menuData[objIndex].catagory = document.querySelector("#myselect").value
            menuData[objIndex].price = document.getElementById("pprice").value
            menuData[objIndex].img = image

        }
        localStorage.removeItem('select')
        localStorage.setItem('Productdata', JSON.stringify(menuData))
    }
}

function mixData() {
    if (localStorage.getItem('select')) {
        update()
    }
    else {
        productCatalog()
    }
}