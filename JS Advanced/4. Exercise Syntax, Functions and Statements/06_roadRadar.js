function speedingStatus(speed, area) {
    let speedLimit;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;

        case 'interstate':
            speedLimit = 90;
            break;

        case 'city':
            speedLimit = 50;
            break;

        case 'residential':
            speedLimit = 20;
            break;
    }

    let notSpeeding = true;
    let status = '';
    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        notSpeeding = false;

        if (speed - speedLimit <= 20) {
            status = 'speeding';
        } else if (speed - speedLimit <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
    }


    if (!notSpeeding) {
        let speedDifference = speed - speedLimit;
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
speedingStatus(120, 'interstate')