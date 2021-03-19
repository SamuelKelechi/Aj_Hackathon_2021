import React from 'react'
import './Report.css'
import RobIcon from './Icons/Robbery.jpg';
import FightIcon from './Icons/Fighting.png';
import FireIcon from './Icons/fire.jpg';
import OtherIcon from './Icons/others.jpg'
import { Link } from 'react-router-dom'


function Report() {
  return (
    <div className="Aj_ReportContainer">
      <Link to="/ReportInput" style={{ textDecoration: "none" }}>
        <div className="icon_holder">

          <img src={RobIcon} style={{
            height: "50%",
            width: "50%",
          }} />

          <h2>Robbery</h2>
        </div>
      </Link>



      <Link to="/ReportInput" style={{ textDecoration: "none" }}>
        <div className="icon_holder">

          <img src={FightIcon} style={{
            height: "50%",
            width: "50%",
          }} />

          <h2>Fighting</h2>
        </div>
      </Link>




      <div className="icon_holder">

        <img src={FireIcon} style={{
          height: "50%",
          width: "50%",
        }} />

        <h2>Fire Outbreak</h2>
      </div>




      <div className="icon_holder">

        <img src={OtherIcon} style={{
          height: "50%",
          width: "50%",
        }} />

        <h2>Others</h2>
      </div>

    </div>

  )
}

export default Report
