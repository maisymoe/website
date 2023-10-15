/* 
    Loosely based on code from https://codepen.io/arickle/pen/XKjMZY
*/

function randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function rainmaker() {
    // DOM elements
    const root = document.querySelector(".rain-root");
    if (!root) throw new Error("rainmaker used on page that does not have a rain-root!");

    // Variables
    let position = 0;

    while (position < 100) {
        // Random numbers for offsets
        const randomHundred = randomInt(1, 98);
        const randomFiver = randomInt(2, 3);

        // Bump position
        position += randomFiver;

        // Every element in the drop uses these styles, let's generalise them
        const animStyles = {
            "animation-delay": `0.${randomHundred}s`,
            "animation-duration": `0.5${randomHundred}s`,
        };

        // Part of me hates declaring a function in a loop, but it does make things cleaner
        function makeDropElem(className: string, extraStyles?: Record<string, any>) {
            const elem = document.createElement("div");
            elem.classList.add(className);
            Object.assign(elem.style, { ...animStyles, ...extraStyles });
            return elem;
        }

        // Make the drop root
        const drop = makeDropElem("drop", { left: `${position}%`, bottom: `${randomFiver + 90}%` });

        // Make the stem and splat of the drop, append them to root
        [makeDropElem("stem"), makeDropElem("splat")].forEach(e => drop.appendChild(e));

        // Append drop to rain root
        root.appendChild(drop);
    }
}
