import React, {useState} from "react";

import './FiltersSwitch.css';

const FiltersSwitch = (props) => {

    // coś jest nie tak ze stanami, ale to pewnie wyjdzie pozniej jak się to robi poprawnie
    //const [switchYear, setSwitchYear] = useState('all');

    const switchHandler = (event) => {

        const selectForm = {
            year : event.target.value,
        };

        props.onSelectYear(selectForm);
    }

    return (
        <div>
            <form onChange={switchHandler}>
                <label className="filter-label" htmlFor="switch">Filter by year: </label>
                <select defaultValue={props.selected} id="year" name="year">
                    <option value="all">all</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </form>
        </div>
    );
}

export default FiltersSwitch;