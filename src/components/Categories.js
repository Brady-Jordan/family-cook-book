import React from 'react'
import '../styles/components/categories.css'
import phImg from '../assets/placeholder-300.jpg'

const Categories = () => {

  return (
    <div className="container-fluid p-3 m-0 d-flex flex-column justify-content-center">
      <div className="row w-100 d-flex justify-content-between align-items-center pb-4">
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-between align-items-center">
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
        <div className="col-2">
          <img className="p-0 m-0 catImg" src={phImg} alt="" width="100%" height="auto"/>
        </div>
      </div>
    </div>
  )

}

export default Categories