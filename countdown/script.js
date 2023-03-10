const endtime = "march 11, 2023, 11:11 PM";
document.getElementById('endtime').innerText = endtime;
const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(endtime)
    const now = new Date()
    const diff =(end-now)/1000;
    if(diff < 0) return;
   
    inputs[0].value = (Math.floor(diff/3600/24))

    inputs[1].value = (Math.floor(diff/3600)%24)

    inputs[2].value = (Math.floor(diff/60)%60)

    inputs[3].value = (Math.floor(diff)%60)
}

clock()

setInterval(
    () => {
    clock()
    ,1000
    }
)