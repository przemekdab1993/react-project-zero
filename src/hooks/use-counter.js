import React, {useEffect, useState} from "react";

const useCounter = (token = 1) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval( () => {
            setCounter(prevState => prevState + token);
        }, 1000);

        return () => {
            return clearInterval(interval);
        }
    }, [token]);

    return counter;
}

export default useCounter;