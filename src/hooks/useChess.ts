import { useContext } from "react";
import { useStore } from "zustand";

import { ChessStoreContext } from "@/contexts/chessStoreContext";
import { type ChessStore } from "@/stores/chessStore";

export function useChessStore<T>(selector: (store: ChessStore) => T): T {
    const counterStoreContext = useContext(ChessStoreContext);

    if (!counterStoreContext)
        throw new Error(`useCounterStore must be use within ChessProvider`);

    return useStore(counterStoreContext, selector);
}

export const usePieces = () => useChessStore((state) => state.pieces);

export const usePiece = (pieceId: string) =>
    useChessStore((state) => state.pieces.get(pieceId));

export const useBoardSize = (): [boardWidth: number, boardHeight: number] => [
    useChessStore((state) => state.boardWidth),
    useChessStore((state) => state.boardHeight),
];