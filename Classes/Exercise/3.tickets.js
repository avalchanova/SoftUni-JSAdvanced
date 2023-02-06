function tickets(arr, sortingCriteria) {
    let res = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let line of arr) {
        let [destination, price, status] = line.split("|");
        let newTicket = new Ticket(destination, price, status);
        res.push(newTicket);
    }

    switch (sortingCriteria) {
        case "destination":
            res.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
                // return ((a.destination < b.destination) ? -1 : ((a.destination > b.destination) ? 1 : 0)); is the same as above
            }); // if case ^ return -1 else if case ---------------^ return 1, else if a=b return 0
            break;
        case "price":
            res.sort(); //малко е странно, че тук си сортира с числата без да съм ги подала 
            break;
        case "status":
            res.sort((a, b) => {
                return a.status.localeCompare(b.status);
                //return ((a.status < b.status) ? -1 : (a.status > b.status) ? 1 : 0); the same as above
            });
            break;
    }
    return res;
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');