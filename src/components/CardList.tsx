import { Card } from "../app/types/types";

type Props = {
    cards: Card[];
    onSelect: (index: number) => void;
};

export default function CardList({ cards, onSelect }: Props) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
            {
                cards.map((card, i) => (
                    <li
                        key={i}
                        onClick={() => onSelect(i)}
                        className="cursor-pointer p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition"
                    >
                        <span className="text-xl mr-2" > {card.icon} </span>
                        < span className="text-gray-900 dark:text-gray-100 font-semibold" > {card.title} </span>
                    </li>
                ))
            }
        </ul>
    );
}
