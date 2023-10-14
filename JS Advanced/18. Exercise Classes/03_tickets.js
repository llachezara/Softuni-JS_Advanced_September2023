function printSortedTickets(arrayOfStrings, sortingCriterion) {
    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    const arrayWithTickets = [];
    for (const string of arrayOfStrings) {
        const description = string.split('|');
        const destinationName = description[0];
        const price = Number(description[1]);
        const status = description[2];

        const currTicket = new Ticket(destinationName, price, status);
        arrayWithTickets.push(currTicket);
    }

    let sorted = [];
    if (sortingCriterion === 'price') {
        sorted = arrayWithTickets.sort((a, b) => a[sortingCriterion] - (b[sortingCriterion]))
    }else{
        sorted = arrayWithTickets.sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion]))
    }
    return sorted;

}
console.log(printSortedTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))
