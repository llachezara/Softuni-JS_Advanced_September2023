class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, gender) {
        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = gender;
            return `A new participant has been added - ${participantName}`;
        } else {
            return `${participantName} has already been added to the list`
        }
    }
    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        } else if (condition < 90) {
            let disciplinesCompleted = parseInt(condition / 30);
            return `${participantName} could only complete ${disciplinesCompleted} of the disciplines`
        } else {
            let participantGender = this.participants[participantName];

            this.listOfFinalists.push({
                participantName,
                participantGender
            });

            delete this.participants[participantName];

            return `Congratulations, ${participantName} finished the whole competition`
        }
    }

    rewarding(participantName) {
        let includesParticipant = false;
        for (const obj of this.listOfFinalists) {
            let name = obj.participantName;
            if (name === participantName) {
                includesParticipant = true;
                break;
            }
        }

        if (includesParticipant) {
            return `${participantName} was rewarded with a trophy for his performance`;
        } else {
            return `${participantName} is not in the current finalists list`
        }

    }


    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`;
        }

        if (criteria !== "all") {

            let firstPersonWithThisCriteriaName = "";
            for (const obj of this.listOfFinalists) {
                let gender = obj.participantGender;
                if (gender === criteria) {
                    firstPersonWithThisCriteriaName = obj.participantName;
                    break;
                }
            }

            return `${firstPersonWithThisCriteriaName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;

        } else {
            let result = `List of all ${this.competitionName} finalists:\n`;

            let sortedArr = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));

            for (const obj of sortedArr) {
                let name = obj.participantName;
                result += name + '\n';
            }

            return result.trim();
        }

    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));




