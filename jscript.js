function getTextString() {
    return "text";
}
result = getTextString();
console.log(result);

function checkBingo(num) {
    if (num > 5) {
        return 'Bingo!';
    } else {
        return 'better Luck next time!';
    }
}
bingoResult = checkBingo(5);
console.log(bingoResult);

bingoResult = checkBingo(6);
console.log(bingoResult);

bingoResult = checkBingo(9);
console.log(bingoResult);
