import React, {useState} from 'react'
import SportsComponent from "./SportsComponent"
import Groups from "./Groups"
import PlanningContainer from "./PlanningContainer"
import ExportContainer from "./ExportContainer"
import "../styles/Planning.css"

function Planning() {
    const [Lsports, setLSports] = useState(new Map([{name: "basketball", sessions: 1, min: 24, max: 30, offset: 3, color: "#0163F6"},
    {name: "football", sessions: 1, min: 24, max: 30, offset: 3, color: '#C871F6'},
    {name: "swimming", sessions: 3, min: 10, max: 12, offset: 3, color: '#F6D032'},
    {name: "handball", sessions: 1, min: 24, max: 30, offset: 3, color: '#E86A69'},
    {name: "volleyball", sessions: 1, min: 24, max: 30, offset: 3, color: '#7AFFD5'}].map((e, i) => [i, e])))
    const labels = [...Lsports.values()].map(sport => sport.name)

    return (
        <div id="planningOuterContainer">
            <div id="planningLeftContainer">
                <Groups Lsports={Lsports}/>
                <PlanningContainer />
                <ExportContainer />
            </div>
            <SportsComponent sports={Lsports} labels={labels} setLSports={setLSports}/>
        </div>
    )
}

export default Planning
