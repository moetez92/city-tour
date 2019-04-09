import React , {Component} from 'react' ;
import Tour from '../tour' ; 
import './tour-list.scss' ;
import {tourData} from '../../tourData' ; 
export default class Tourlist extends Component {

state = {
    tours:tourData 
}

  remove = id => {
    
     const  { tours } = this.state ; 
     const newListe = tours.filter(tour => tour.id != id) ;
     this.setState ({tours : newListe} ) ;
  
  
  } ;
    render() {

      const {tours} = this.state; 


        return (
            
            <div className="tourliste">
            
           {tours.map((tour)=>(<Tour key={tour.id} tour={tour} remove={this.remove}/>))}
            
            </div>
 
        )
    }
}