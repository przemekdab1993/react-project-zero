import React from "react";

import './ExpensesFilters.css'

import Card from "../UserInterface/Card";

import FiltersSwitch from "./FiltersSwitch";
import FiltersDiagram from "./FiltersDiagram";

const ExpensesFilters = (props) => {

    const getSelectYearFilter = (select) => {
        const selectData = {
            ...select,
        }

        props.onSetSelectYear(selectData);
    }

    return (
        <Card className="filters-container">
            <FiltersSwitch onSelectYear={getSelectYearFilter}/>
            <FiltersDiagram/>
        </Card>
    );
}

export default ExpensesFilters;