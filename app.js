const getJoke = async () => {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    let res = await axios.get("https://icanhazdadjoke.com/", config)
    console.log(res)
}
const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    getJoke()
})
const ul = document.querySelector("UL")
const li = document.createElement("LI")

