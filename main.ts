function calculateDiscountedPrice(productName: string, price: number): number {
    const discountPercentage = 10; // 10% discount
    const discount = price * (discountPercentage / 100);
    return price - discount;
}

// Example of Laptop
const productName = "Laptop"
const price = 1000
const discountedPrice = calculateDiscountedPrice(productName, price);
console.log(`The discounted price of ${productName} is$${discountedPrice}`);