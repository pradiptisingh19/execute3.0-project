export default class dom{
    constructor(){

    }
    addToPage(child,parent) {
        const container=document.querySelector("#"+parent)
        container.appendChild(child)
    }
    addName(card,name){
        const div=document.createElement("div")
        div.classList.toggle("card-name")
        div.innerHTML=name
        card.appendChild(div)
        return div
    }
    addImg(obj,url){
        const img=document.createElement("img")
        img.classList.toggle("card-img")
        img.src=url
        obj.appendChild(img)
    }
    //price and intraday should be dipslayed in the same div
    addPrice(card,price,intraday_change){
        const div=document.createElement("div")
        price=price.substr(1);
        const pricenumber=Number(price);
        const num = parseFloat(price);
        const numInSciNot = {};
        [numInSciNot.coefficient, numInSciNot.exponent] =
        num.toExponential().split('e').map(item => Number(item));
        
        div.innerHTML="Price: $" + price
        card.appendChild(div)
        
        return div
    
    }
    addIntraday(card,intraday_change){
        const div=document.createElement("div")
        intraday_change=intraday_change.substring(0,intraday_change.length-8);
        div.innerHTML="Market Cap:"+intraday_change + "M"
        card.appendChild(div)
        return div
    }
    createCard(icon,name,price,intraday_change,where){
        const card=document.createElement("div")
        card.classList.toggle("card")
        this.addImg(card,icon)
        this.addName(card,name)
        this.addPrice(card,price,intraday_change)
        this.addIntraday(card,intraday_change)
        this.addToPage(card,where)
    }
}