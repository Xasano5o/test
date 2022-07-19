import React, { Component } from 'react'
import img from "../Assets/img.png"
import './one.css';

export default class One_prect extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >
        <div className='reactImgDiv'>
          <img src={this.props.amg} className='reactImg' />
        </div>
        <div className='end_menu'>        <h1 className='text_1' >Couldit find a size youe ned ?</h1>
          <p className='text_2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ab reiciendis tempora accusamus nobis, est exercitationem!</p>
          <button className='btn_1'>Clilc me </button></div>
      </div>
    )
  }
}
