const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));


document.addEventListener("DOMContentLoaded", function () {


    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the image ID from the URL parameter
    const imageId = getParameterByName('id');



    let obj = JSON.parse(localStorage.getItem(imageId))

    if (obj === null) {
        const main = document.querySelector(".main")
        
        main.innerHTML = "404 Product Not Found"
    }
    else {
        let img1 = document.querySelector("#i")
        let img2 = document.querySelector("#sub1")
        let img3 = document.querySelector("#sub2")

        let title = document.querySelector("#title")
        let price = document.querySelector("#price")
        let description = document.querySelector(".description")

        img1.src = `${obj.imgUrl}`
        img2.src = `${obj.imgUrl}`
        img3.src = `${obj.imgUrl}`

        title.innerHTML = `${obj.title}`
        price.innerHTML = `${obj.price}`
        description.innerHTML = `${obj.description}`
    }

    // console.log(description)
    // let productDetails = {
    //     imgUrl: a1,
    //     title: a2,
    //     price: a3,
    //     description: a4,
    //     productId: a5
    // }

    // let img1 = document.querySelector("#i")
    // let img2 = document.querySelector("#sub1")
    // let img3 = document.querySelector("#sub2")

    // let title = document.querySelector("#title")
    // let price = document.querySelector("#price")
    // let description = document.querySelector(".description")

    // img1.src = `${obj.imgUrl}`
    // img2.src = `${obj.imgUrl}`
    // img3.src = `${obj.imgUrl}`

    // title.innerHTML = `${obj.title}`
    // price.innerHTML = `${obj.price}`
    // description.innerHTML = `${obj.description}`

});