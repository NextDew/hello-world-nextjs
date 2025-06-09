"use client";
import { CardData } from "../app/types/types";

interface Props {
    card: CardData;
    onClose: () => void;
}

export default function CardModal({ card, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-xl w-full p-6 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                    onClick={onClose}
                >
                    x
                </button>

                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                    {card.icon} {card.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line text-justify">
                    {card.content}
                </p>

                {card.title === "Popularidad de Next.js" && (
                    <div className="relative w-64 h-64 mx-auto mt-8">
                        <div className="absolute inset-0 animate-spin-slow">
                            <div className="orbit absolute top-0 left-1/2 transform -translate-x-1/2">
                                <img src="/icons/netflix.png" alt="Netflix" className="w-8 h-8" />
                            </div>
                            <div className="orbit absolute right-0 top-1/2 transform -translate-y-1/2">
                                <img src="/icons/nike.png" alt="Nike" className="w-8 h-8" />
                            </div>
                            <div className="orbit absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                <img src="/icons/notion.png" alt="Notion" className="w-8 h-8" />
                            </div>
                            <div className="orbit absolute left-0 top-1/2 transform -translate-y-1/2">
                                <img src="/icons/tiktok.png" alt="TikTok" className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/icons/next.png" alt="Next.js" className="w-12 h-12 opacity-80" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
