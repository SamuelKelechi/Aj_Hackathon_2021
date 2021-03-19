import React from 'react'
import './ReportInput.css'


function ReportInput() {
  return (
    <div className="Input_Container">
      <div className="Input_Wrapper">
        <div style={{ display: "flex", fontSize: "20px", fontWeight: "bold", height: "80px" }}>Make a Report</div>
        <input style={{
          width: "300px",
          height: "40px",
          marginBottom: "10px"
        }}
          placeholder="Upload an Image"

        />
        <input style={{
          width: "300px",
          height: "40px",
          marginBottom: "10px"
        }}
          placeholder="Title of Report"
        />
        <input
          style={{
            width: "300px",
            height: "40px",
            marginBottom: "10px"
          }}
          placeholder="Describe Your Report"
        />
        <input
          style={{
            width: "300px",
            height: "40px",
            marginBottom: "10px"
          }}
          placeholder="What is Your Location?"
        />
        <button style={{
          height: "40px",
          width: "100px",
          background: "black",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer"
        }}

        >Report Now</button>
      </div>

    </div>
  )
}

export default ReportInput
