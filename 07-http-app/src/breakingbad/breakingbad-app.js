/**
 *
 * @returns {Promise<Object>} pokemon infomration
 */

let pokemonName = "pikachu"
const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data = await res.json()
    console.log(data);
    return data
}
/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
    document.querySelector("#app-title").innerHTML = "Breakingbad App"
    element.innerHTML = "Cargando datos ..."
    // await fetchPokemon()

    const input = document.createElement("input")
    const btn = document.createElement("button")
    const img = document.createElement("img")
    img.style.display = "block"
    btn.textContent = "buscar"

    const renderPokemon = (data) => {
        img.src = data.sprites.front_shiny
        element.replaceChildren(input, btn, img)
    }

    btn.addEventListener("click", async () => {
        element.innerHTML = "Cargando datos...  "
        pokemonName = input.value
        const pokemon = await fetchPokemon()
        renderPokemon(pokemon)
    })

    fetchPokemon()
        .then(renderPokemon)

}