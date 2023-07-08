const board = document.querySelector("#board")
const num1 = document.querySelector("#num1")
const colorNames = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];
for (let i = 0; i < 304; i++) {
    const square = document.createElement("div")
    square.setAttribute("class", "square")
    board.append(square)
    square.addEventListener("mouseover", () => {
        setColor(square)
    })
    square.addEventListener("mouseout", () => {
        resetColor(square)
    })
}
function setColor(box) {
    const ran = randomColor()
    box.style.background = ran
    box.style.transform = "scale(1.1)"
    box.style.boxShadow = `2px 2px 4px ${ran}, 0 0 10px ${ran}`
}
function resetColor(box) {
    box.style.background = "#424242"
    box.style.transform = "scale(1)"
    box.style.boxShadow = "none"
}
function randomColor() {
    const idx = Math.round(Math.random() * colorNames.length)
    return colorNames[idx]
}
const btn1 = document.createElement("button")
btn1.style.padding = "10px 50px"
btn1.style.color = "#fffff"
btn1.style.fontSize = "30px"
btn1.textContent = "click"
btn1.style.borderRadius = "50px"
btn1.style.margin = "20px 20px"
btn1.style.color = "blue"

const btn2 = document.createElement("button")
board.append(btn1,btn2)
btn2.style.padding = "10px 50px"
btn2.style.color = "#fffff"
btn2.style.fontSize = "30px"
btn2.textContent = "kyn"
btn2.style.borderRadius = "50px"
btn2.style.color = "blue"

btn1.addEventListener("click", ()=> {
    const boxes = document.querySelectorAll(".square")
    boxes.forEach(ran => {
        setColor(ran)
    })
})
btn2.addEventListener("click", ()=> {
    const boxes = document.querySelectorAll(".square")
    boxes.forEach(ran => {
        resetColor(ran)
    })
})