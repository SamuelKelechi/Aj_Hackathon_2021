import React from 'react'
import './Report.css'
import RobIcon from './Icons/Robbery.jpg';
import FightIcon from './Icons/Fighting.png';
import FireIcon from './Icons/fire.jpg';
import OtherIcon from './Icons/others.jpg'


function Report() {
  return (
    <div className="Aj_ReportContainer">
      <div className="Aj_ReportContainerWrap">
        {/* <div className="ReportText_Holder">MAKE A REPORT</div> */}
        <br />
        <div className="reportCards_Holder">
          <div className="FirstReport_Cards">
            <div style={{
              height: "90px",
              width: "100px",
              fontWeight: "bolder"
              // color: "white"
            }}>
              <img src={RobIcon} alt="RobIcon" style={{
                width: "100%",
                height: "100%",
                // backgroundColor: "#646876",
              }} />
              Robbery
              </div>






          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
