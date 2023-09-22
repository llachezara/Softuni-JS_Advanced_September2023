function calculateTimeToUniversity(numberOfSteps, lengthOfFootPrintInMeters, speedInKlmsPerHour) {

    let walkedMeters = lengthOfFootPrintInMeters * numberOfSteps;
    let speedInMetersPerSeconds = speedInKlmsPerHour * 1000 / 3600;

    const addedTimeInSecsFromBreaksPer500Meters = Math.trunc(walkedMeters / 500) * 60;

    let totalTimeInSeconds = (walkedMeters / speedInMetersPerSeconds) + addedTimeInSecsFromBreaksPer500Meters;

    let hours = totalTimeInSeconds / 3600;
    let minutes = (totalTimeInSeconds ) / 60;
    let seconds = (totalTimeInSeconds ) % 60;

    hours = Math.trunc(hours);
    minutes = Math.trunc(minutes);
    seconds = Math.round(seconds);

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);

}
calculateTimeToUniversity(4000, 0.60, 5);