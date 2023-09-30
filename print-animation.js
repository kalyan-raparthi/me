const a  = document.getElementById("riddle")
let arr = "Enter your password."

async function print() {
    let exe = document.createTextNode("EXIXE: ")
    a.appendChild(exe)
    for (let i = 0; i < arr.length; i++) {
        await sleep(100);
        var txt = document.createTextNode(arr.charAt(i))
        a.appendChild(txt)
    }

}
async function sleep(num) {
    return new Promise((resolve) => setTimeout(resolve, num))
}

print()
