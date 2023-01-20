import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";
import { CARD_CLASSES } from "../componens/card/card.component";
import { BackCard } from "../componens/card/card.styles";

interface propTypes {
    isSelected: boolean;
    setIsSelected: Dispatch<SetStateAction<boolean>>;
    isDouble: boolean;
    setIsDouble: Dispatch<SetStateAction<boolean>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    handleClick: any;
    handleFlip: any;
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    cardShuffle: any;
    children?: ReactNode;
    isClicked: boolean;
    setIsClicked: Dispatch<SetStateAction<boolean>>;
    cardClass?: CARD_CLASSES;
}

const defaultState = {
    isSelected: false,
    setIsSelected: () => { },
    isDouble: false,
    setIsDouble: () => { },
    isClicked: false,
    setIsClicked: () => { },
    score: 0,
    setScore: () => { },
    text: ' ',
    setText: () => { },
    handleClick: () => { },
    cardShuffle: () => { },
    setIndex: () => { },
    handleFlip: () => { },
    index: 0,
}

export const GameContext = createContext<propTypes>(defaultState);

export const GameProvider = ({ children }: propTypes) => {
    let [isSelected, setIsSelected] = useState(false);
    let [isDouble, setIsDouble] = useState(false)
    let [score, setScore] = useState(0);
    let [text, setText] = useState('rollin');
    let [index, setIndex] = useState(0);
    let [isClicked, setIsClicked] = useState(false)
    const handleFlip = (index: number) => setText('hallo')
    /*
    for (var i = 0; i < cardArray.length; i++) {
        if (cardArray[i] === index) {
            string = cardArray[i];
            break;
        }
        }*/


    const handleClick = (value: boolean) => {
        return (e: Event) => {
            e.preventDefault();
            if (value === null) value = isClicked;
            setIsClicked(value => !value)
        }
    }


    const cardShuffle = () => {
        return (e: Event) => {
            e.preventDefault();
            window.location.reload();
            setText('hallo')
        }

    }

    const value: propTypes = {
        isSelected,
        setIsSelected,
        isDouble,
        setIsDouble,
        score,
        setScore,
        text,
        setText,
        handleClick,
        handleFlip,
        cardShuffle,
        index,
        setIndex,
        isClicked,
        setIsClicked,
    }

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}