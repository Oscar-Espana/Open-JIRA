import { FC, ReactNode, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: [];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <div>
      <EntriesContext.Provider
        value={{
          ...state,
        }}
      >
        {children}
      </EntriesContext.Provider>
    </div>
  );
};