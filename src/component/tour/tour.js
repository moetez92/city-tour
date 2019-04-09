import React , {Component} from 'react';
import './tour.scss' ; 

export default  class tour extends Component {
     state = {
         showinfo:false 
     }
     toogleinfo = ()=>{
         this.setState ({
             showinfo:!this.state.showinfo 
         })
     }
    render()
    {
  const {id,city,img,name,info} = this.props.tour ; 
  const {remove} = this.props; 
        return  (
   <div className="tour">
   <div className="image-container">
   <img src={img} alt="image of the city"></img>
   <span className="close-button" onClick={()=>remove(id)}>
   <i className="fa fa-window-close"/> 
   
   </span>
   </div>
   
   <div className="tour-info">
    <h3>{city}</h3>
    <h4>{name}</h4>
    <h5>info <span><i className="fas fa-caret-square-down" onClick={this.toogleinfo}/></span></h5>
    {this.state.showinfo && <p>{info}</p>}
   </div>
   </div>

        )
    }
}