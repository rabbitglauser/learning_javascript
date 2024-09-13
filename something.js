function logInventory(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
        console.log("Current Inventory:", this.inventory);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}
    class BuyInventory {
        constructor(vendingMachine) {
            this.vendingMachine = vendingMachine;
        }

        @logInventory
        buy() {
            console.log(`${this.inventory.join(", ")} we are buying these products`);
        }
    }


    const vendingMachine = new VendingMachine(["Soda", "Chips", "Candy"]);


    const buyer = new BuyInventory(vendingMachine);

    buyer.buy();