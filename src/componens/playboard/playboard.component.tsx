import { ButtonHTMLAttributes, FC, useState } from 'react'
import Card, { CARD_CLASSES } from "../card/card.component";
import { CardsContainer, CardsRow, Board, NavBar, ResetButton, HeadText } from "./playboard.styles";


/* Array to initialize the cards */
let cardClassArray = [
    CARD_CLASSES.black,
    CARD_CLASSES.blue,
    CARD_CLASSES.green,
    CARD_CLASSES.orange,
    CARD_CLASSES.pink,
    CARD_CLASSES.purple,
    CARD_CLASSES.red,
    CARD_CLASSES.white,
    CARD_CLASSES.yellow,
    CARD_CLASSES.brown,
    CARD_CLASSES.lightgreen,
    CARD_CLASSES.lightblue,
    CARD_CLASSES.black,
    CARD_CLASSES.blue,
    CARD_CLASSES.green,
    CARD_CLASSES.orange,
    CARD_CLASSES.pink,
    CARD_CLASSES.purple,
    CARD_CLASSES.red,
    CARD_CLASSES.white,
    CARD_CLASSES.yellow,
    CARD_CLASSES.brown,
    CARD_CLASSES.lightgreen,
    CARD_CLASSES.lightblue
];


/*An empty array for the cardshuffle*/
let cardArray = new Array(24)
/*Initialize cardArray*/
for (var i = 0; i < cardArray.length; i++) {
    let random = Math.floor(Math.random() * cardClassArray.length)
    cardArray[i] = cardClassArray[random];
    cardClassArray.splice(random, 1);
}


type PlayBoardProps = { cardClass: CARD_CLASSES, cardShuffle: any, handleChange: any } & ButtonHTMLAttributes<HTMLButtonElement>

const PlayBoard: FC<PlayBoardProps> = () => {
    let [score, setScore] = useState(0); //for the scores
    const [clicks, setClicks] = useState([false]); //boolean array to handle card flip of each card
    const [saveIndex, setSaveIndex] = useState([0]); //saves index of each clicked card
    let [count, setCount] = useState(0); //count the clicks
    let [prevState, setPrevState] = useState(0); //last index that was clicked
    let [accumlator, setAccumlator] = useState(0); //accumlator 

    /*Handles the card flipping, updates score */
    const handleChange = (index: number) => {

        setPrevState(index);

        if (index !== prevState) {
            count += 1
            saveIndex.push(index);
        }
        if (count === 1) {
            if (cardArray[saveIndex[accumlator]] === cardArray[saveIndex[accumlator + 1]]) {
                score += 5;
            } else {
                score -= 1;
            }
        }

        if (count === 2) {
            if (cardArray[saveIndex[accumlator]] === cardArray[saveIndex[accumlator + 1]]) {
                accumlator += 2;
                setAccumlator(accumlator);
            } else {
                clicks[saveIndex[accumlator]] = false;
                clicks[saveIndex[accumlator + 1]] = false;
                saveIndex.splice(accumlator, 2);
            }
            count = 0;
        }

        clicks[index] = true;
        setClicks(clicks);
        setCount(count);
        setScore(score)
        setSaveIndex(saveIndex);

    }


    /* reloads the game and cards get shuffled */
    const cardShuffle = () => {
        window.location.reload();
    }


    return (
        <Board>
            <NavBar>
                <ResetButton onClick={cardShuffle}>New Game</ResetButton>
                <HeadText>Score: {score.toString()}</HeadText>

            </NavBar>
            <CardsContainer>
                <CardsRow>
                    <Card onClick={() => handleChange(0)} cardClass={clicks[0] ? cardArray[0] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(1)} cardClass={clicks[1] ? cardArray[1] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(2)} cardClass={clicks[2] ? cardArray[2] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(3)} cardClass={clicks[3] ? cardArray[3] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(4)} cardClass={clicks[4] ? cardArray[4] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(5)} cardClass={clicks[5] ? cardArray[5] : CARD_CLASSES.back} ></Card>
                </CardsRow>

                <CardsRow>
                    <Card onClick={() => handleChange(6)} cardClass={clicks[6] ? cardArray[6] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(7)} cardClass={clicks[7] ? cardArray[7] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(8)} cardClass={clicks[8] ? cardArray[8] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(9)} cardClass={clicks[9] ? cardArray[9] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(10)} cardClass={clicks[10] ? cardArray[10] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(11)} cardClass={clicks[11] ? cardArray[11] : CARD_CLASSES.back} ></Card>
                </CardsRow>
                <CardsRow>
                    <Card onClick={() => handleChange(12)} cardClass={clicks[12] ? cardArray[12] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(13)} cardClass={clicks[13] ? cardArray[13] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(14)} cardClass={clicks[14] ? cardArray[14] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(15)} cardClass={clicks[15] ? cardArray[15] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(16)} cardClass={clicks[16] ? cardArray[16] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(17)} cardClass={clicks[17] ? cardArray[17] : CARD_CLASSES.back} ></Card>
                </CardsRow>
                <CardsRow>
                    <Card onClick={() => handleChange(18)} cardClass={clicks[18] ? cardArray[18] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(19)} cardClass={clicks[19] ? cardArray[19] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(20)} cardClass={clicks[20] ? cardArray[20] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(21)} cardClass={clicks[21] ? cardArray[21] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(22)} cardClass={clicks[22] ? cardArray[22] : CARD_CLASSES.back} ></Card>
                    <Card onClick={() => handleChange(23)} cardClass={clicks[23] ? cardArray[23] : CARD_CLASSES.back} ></Card>
                </CardsRow>
            </CardsContainer >
        </Board>
    )
}

export default PlayBoard;
