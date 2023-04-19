import React from "react";

import useCounter from "../../hooks/use-counter";

import Card from "../UserInterface/Card";


const BackwardCounter = () => {

    const counter = useCounter(-1);

    return (
      <Card>{counter}</Card>
    );
}

export default BackwardCounter;