import React from 'react'
import './tourList.css'
import {tourData} from './tourData.js'
import Card from './Card'

class TourList extends React.Component{
constructor(){
	super()
this.state={ tourList: tourData,
              showTour:true  };


}

removeTour=id=>{
	const{tourList}= this.state
	const sortedTours= tourList.filter(tour=> tour.id!==id);
	this.setState({tourList:sortedTours})
}


 
render(){
	const {tourList}= this.state

const temp =   tourList.map(tour => <Card key={tour.id} tour={tour} removeTour={this.removeTour}/>)


	
return(
	<div className="tourList">
	{temp}
	</div>
	)
	
}


}

export default TourList