const MAX_RANDOM_LIMIT = 8;
const RANDOM_VALUE_STEP = 4;
const ATTEMPTS = 3;
const PRIZE = 0;
const CURRENT_SUM = 100;
const PRIZE_COEF = 2;
let maxRandomValue = MAX_RANDOM_LIMIT;
let attempts = ATTEMPTS;
let prize = PRIZE;
let curent_sum = CURRENT_SUM;
if (window.confirm('Do you want to play a game?')) {
    let win_number = Math.floor(Math.random() * (maxRandomValue + 1));
    while (attempts > 0) {
        let user_input = Number(prompt(`
Chose a roulete pocket number from 0 to ${maxRandomValue}
Attempts left: ${attempts}
Total prize: ${prize}$
Possible prise of current attempt: ${curent_sum}$
`))
        if (user_input === win_number) {
            prize += curent_sum;
            if (window.confirm(`Congratulation, you won!   Your prize is: ${prize} $. Do you want to continue?`)) {
                maxRandomValue += RANDOM_VALUE_STEP;
                win_number = Math.floor(Math.random() * (maxRandomValue + 1));
                switch (attempts) {
                    case ATTEMPTS:
                        curent_sum = curent_sum * PRIZE_COEF
                        break;
                    case ATTEMPTS - 1:
                        curent_sum = curent_sum * PRIZE_COEF * PRIZE_COEF
                        break;
                    case 1:
                        curent_sum = curent_sum * PRIZE_COEF * PRIZE_COEF * PRIZE_COEF
                        break;
                    default:
                        break;
                }
                attempts = ATTEMPTS;
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize} $`)
                if (window.confirm('Do you want to play again')) {
                    prize = PRIZE;
                    curent_sum = CURRENT_SUM;
                    maxRandomValue = MAX_RANDOM_LIMIT;
                    attempts = ATTEMPTS;
                }
            }
        } else {
            attempts--;
            curent_sum = curent_sum / PRIZE_COEF;
            if (attempts === 0) {
                alert(`Thank you for your participation. Your prize is: ${prize} $`);
                if (window.confirm('Do you want to play again?')) {
                    attempts = ATTEMPTS;
                    maxRandomValue = MAX_RANDOM_LIMIT;
                    win_number = Math.floor(Math.random() * (maxRandomValue + 1));
                    prize = PRIZE;
                    curent_sum = CURRENT_SUM;
                }
            }
        }
    }

} else {
    alert('You did not become a billionaire, but can.')
}