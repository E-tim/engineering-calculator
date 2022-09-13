
let myCum = document.getElementById('myCum')
let myBtn = document.getElementById('myBtn')


let cement = 6.1
let sand = 683
let aggregate = 1237
myBtn.addEventListener('click', ()=> {
    if (myCum.value === '') {
        alert('The field can not be empty !')
    } else {
        let resCement = cement * myCum.value;
        let resSand = sand * myCum.value;
        let resAggregate = aggregate * myCum.value;
        let finalResult = `${Math.round(resCement)} ${resCement < 2 ? 'Bag' : 'Bags'} of Cement , ${resSand}KG of Sand , ${resAggregate}KG of aggregate`
        console.log(`${resCement} ${resCement < 2 ? 'Bag' : 'Bags'} of Cement, ${resSand}kg of Sand ${resAggregate}kg of aggregate`)
    
        // creating html element
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.setAttribute('class', 'resultDiv')
        let myH1 = document.createElement('h1')
        div.appendChild(myH1)
        myH1.innerHTML = `${myCum.value}cum of Concrete gives the following result`
        let par = document.createElement('p')
        div.appendChild(par)
        par.innerHTML = finalResult;
        
        myCum.value = '';
    }

})


