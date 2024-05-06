function calculateDiscountedPrice(productName, price) {
    var discountPercentage = 10; // 10% discount
    var discount = price * (discountPercentage / 100);
    return price - discount;
}
// Example of Laptop
var productName = "Laptop";
var price = 1000;
var discountedPrice = calculateDiscountedPrice(productName, price);
console.log("The discounted price of ".concat(productName, " is$").concat(discountedPrice));
