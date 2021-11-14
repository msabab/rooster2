import React from 'react';
import { createContext, useContext } from 'react';
import { fetchComments, fetchPosts, fetchUsers } from './api';
import { appReducer, initialState } from './reducer';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [state, dispatch] = React.useReducer(appReducer, initialState);
    const contextValue = React.useMemo(() => {
        return { state, dispatch };
    }, [state]);


    React.useEffect(() => {
        // if (JSON.parse(localStorage.getItem("state"))) {
        //     dispatch({
        //         type: "initial_from_localstorage",
        //         value: JSON.parse(localStorage.getItem("state")),
        //     });
        // }
        const fetchData = async () => {
            const users = await fetchUsers();
            const posts = await fetchPosts();
            const comments = await fetchComments();
            return { users, posts, comments };
        }
        fetchData().then(data => {
            dispatch({ type: "init", value: data });
        });
    }, []);


    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}