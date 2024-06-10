/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) =>{

    element.innerHTML = "LOADING..."
    const renderValue = (value) => {
        element.innerHTML = value
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(renderValue)
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Slow promise")
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Medium promise")
    }, 3500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Fast promise")
    }, 3000);
})