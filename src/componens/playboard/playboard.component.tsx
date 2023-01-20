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


type PlayBoardProps = { cardClass: CARD_CLASSES, cardShuffle: any, handleClick: any, handleChange: any, index: number } & ButtonHTMLAttributes<HTMLButtonElement>

const PlayBoard: FC<PlayBoardProps> = () => {

    let [score, setScore] = useState(0); //for the scores
    const [clicks, setClicks] = useState([false]); //boolean array to handle card flip of each card
    const [saveIndex, setSaveIndex] = useState([0]); //saves index of each clicked card
    let [count, setCount] = useState(0); //count the clicks
    let [scoreList, setScoreList] = useState([0]); //list to keep the scores
    let [prevState, setPrevState] = useState(0); //last index that was clicked
    let [accumlator, setAccumlator] = useState(0); //accumlator 


    /*Handles the card flipping, updates score */
    const handleChange = (index: number) => {
        clicks[index] = true;

        if (index !== prevState) {
            count += 1
            saveIndex.push(index);
        }

        setSaveIndex(saveIndex);

        if (count === 2) {
            if (cardArray[saveIndex[accumlator]] === cardArray[saveIndex[accumlator + 1]]) {
                score += 5;
                accumlator += 2;
            } else {
                score -= 1;
                clicks[saveIndex[accumlator]] = false;
                clicks[saveIndex[accumlator + 1]] = false;
                saveIndex.splice(accumlator, 2);
            }
            count = 0;
        }
        setClicks(clicks);
        setScore(score)
        setAccumlator(accumlator);
        setCount(count);
        setPrevState(index);
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
                <HeadText>Score: {scoreList.toString()}</HeadText>

            </NavBar>
            <CardsContainer>
                <CardsRow>
                    <Card onClick={() => handleChange(0)} cardClass={clicks[0] ? cardArray[0] : CARD_CLASSES.back} index={0} ></Card>
                    <Card onClick={() => handleChange(1)} cardClass={clicks[1] ? cardArray[1] : CARD_CLASSES.back} index={1} ></Card>
                    <Card onClick={() => handleChange(2)} cardClass={clicks[2] ? cardArray[2] : CARD_CLASSES.back} index={2} ></Card>
                    <Card onClick={() => handleChange(3)} cardClass={clicks[3] ? cardArray[3] : CARD_CLASSES.back} index={3} ></Card>
                    <Card onClick={() => handleChange(4)} cardClass={clicks[4] ? cardArray[4] : CARD_CLASSES.back} index={4} ></Card>
                    <Card onClick={() => handleChange(5)} cardClass={clicks[5] ? cardArray[5] : CARD_CLASSES.back} index={5} ></Card>
                </CardsRow>

                <CardsRow>
                    <Card onClick={() => handleChange(6)} cardClass={clicks[6] ? cardArray[6] : CARD_CLASSES.back} index={6} ></Card>
                    <Card onClick={() => handleChange(7)} cardClass={clicks[7] ? cardArray[7] : CARD_CLASSES.back} index={7} ></Card>
                    <Card onClick={() => handleChange(8)} cardClass={clicks[8] ? cardArray[8] : CARD_CLASSES.back} index={8} ></Card>
                    <Card onClick={() => handleChange(9)} cardClass={clicks[9] ? cardArray[9] : CARD_CLASSES.back} index={9} ></Card>
                    <Card onClick={() => handleChange(10)} cardClass={clicks[10] ? cardArray[10] : CARD_CLASSES.back} index={10} ></Card>
                    <Card onClick={() => handleChange(11)} cardClass={clicks[11] ? cardArray[11] : CARD_CLASSES.back} index={11} ></Card>
                </CardsRow>
                <CardsRow>
                    <Card onClick={() => handleChange(12)} cardClass={clicks[12] ? cardArray[12] : CARD_CLASSES.back} index={12} ></Card>
                    <Card onClick={() => handleChange(13)} cardClass={clicks[13] ? cardArray[13] : CARD_CLASSES.back} index={13} ></Card>
                    <Card onClick={() => handleChange(14)} cardClass={clicks[14] ? cardArray[14] : CARD_CLASSES.back} index={14} ></Card>
                    <Card onClick={() => handleChange(15)} cardClass={clicks[15] ? cardArray[15] : CARD_CLASSES.back} index={15} ></Card>
                    <Card onClick={() => handleChange(16)} cardClass={clicks[16] ? cardArray[16] : CARD_CLASSES.back} index={16} ></Card>
                    <Card onClick={() => handleChange(17)} cardClass={clicks[17] ? cardArray[17] : CARD_CLASSES.back} index={17} ></Card>
                </CardsRow>
                <CardsRow>
                    <Card onClick={() => handleChange(18)} cardClass={clicks[18] ? cardArray[18] : CARD_CLASSES.back} index={18} ></Card>
                    <Card onClick={() => handleChange(19)} cardClass={clicks[19] ? cardArray[19] : CARD_CLASSES.back} index={19} ></Card>
                    <Card onClick={() => handleChange(20)} cardClass={clicks[20] ? cardArray[20] : CARD_CLASSES.back} index={20} ></Card>
                    <Card onClick={() => handleChange(21)} cardClass={clicks[21] ? cardArray[21] : CARD_CLASSES.back} index={21} ></Card>
                    <Card onClick={() => handleChange(22)} cardClass={clicks[22] ? cardArray[22] : CARD_CLASSES.back} index={22} ></Card>
                    <Card onClick={() => handleChange(23)} cardClass={clicks[23] ? cardArray[23] : CARD_CLASSES.back} index={23} ></Card>
                </CardsRow>
            </CardsContainer >
        </Board>
    )
}

export default PlayBoard;
