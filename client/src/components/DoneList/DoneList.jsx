import React from "react";
import "./doneList.css"
import DoneProblem from "../DoneProblem/DoneProblem";

const DoneList = () => {
    return (
        <div className="doneList">
            <DoneProblem />
            <DoneProblem />
            <DoneProblem />
            <DoneProblem />
        </div>
    )
}

export default DoneList;