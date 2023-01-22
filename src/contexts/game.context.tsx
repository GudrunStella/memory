import { createContext, useState, Dispatch, SetStateAction, ReactNode, useEffect, ButtonHTMLAttributes } from "react";
import { StyledComponent } from "styled-components";
//import { CARD_CLASSES } from "../componens/card/card.component";
import { BackCard, YellowCard, RedCard, GreenCard, BlueCard, BlackCard, WhiteCard, PurpleCard, OrangeCard, PinkCard, LightGreenCard, BrownCard, LightBlueCard, FlipCard } from "../componens/card/card.styles";

export enum CARD_CLASSES {
    back = 'back',
    yellow = 'yellow',
    red = 'red',
    green = 'green',
    blue = 'blue',
    black = 'black',
    white = 'white',
    purple = 'purple',
    orange = 'orange',
    pink = 'pink',
    brown = 'brown',
    lightgreen = 'lightgreen',
    lightblue = 'lightblue',
    flip = 'flip'
}


const getCard = (cardClass = CARD_CLASSES.back): typeof BackCard =>
({
    [CARD_CLASSES.back]: BackCard,
    [CARD_CLASSES.yellow]: YellowCard,
    [CARD_CLASSES.red]: RedCard,
    [CARD_CLASSES.green]: GreenCard,
    [CARD_CLASSES.blue]: BlueCard,
    [CARD_CLASSES.black]: BlackCard,
    [CARD_CLASSES.white]: WhiteCard,
    [CARD_CLASSES.purple]: PurpleCard,
    [CARD_CLASSES.orange]: OrangeCard,
    [CARD_CLASSES.pink]: PinkCard,
    [CARD_CLASSES.brown]: BrownCard,
    [CARD_CLASSES.lightgreen]: LightGreenCard,
    [CARD_CLASSES.lightblue]: LightBlueCard,
    [CARD_CLASSES.flip]: FlipCard
}[cardClass]);

interface propTypes {
    CARD_CLASSES: any,
    getCard: any,
    cardClassArray: CARD_CLASSES[],
    count: number,
    setCount: Dispatch<SetStateAction<number>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    cardShuffle: any;
    handleChange: any;
    children?: ReactNode;
    cardClass?: CARD_CLASSES;
    clicks?: boolean[];
    setClicks: Dispatch<SetStateAction<Array<boolean>>>;
    prevState?: number,
    setPrevState: Dispatch<SetStateAction<number>>;
    accumlator: number;
    setAccumlator: Dispatch<SetStateAction<number>>;
    saveIndex: Array<number>;
    setSaveIndex: Dispatch<SetStateAction<Array<number>>>;
}

const defaultState = {
    CARD_CLASSES: [],
    getCard: BackCard,
    cardClassArray: [],
    count: 0,
    setCount: () => { },
    saveIndex: [],
    setSaveIndex: () => { },
    clicks: [],
    setClicks: () => { },
    score: 0,
    setScore: () => { },
    cardShuffle: () => { },
    setIndex: () => { },
    index: 0,
    handleChange: () => { },
    prevState: 0,
    setPrevState: () => { },
    accumlator: 0,
    setAccumlator: () => { },
}


export const GameContext = createContext<propTypes>(defaultState);

export const GameProvider = ({ children }: propTypes) => {
    let [prevState, setPrevState] = useState(0); //last index that was clicked
    let [accumlator, setAccumlator] = useState(0); //accumlator 
    let [count, setCount] = useState(0); //count the clicks
    let [score, setScore] = useState(0);
    let [index, setIndex] = useState(0);
    const [saveIndex, setSaveIndex] = useState([0]); //saves index of each clicked card
    let [clicks, setClicks] = useState([false]);
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
    let cardArray = new Array(24);

    /*Handles the card flipping, updates score */
    const handleChange = (index: number, clicks: Array<boolean>) => {
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

    const cardShuffle = () => {
        return (e: Event) => {
            e.preventDefault();
            window.location.reload();
        }
    }

    const value: propTypes = {
        CARD_CLASSES,
        getCard,
        accumlator,
        setAccumlator,
        prevState,
        setPrevState,
        score,
        setScore,
        cardShuffle,
        clicks,
        setClicks,
        index,
        setIndex,
        saveIndex,
        setSaveIndex,
        count,
        handleChange,
        setCount,
        cardClassArray,
    }

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}