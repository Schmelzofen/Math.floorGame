let enemy = Math.floor((Math.random() * (10-1)+1))
let output = document.getElementById("output")
console.log(enemy)

let mathGame = () => {
    let x = prompt("Welche Zahl hab ich??")
    if(x == enemy){
        console.log("Du hast meine Zahl erraten, nicht schlecht!")
    } else{
        output.innerHTML = "Leider daneben, ich hatte die Zahl "+enemy
    }
}

