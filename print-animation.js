let arr = "Enter your login code."
let quiz = "What is your name?"
async function EXE(ar) {
    let exe = document.createTextNode("EIXIE: ")
    document.body.appendChild(exe)
    for (let i = 0; i < ar.length; i++) {
        await sleep(65);
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
    form.setAttribute("method", "reaction()");
    var input = document.createElement("input");
    input.setAttribute("id", "inin");
    input.setAttribute("type", "text");
    input.setAttribute("name", "code");
    input.setAttribute("autofocus", "on");
    input.setAttribute("autosuggestion", "off");
    
    form.appendChild(input)
    document.body.appendChild(form)
}

async function code() {
    await EXE(arr)
    await POST()  
}

async function nocode() {
    await EXE(quiz)
    await POST()  
}

