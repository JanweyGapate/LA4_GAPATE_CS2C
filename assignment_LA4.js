class Queue {
    constructor() {
            this.queue = [];
                }
    enqueue(customer) {
            this.queue.push(customer);
                    return this.queue.length; // Return queue size
                        }
    dequeue(number) {
            if (number >= 1 && number <= this.queue.length) {
                        const removedCustomer = this.queue.splice(number - 1, 1)[0]; // Use splice for removal
                                    console.log(`Customer ${number} (${removedCustomer}) serviced.`);
                                                return removedCustomer;
                                                        } else {
                                                                    console.log("Invalid customer number.");
                                                                                return null;
                                                                                        }
                                                                                            }
    display() {
            if (this.queue.length === 0) {
                        console.log("Queue is empty.");
                                } else {
                                            console.log("Current Queue:");
                                                        this.queue.forEach((customer, index) => {
                                                                        console.log(`${index + 1}. ${customer}`);
                                                                                    });
                                                                                            }
                                                                                                }
                                                                                                }
// Initialize the queue
const customerQueue = new Queue();

// Add customers to the queue
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
customers.forEach(customer => {
    const queueNumber = customerQueue.enqueue(customer);
        console.log(`${customer} added to queue. Queue number: ${queueNumber}`);
        });
        customerQueue.display();
// Customer service simulation
while (customerQueue.queue.length > 0) {
    const serviceNumber = parseInt(prompt("Enter the queue number to be serviced:")); //Use prompt for user input
        if (isNaN(serviceNumber)) {
                console.log("Invalid input. Please enter a number.");
                    } else {
                            customerQueue.dequeue(serviceNumber);
                                    customerQueue.display();
                                        }
                                                                  }
