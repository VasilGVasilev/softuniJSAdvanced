class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }    
    loadingVegetables(vegetables){
        let typeArr = [];
        for (let line of vegetables){
            
            let [type, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let product = this.availableProducts.find((p) => p.type === type);
            // obj or undefined
            if (product === undefined){
                this.availableProducts.push({type, quantity, price});
                typeArr.push(type);
            } else {
                product.quantity += quantity;
                if (product.price < price){
                    product.price = price;
                }
            }
        }
        let str = '';
        typeArr.forEach(element => {
            str = str + element + ', '
        });
        str = str.slice(0, str.length - 2);
        return `Successfully added ` + str
    }
    buyingVegetables(selectedProducts){
        let totalPrice = 0;
        for (let line of selectedProducts){
            let [type, quantity] = line.split(' ');

            let product = this.availableProducts.find((p)=>p.type === type);
            if (product === undefined){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if(product.quantity < quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                let productPrice = product.price * quantity;
                product.quantity -= quantity;
                totalPrice += productPrice;
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity){
        quantity = Number(quantity);
        let product = this.availableProducts.find((p)=>p.type == type);
        if(product == undefined){
            throw new Error(`${type} is not available in the store.`)
        }
        if(product.quantity < quantity){
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            product.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision(){
        let resArr = ["Available vegetables:"];
        this.availableProducts.sort((a,b)=>a.price - b.price);
        this.availableProducts.forEach(element => {
            resArr.push(`${element.type}-${element.quantity}-$${element.price}`)
        });
        resArr.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return resArr.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));


console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.revision())
