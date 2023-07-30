let container = document.createElement('div')
container.className = 'container';

let row = document.createElement('div');
row.className = 'row';
container.append(row)

let button1 = document.createElement('button')
button1.setAttribute('type', 'button')
button1.setAttribute('id', 'butt1')
button1.className = 'btn-btn-primary'
button1.innerHTML = 'CAT FACTS'
row.append(button1)

let br = document.createElement('br')
row.append(br)


document.body.append(container)


document.getElementById("butt1").onclick = async function catFacts () {
    try {

    let catRes = (await (fetch('https://meowfacts.herokuapp.com/?count=3')))    //meow facts
    let catRes2 = await catRes.json()
    for (let i=0; i<catRes2.data.length; i++) {
        console.log('hai')
        let content = document.createElement('p')
        row.append(content)
        content.innerHTML = `${i+1}. ${catRes2.data[i]}`

    }
    } catch (error) {
        
    }
}






