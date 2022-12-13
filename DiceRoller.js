class DiceRoll {
    constructor () {
        this.d4Button = document.getElementById("d4Button");
        this.d4Placeholder = document.getElementById("placeholderD4");
        this.d4Button.addEventListener('click', ()=> {this.d4Placeholder.innerHTML = this.onDiceRoll(4)});

        this.d6Button = document.getElementById("d6Button");
        this.d6Placeholder = document.getElementById("placeholderD6");
        this.d6Button.addEventListener('click', ()=> {this.d6Placeholder.innerHTML = this.onDiceRoll(6)});

        this.d8Button = document.getElementById("d8Button");
        this.d8Placeholder = document.getElementById("placeholderD8");
        this.d8Button.addEventListener('click', ()=> {this.d8Placeholder.innerHTML = this.onDiceRoll(8)});

        this.d10Button = document.getElementById("d10Button");
        this.d10Placeholder = document.getElementById("placeholderD10");
        this.d10Button.addEventListener('click', ()=> {this.d10Placeholder.innerHTML = this.onDiceRoll(10)});

        this.d12Button = document.getElementById("d12Button");
        this.d12Placeholder = document.getElementById("placeholderD12");
        this.d12Button.addEventListener('click', ()=> {this.d12Placeholder.innerHTML = this.onDiceRoll(12)});

        this.d20Button = document.getElementById("d20Button");
        this.d20Placeholder = document.getElementById("placeholderD20");
        this.d20Button.addEventListener('click', ()=> {this.d20Placeholder.innerHTML = this.onDiceRoll(20)});

        this.d100Button = document.getElementById("d100Button");
        this.d100Placeholder = document.getElementById("placeholderD100");
        this.d100Button.addEventListener('click', ()=> {this.d100Placeholder.innerHTML = this.onDiceRoll(100)});

        this.onDiceRoll = this.onDiceRoll.bind(this);
    }

    onDiceRoll(dice) {
        console.log("DiceRoll");
        return 1 + Math.floor(Math.random() * dice);
    }
}
let diceroll = new DiceRoll();