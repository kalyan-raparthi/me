const a  = document.getElementById("riddle")
let arr = "Enter your password."

async function EXE(ar) {
    let exe = document.createTextNode("EXIXE: ")
    document.body.appendChild(exe)
    for (let i = 0; i < arr.length; i++) {
        await sleep(100);
        var txt = document.createTextNode(ar.charAt(i))
        document.body.appendChild(txt)
    }
    let i  = document.createElement("br")
    document.body.appendChild(i)
}

async function sleep(num) {
    return new Promise((resolve) => setTimeout(resolve, num))
}

async function POST() {
    var form = document.createElement("form")
    form.setAttribute("method", "POST");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "code");
    input.setAttribute("autofocus", "on")
    form.appendChild(input)
    document.body.appendChild(form)
}

async function main() {
    await EXE(arr)
    await POST()  
}


main()

