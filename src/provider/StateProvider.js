import React,{createContext, useState} from 'react';

// importing json data 
import data from './data/player_profile_data__2_.json';


export const StateContext = createContext();

export const StateProvider = (props) => {
    const [players] = useState(data);
    
    return(
        <StateContext.Provider value={[players]}>
            {props.children}
        </StateContext.Provider>
    );
};