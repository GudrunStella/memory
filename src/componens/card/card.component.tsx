import { FC, ButtonHTMLAttributes } from 'react'
import { BackCard, YellowCard, RedCard, GreenCard, BlueCard, BlackCard, WhiteCard, PurpleCard, OrangeCard, PinkCard, LightGreenCard, BrownCard, LightBlueCard, FlipCard } from "./card.styles";



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


type CardProps = { cardClass?: CARD_CLASSES } & ButtonHTMLAttributes<HTMLButtonElement>;
const Card: FC<CardProps> = ({
    children,
    cardClass,
    ...otherProps }) => {
    let SelectedCard = getCard(cardClass);

    return (
        <SelectedCard  {...otherProps}>
            {children}
        </SelectedCard>
    )
}

export default Card;
