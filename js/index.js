const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
var sum = 0;
var num = 0;
var random = 0;
var sum2 = 0;
var num2 = 0;
var n = 0;
const randomDice = () => {

    const random = Math.floor(Math.random() * 10);
    if (random >= 1 && random <= 6) {
        rollDice(random);
        n++;




        if (n % 2 == 1) {
            if (random == 1) {
                num++;

            }
            start(random);
            console.log(sum + " player1");
            $('#' + sum + "").append('<img src="asset/mouse1.png" class="mouse1">');
	    if(sum==100){
	    	alert("PLAYER 1 WINS");
	    }


        } else {
            if (random == 1) {
                num2++;
            }
            start2(random);
            console.log(sum2 + " player2");
            $('#' + sum2 + "").append('<img src="asset/mouse2.png" class="mouse2">');
	    if(sum2==100){
	    	alert("PLAYER 2 WINS");
	    }

        }




    } else {
        randomDice();
    }

}

const rollDice = random => {

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;

        }



        dice.style.animation = 'none';

    }, 500);

}

rollBtn.addEventListener('click', randomDice);

function start(random) {

    if (num > 0) {
        $(".mouse1").remove();
        sum = sum + random;



        switch (sum) {
            case 4:
                sum = 14;
                break;
            case 9:
                sum = 31;
                break;
            case 20:
                sum = 37;
                break;
            case 21:
                sum = 42;
                break;
            case 28:
                sum = 84;
                break;
            case 36:
                sum = 57;
                break;
            case 51:
                sum = 73;
                break;
            case 71:
                sum = 92;
                break;
            case 80:
                sum = 99;
                break;
            case 47:
                sum = 26;
                break;
            case 49:
                sum = 11;
                break;
            case 58:
                sum = 41;
                break;
            case 61:
                sum = 19;
                break;
            case 86:
                sum = 24;
                break;
            case 93:
                sum = 73;
                break;
            case 95:
                sum = 75;
                break;
            case 98:
                sum = 78;
                break;
	    

        }
	if(sum>100){
	    sum=sum-random;
	}

    }



}

function start2(random) {

    if (num2 > 0) {
        $(".mouse2").remove();
        sum2 = sum2 + random;



        switch (sum2) {
            case 4:
                sum2 = 14;
                break;
            case 9:
                sum2 = 31;
                break;
            case 20:
                sum2= 37;
                break;
            case 21:
                sum2 = 42;
                break;
            case 28:
                sum2 = 84;
                break;
            case 36:
                sum2 = 57;
                break;
            case 51:
                sum2 = 73;
                break;
            case 71:
                sum2 = 92;
                break;
            case 80:
                sum2 = 99;
                break;
            case 47:
                sum2 = 26;
                break;
            case 49:
                sum2 = 11;
                break;
            case 58:
                sum2 = 41;
                break;
            case 61:
                sum2 = 19;
                break;
            case 86:
                sum2 = 24;
                break;
            case 93:
                sum2 = 73;
                break;
            case 95:
                sum2 = 75;
                break;
            case 98:
                sum2 = 78;
                break;

        }
	
	if(sum2>100){
	    sum2=sum2-random;
	}

    }



}