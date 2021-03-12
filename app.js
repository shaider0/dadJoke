const addJoke = async () => {
    const res = await getJoke()
    const jokeText = res.data.joke
    const ul = document.querySelector("UL")
    const li = document.createElement("LI")
    li.append(jokeText)
    ul.append(li)
}

const getJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: "application/json"
            }
        }
        let res = await axios.get("https://icanhazdadjoke.com/", config)
        return res
    } catch (error) {
        console.log("Whoops, something went wrong")
        console.log(error)
    }

}

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    addJoke()
})
