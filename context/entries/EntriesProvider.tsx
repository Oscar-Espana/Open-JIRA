import { FC, ReactNode, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pending - Cupidatat et elit eiusmod ipsum ea exercitation elit voluptate esse ad.",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description: "In progress - Magna aute nisi est elit cillum velit do.",
      createdAt: Date.now() - 450000,
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description:
        "Finished - Tempor cupidatat est ad in laborum velit deserunt consequat commodo culpa fugiat non incididunt velit.",
      createdAt: Date.now() - 100000,
      status: "finished",
    },
  ],
};

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entries] - Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entries] - Entry-Updated", payload: entry });
  };

  return (
    <div>
      <EntriesContext.Provider
        value={{
          ...state,

          //Methods
          addNewEntry,
          updateEntry,
        }}
      >
        {children}
      </EntriesContext.Provider>
    </div>
  );
};
