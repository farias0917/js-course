import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) =>{
    const id1 = "5d86371fd55e2e2a30fe1cc4"
    const id2 = "5d86371fd55e2e2a30fe1ccb2"

    try {
        const {name: name1} = await findHero(id1)
        const {name: name2} = await findHero(id2)
        element.innerHTML = `${name1} / ${name2}`
    } catch (error) {
        element.innerHTML = error
    }

}

const findHero = (id) => {
    const hero = heroes.find(hero => hero.id === id)

    if (!hero) throw `Hero not found`

    return hero
}