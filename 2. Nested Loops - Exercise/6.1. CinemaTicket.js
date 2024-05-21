function cinemaTicket(input) {
    let standardTicket = 0;
    let studentTicket = 0;
    let kidTicket = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Finish') {
        let movieName = command;
        let totalSeats = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let seatsTaken = 0;

        while (command1 !== 'End') {
            let ticketType = command1;

            if (ticketType === 'standard') {
                standardTicket++;
            } else if (ticketType === 'student') {
                studentTicket++;
            } else {
                kidTicket++;
            }

            seatsTaken++;

            if (seatsTaken === totalSeats) {
                break;
            }

            command1 = input[index];
            index++;
        }

        let percentFull = (seatsTaken / totalSeats) * 100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTickets = standardTicket + studentTicket + kidTicket;
    console.log(`Total tickets: ${totalTickets}`);

    let standardPercent = (standardTicket / totalTickets) * 100;
    let studentPercent = (studentTicket / totalTickets) * 100;
    let kidsPercent = (kidTicket / totalTickets) * 100;

    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);

}
// cinemaTicket(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);

cinemaTicket(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);