import React from 'react'
import "./HeaderStyle.css"
import HomeIcon from '@material-ui/icons/Home';
import ReportIcon from '@material-ui/icons/Report';
import { Button } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, SelectOutlined, SisternodeOutlined } from '@ant-design/icons';

function Header() {
  return (
    <div>
      <div className="navAll">
        <Link to="/"
          style={{
            textDecoration: "none"
          }}>
          <div className="iconHome">
            <HomeOutlined

              className="conhom"

            />
            <div className="homeWrite">
              Home
          </div>
          </div>
        </Link>
        <Link style={{
          textDecoration: "none"
        }}>
          <div className="iconReport">
            <SisternodeOutlined

              className="conhom"


            />
            <div className="reportWrite">
              Report Case
          </div>
          </div>
        </Link>
        {/* <div className="userIfo">
          <div className="imgcon">

          </div>
          <div className="reportWrite">
            Anyamah
          </div>

        </div> */}


        <div>
          <Button

            className="buttonclass"

          >
            Sign Up
          </Button>


        </div>
      </div>

    </div >
  )
}

export default Header
