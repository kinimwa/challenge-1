function checkSpeed(speed) {
    if (typeof speed !== 'number' || isNaN(speed)) {
        console.log("Invalid input. Please enter a number.");
        return;
    }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            // Use backticks for string interpolation
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
checkSpeed(80);  
checkSpeed(130);

