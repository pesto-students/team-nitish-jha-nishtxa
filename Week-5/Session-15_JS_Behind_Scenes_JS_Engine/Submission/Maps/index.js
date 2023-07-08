let views = new WeakMap();
let cart = new WeakSet();

const incrementProductViews = (productID) => {
    if(views.has(productID)){
        let count = views.get(productID)
        views.set(productID, count+1 )
        return count+1
    }else{
        views.set(productID, 1);
        return 1;
    }
}

const addToCart = (productID) => {
    if(cart.has(productID)){
        return "Product already in cart!"
    }else{
        cart.add(productID);
        return "Product added to cart!"
    }
}

let key = {id: 123}
console.log(incrementProductViews(key));
console.log(incrementProductViews(key));

console.log(addToCart(key));
console.log(addToCart(key));


