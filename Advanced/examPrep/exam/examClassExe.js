class footballTeam{
    constructor(clubName, country, invitedPlayers){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers){
        let listOfAddedPlayers = [];
        for (let line of footballPlayers){
            
            let [name, age, playerValue] = line.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            let player = this.invitedPlayers.find((p) => p.name === name);
            // undefined === not in list || obj === is in list
            if (player === undefined){
                listOfAddedPlayers.push(name);
                this.invitedPlayers.push({name, age, playerValue});
            } else {
                if (player.playerValue < playerValue){
                    player.playerValue = playerValue;
                }
            }
        }
        let msg = 'You successfully invite ';
        let listToStr = listOfAddedPlayers.join(', ');
        let dot = '.';
        return msg + listToStr + dot;
    }
    signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let player = this.invitedPlayers.find((p) => p.name === name);
        if (player === undefined){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (player.playerValue > playerOffer){
            let priceDifference = player.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        }
        player.playerValue = 'Bought';
        let BoughtPlayer = name;
        let BuyingPrice = playerOffer;
        return `Congratulations! You sign a contract with ${BoughtPlayer} for ${BuyingPrice} million dollars.`
    }
    ageLimit(name, age){
        let player = this.invitedPlayers.find((p) => p.name === name);
        if (player === undefined){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (player.age < age){
            let ageDifference = age - player.age;
            if(ageDifference < 5){
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else {
            return `${name} is above age limit!`
        }
    }
    transferWindowResult(){
        let transferWindowMsg = ["Players list:"];
        this.invitedPlayers.sort((a,b)=>a.name - b.name);
        this.invitedPlayers.forEach(element => {
            transferWindowMsg.push(`Player ${element.name}-${element.playerValue}`)
        });
        return transferWindowMsg.join('\n');
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());