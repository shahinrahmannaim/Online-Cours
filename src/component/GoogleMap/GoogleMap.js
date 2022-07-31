import {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class MapContainer extends Component {
    render(){

        return(
            

                <Map  google={this.props.google} style={{width:"500px",height:"400px",borderRadius:"5px"  }} zoom={10} 
                      initialCenter={{lat:48.856613, lng:2.352222}} />
                
            

        );
    }
    
    
};
export default GoogleApiWrapper({apiKey:"AIzaSyC2euQQxsMvnpOZmBCar3swR-HzprRWyxI"})(MapContainer);