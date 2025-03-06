import TCard from '../types/card';
import '../styles/card/card.css';
import '../styles/places/places.css';
declare function Card({ card, onCardClick, onCardLike, onCardDelete }: {
    card: TCard;
    onCardClick: (card: TCard) => void;
    onCardLike: (card: TCard) => void;
    onCardDelete: (card: TCard) => void;
}): import("react/jsx-runtime").JSX.Element;
export default Card;
