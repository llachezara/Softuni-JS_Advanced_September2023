function createAssemblyLine() {
    let hasClima = (object) => {
        object.temp = 21;
        object.tempSettings = 21;
        object.adjustTemp = () => {
            if (object.temp < object.tempSettings) {
                object.temp++;
            } else if (object.temp > object.tempSettings) {
                object.temp--;
            }
        }
    }

    let hasAudio = (object) => {
        object.currentTrack = null;
        object.nowPlaying = () => {
            console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
        }
    }

    let hasParktronic = (object) => {
        object.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (0.1 <= distance && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (0.25 <= distance && distance < 0.5) {
                console.log("Beep!");
            }else{
                console.log('');
            }
        }

    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    }
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
console.log(myCar);


