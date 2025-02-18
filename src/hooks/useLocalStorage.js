import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    //1. when initializing our state, see if our data exists in localStorage.
    //2. If data exists on localStorage, make that our initialState value.
    //3. If data does not exist on localStorage, make our state = initialState and save initialState to localStorage.
    //4. When setting data, save data to state AND save data to localstorage/

    const [storedState, setStoredState] = useState(()=> {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const setState = value => {
        setStoredState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return([storedState, setState]);
}

export default useLocalStorage;