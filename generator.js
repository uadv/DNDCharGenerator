// This is the data it can randomize through

const skinCol = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Pink', 'Cyan', 'Magenta', 'Gray']
const race = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling']
const weapon = ['Longsword', 'Shortbow', 'Warhammer', 'Dagger', 'Greatsword', 'Mace', 'Crossbow', 'Battleaxe', 'Spear']
const eyeCol = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Pink', 'Cyan', 'Magenta', 'Gray']
const ability = ['Healing', 'Attacking', 'Defence']

// This Creates a random index for each array
const randomI = array => Math.floor(Math.random() * array.length)
// Generates the text and calls the randomI Function
const Generate = () => {
    return console.log(`You are ${race[randomI(race)]} with ${skinCol[randomI(skinCol)]} skin and ${eyeCol[randomI(eyeCol)]} coloured eyes. Your weapon of choice is a ${weapon[randomI(weapon)]} and you specialize in ${ability[randomI(ability)]}`)
}
Generate()
