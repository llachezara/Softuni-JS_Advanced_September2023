class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(arrayOfFootballPlayers) {
        for (const element of arrayOfFootballPlayers) {
            const [playerName, playerAge, playerValueInMillions] = element.split('/');

            let playerIsInList = false;
            for (const playerObject of this.invitedPlayers) {
                if (playerObject.name === playerName) {

                    if (playerObject.playerValue < playerValueInMillions) {
                        playerObject.playerValue = playerValueInMillions;

                    }

                    playerIsInList = true;
                }
            }

            if (!playerIsInList) {
                this.invitedPlayers.push({
                    name: playerName,
                    age: playerAge,
                    playerValue: playerValueInMillions
                })
            }
        }

        let allPlayerNames = [];
        for (const playerObject of this.invitedPlayers) {
            allPlayerNames.push(playerObject.name);
        }

        return `You successfully invite ${allPlayerNames.join(', ')}.`
    }

    signContract(string) {
        const [playerName, playerOffer] = string.split('/');

        let playerIsFound = false;

        for (const playerObject of this.invitedPlayers) {
            if (playerObject.name === playerName) {

                if (playerObject.playerValue > playerOffer) {
                    const priceDifference = playerObject.playerValue - playerOffer;

                    throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`)
                } else {
                    playerObject.playerValue = "Bought";
                }
                playerIsFound = true;
            }
        }

        if (!playerIsFound) {
            throw new Error(`${playerName} is not invited to the selection list!`)
        }

        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`
    }

    ageLimit(playerName, limitAge) {
        let playerIsFound = false;

        for (const playerObject of this.invitedPlayers) {
            if (playerObject.name === playerName) {
                playerIsFound = true;

                if (playerObject.age < limitAge) {
                    const ageDifference = limitAge - playerObject.age;

                    if (ageDifference < 5) {
                        return `${playerName} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
                    } else {
                        return `${playerName} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                    }
                } else {
                    return `${playerName} is above age limit!`
                }
            }

        }

        if (!playerIsFound) {
            throw new Error(`${playerName} is not invited to the selection list!`)
        }
    }

    transferWindowResult() {
        let result = "Players list:\n";

        const sortedArrayOfPlayers = this.invitedPlayers.sort((player1, player2) => player1.name.localeCompare(player2.name));

        sortedArrayOfPlayers.forEach(playerObject => {
            result += `Player ${playerObject.name}-${playerObject.playerValue}\n`;
        })

        return result.trim();
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());





