const scores = [1, 3, 0, 4, 5, 100, 6, 7, 8, 9];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue;
    }
    console.log('loops in scores', scores[i]);

    if (scores[i] === 100) {
        console.log('Highest score');
        break;
    }

}

