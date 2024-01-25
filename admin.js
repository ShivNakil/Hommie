const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form")


    form.addEventListener('submit', async function (e) {
        e.preventDefault();


        const a1 = document.querySelector("#a1").value
        const a2 = document.querySelector("#a2").value
        const a3 = document.querySelector("#a3").value
        const a4 = document.querySelector("#a4").value
        const a5 = document.querySelector("#a5").value

        let productDetails = {
            imgUrl: a1,
            title: a2,
            price: a3,
            description: a4,
            productId: a5
        }

        // console.log(productDetails)

        localStorage.setItem(`${productDetails.productId}`, JSON.stringify(productDetails))

        a1.innnerHTML = ""
    })
});






//--------------------------------------------------------------------------------------------------------------------------------------------------




// const form = document.querySelector("#form")

// form.addEventListener('submit' , function(e){

//     e.preventDefault();

//     const a1 = document.querySelector("#a1").value
//     const a2 = document.querySelector("#a2").value
//     const a3 = document.querySelector("#a3").value
//     const a4 = document.querySelector("#a4").value

//     let productDetails = {
//         imgUrl: a1,
//         title: a2,
//         price: a3,
//         description: a4
//     }

//     console.log(productDetails)

// })  





