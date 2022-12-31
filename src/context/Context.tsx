import React, { createContext } from "react";
import TableItem from "../components/TableItem";
import { items } from "../data/items";
import { ItemType } from "../types/Item"
import { reducerAction } from "../types/ReducerActionTypes";

type childrenType = {
    children: React.ReactNode
}

export const ListActions = createContext(items);

export const ListActionsProvider: React.FC<childrenType>= ({children}) => {
    return(
        <ListActions.Provider value={items}>
            {children}
        </ListActions.Provider>
    );
}



