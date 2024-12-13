class CustomerQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.table = new Array(capacity).fill(null); // Hash table (array)
        this.size = 0;
    }

    hashFunction(customerName) {
        // Simple hash function (improve for production use)
        let hash = 0;
        for (let i = 0; i < customerName.length; i++) {
            hash += customerName.charCodeAt(i);
        }
        return hash % this.capacity;
    }

    enqueue(customerName) {
        const index = this.hashFunction(customerName);
        if (this.table[index] === null) {
            this.table[index] = customerName;
            this.size++;
            return index + 1; // Queue number (index + 1)
        } else {
            console.log("Collision! Customer not added.");
            return -1; // Indicate failure
        }
    }

    dequeue(queueNumber) {
        if (queueNumber >= 1 && queueNumber <= this.size) {
            const index = queueNumber - 1;
            if (this.table[index]) {
                const removedCustomer = this.table[index];
                this.table[index] = null;
                this.size--;
                console.log(`Customer ${queueNumber} (${removedCustomer}) serviced.`);
                return removedCustomer;
            } else {
                console.log("Customer not found at that index.");
                return null;
            }
        } else {
            console.log("Invalid queue number.");
            return null;
        }
    }

    display() {
        console.log("Current Queue (Hash Table):");
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`${i + 1}. ${this.table[i]}`);
            }
        }
    }
}


// Initialize the queue with capacity for 5 customers
const customerQueue = new CustomerQueue(5);

// Add customers
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
customers.forEach(customer => {
    const queueNumber = customerQueue.enqueue(customer);
    if (queueNumber !== -1) {
        console.log(`${customer} added to queue. Queue number: ${queueNumber}`);
    }
});
customerQueue.display();

// Service customers (using prompt for user input)
while (customerQueue.size > 0) {
    const serviceNumber = parseInt(prompt("Enter the queue number to be serviced:"));
    if (isNaN(serviceNumber)) {
        console.log("Invalid input. Please enter a number.");
    } else {
        customerQueue.dequeue(serviceNumber);
        customerQueue.display();
    }
}
