import React from "react";

import styles from  './ExpensesFilters.module.css'

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
        <Card className={styles["filters-container"]}>
            <FiltersSwitch selected={props.selected} onSelectYear={getSelectYearFilter}/>
        </Card>
    );
}

export default ExpensesFilters;