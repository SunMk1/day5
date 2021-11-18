console.log("lotto............")

const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click",(event)=>{
    console.log(event)
    const target = document.getElementById("resultDiv")
    const balls = makeLottoNum()

    target.innerHTML = ""

    for (const num of balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }
},false)

function makeLottoNum(){
    const numArr = []
        for (let i = 0; i < 6; i++) {
            const num = parseInt(Math.random()*45+1)
            console.log(num)
            numArr.indexOf(num)==-1? numArr.push(num):i--
    }
    return numArr
}