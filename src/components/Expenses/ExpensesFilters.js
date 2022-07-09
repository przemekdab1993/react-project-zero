import React from "react";

import './ExpensesFilters.css'

import Card from "../UserInterface/Card";

import FiltersSwitch from "./FiltersSwitch";

const ExpensesFilters = (props) => {

    const getSelectYearFilter = (select) => {
        const selectData = {
            ...select,
        }

        props.onChangeFilter(selectData);
    }

    return (
        <Card className="filters-container">
            <FiltersSwitch selected={props.selected} onSelectYear={getSelectYearFilter}/>
        </Card>
    );
}

export default ExpensesFilters;