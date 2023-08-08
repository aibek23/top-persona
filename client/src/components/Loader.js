import React from 'react'
import Loading from "../img/loading.gif"
export const Loader = () => (
    <div className="row align-items-center justify-content-center" style={{ height: "78vh" }}>
      <img src={Loading} style={{ width: "150px", height: "150px" }} alt="loading" />
    </div>
)