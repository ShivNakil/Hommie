const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form")

    const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const hero = document.querySelector(".hero")

    let setData = async function(str, period ,ref){
        hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `${str}`
            await wait(`${period}`);
            window.location.href = `${ref}`;
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const hero = document.querySelector(".hero")

        let loginInfo = JSON.parse(localStorage.getItem(`${username}`))

        if(localStorage.length === 0){
            // setData(`No username found, Register first`, 3000, "signUp.html")
            hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `No username found, Register first`
            await wait(3000);
            window.location.href = "signUp.html";
        }
        else if (loginInfo === null) {

            hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `Wrong Username Try Again`
            await wait(1500);
            window.location.href = "login.html";
        }
        else {
            if (password == loginInfo.password) {

                hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
                hero.innerHTML = `Log in as ${loginInfo.username}`
                await wait(5000);
                window.location.href = "index.html";

            }
            else {
                document.querySelector("input[type='text']").value = "";
                document.querySelector("input[type='password']").value = "";

                hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
                hero.innerHTML = `Wrong Password Try Again`
                await wait(1500);
                window.location.href = "login.html";
            }
        }

    })
});






//--------------------------------------------------------------------------------------------------------------------------------------------------


