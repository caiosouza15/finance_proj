import React, { createContext, ReactNode } from "react";
import TableItem from "../components/TableItem";
import { items } from "../data/items";
import { ItemType } from "../types/Item"
import { reducerAction } from "../types/ReducerActionTypes";

type initialState = {
    dataList: ItemType[];
}

const initialState = {
    dataList: items,
}

export const ListActions = createContext(initialState);

export const ListActionsProvider: React.FC<{children: ReactNode}>= ({children}) => {
    return(
        <ListActions.Provider value={items}>
            {children}
        </ListActions.Provider>
    );
}



