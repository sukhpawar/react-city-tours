import React from 'react'

import './card.css'
import tourData from './tourData.js'

class Card extends React.Component{
	constructor(){
		super()

		this.handleClickInfo=this.handleClickInfo.bind(this)
	}

state={
	showInfo:false
}
handleClickInfo(){
this.setState(()=> {
      const temp = false
	return {showInfo:!this.state.showInfo}})
}

	render()
	{
		console.log(this.props)

		 return (
		 	 <div className="card">
             <img src={this.props.tour.img} alt="some problem"/>
             
             <h3>{this.props.tour.city}</h3>
             <h5>{this.props.tour.name}</h5>
             <h5> info {" "}
                 <span>
                  <i className="fa fa-caret-square-down" onClick={this.handleClickInfo}/>
                 </span>

             </h5>
            { this.state.showInfo && <p>{this.props.tour.info}</p>}
             <span class="icon" onClick={()=>{this.props.removeTour(this.props.tour.id)}} >
             <i class="fa fa-window-close"  ></i>
             </span>


		 	</div>)
	}
}
export default Card
