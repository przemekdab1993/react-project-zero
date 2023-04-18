import React from "react";

import useCounter from "../../hooks/use-counter";

import Card from "../UserInterface/Card";


const ForwardCounter = () => {
    const counter = useCounter(2);

    return (
        <Card>{counter}</Card>
    );
}

export default ForwardCounter;