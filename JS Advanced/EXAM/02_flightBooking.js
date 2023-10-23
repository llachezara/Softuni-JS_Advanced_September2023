class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }
    addFlight(flightNumber, destination, departureTime, price) {
        let flightExists = false;
        for (const currFlightObject of this.flights) {

            if (currFlightObject.flightNumber == flightNumber) {

                flightExists = true;
                return `Flight ${flightNumber} to ${destination} is already available.`
            }
        }

        if (!flightExists) {
            const newFlightObject = {

                flightNumber,
                destination,
                departureTime,
                price: Number(price),
                criteria: Number(price) <= 100 ? "cheap" : "expensive"

            }
            this.flights.push(newFlightObject);

            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
    }

    bookFlight(passengerName, flightNumber) {
        let flightExists = false;
        for (const currFlightObject of this.flights) {

            if (currFlightObject.flightNumber == flightNumber) {

                flightExists = true;

                const newBookingObject = {
                    passengerName,
                    flightNumber,
                    criteria: currFlightObject.criteria
                }

                this.bookings.push(newBookingObject);
                this.bookingsCount++;

                return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
            }
        }

        if (!flightExists) {

            return `Flight ${flightNumber} is not available for booking.`
        }
    }

    cancelBooking(passengerName, flightNumber) {
        let passengerExists = false;
        for (const currBookingObject of this.bookings) {

            if (currBookingObject.flightNumber == flightNumber && currBookingObject.passengerName == passengerName) {

                passengerExists = true;

                const indexOfCurrBookingObject = this.bookings.indexOf(currBookingObject);//!!!!
                this.bookings.splice(indexOfCurrBookingObject, 1);

                this.bookingsCount--;

                return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
            }
        }

        if (!passengerExists) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }
    }

    showBookings(criteria) {
        if (this.bookings.length == 0) {
            throw new Error(`No bookings have been made yet.`)
        }

        let criteriaTypes = {
            'all': () => {
                let result = `All bookings(${this.bookingsCount}):\n`;

                for (const currBookingObject of this.bookings) {
                    result += `${currBookingObject.passengerName} booked for flight ${currBookingObject.flightNumber}.\n`;
                }

                return result.trim();
            },
            'cheap': () => {

                if (this.bookings.find((bookingObject) => bookingObject.criteria == 'cheap')) {

                    let result = "Cheap bookings:\n";
                    for (const currBookingObject of this.bookings) {
                        if (currBookingObject.criteria == 'cheap') {
                            result += `${currBookingObject.passengerName} booked for flight ${currBookingObject.flightNumber}.\n`
                        }
                    }

                    return result.trim();

                } else {
                    return "No cheap bookings found.";
                }
            },

            'expensive': () => {
                if (this.bookings.find((bookingObject) => bookingObject.criteria == 'expensive')) {

                    let result = "Expensive bookings:\n";

                    for (const currBookingObject of this.bookings) {
                        if (currBookingObject.criteria == 'expensive') {

                            result += `${currBookingObject.passengerName} booked for flight ${currBookingObject.flightNumber}.\n`
                        }
                    }

                    return result.trim();

                } else {
                    return "No expensive bookings found.";
                }
            }
        }


        return criteriaTypes[criteria]();

    }

}
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));




