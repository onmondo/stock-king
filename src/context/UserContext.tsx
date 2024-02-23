import React, { ReactNode, createContext } from "react";

type UserContext = {
    id: string;
}

const UserContext = createContext({} as UserContext);

type UserProviderProps = {
    children: ReactNode
};

export default function UserProvider({ children }: UserProviderProps) {
    return (
        <UserContext.Provider value={{ id: "cb968471-6c42-4e4f-aab6-2108488d55ae" }}>
            {children}
        </UserContext.Provider>
    )    

}