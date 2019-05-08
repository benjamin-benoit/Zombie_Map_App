import { Platform, Text, View, StyleSheet } from 'react-native';
import React, {Component} from 'react';
import { Constants,MapView, Marker,Location,Permissions } from 'expo';

export default class Game extends Component {

    static navigationOptions = {
        title: 'Map',
    };

    constructor(props){
        super(props)
        this.state = {
            locationResult:{ latitude: 0, longitude: 0},
            errorMessage: null,
            hasLocationPermissions: false,
            region: null,
            location:null
        }
    }

      _OnDragEnd = result =>{
        this.setState({locationResult: result.coordinate})
        console.log(this.state.locationResult)
        console.log(result.coordinate)
        if (result.coordinate == this.state.locationResult){
          console.log('ok')
        }else{
          console.log('pas ok')
        }
      }

      componentDidMount() {
        this._getLocationAsync();
      }

      _handleMapRegionChange = region => {
        console.log(region);
        this.setState({ region });
      };

      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        } else {
          this.setState({ hasLocationPermissions: true });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({
          region: { 
            latitude: location.coords.latitude, 
            longitude: location.coords.longitude, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421 },
          locationResult:{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude},
          location
        });
      };    
      
      render() {
        return (
          <View style={{flex:1}}>  
            <Text style={{height:40,backgroundColor: '#6AC4ED'}}>Score: </Text>
            <MapView
              style={{flex:1}}
              region={this.state.region}
            >
            <MapView.Marker
              //image = '../../../assets/DarkSamus.png'
              coordinate={this.state.locationResult}
                title="My Marker"
                description="Some description"
                draggable
                onDragEnd={e => this._OnDragEnd(e.nativeEvent)}
            />
          {
            RESTAURANTS.map((m, i) =>
              <MapView.Marker
                coordinate={m.latLong}
                title={m.title}
                description={m.description}
                key={`marker-${i}`}
                pinColor= '#20794C'
              />
            )
          }
            </MapView>
          </View>
          );
      }
}

const RESTAURANTS = [
  {
    key: 'Cafe Sydney',
    title: 'Cafe Sydney',
    description: 'Customs House, 31 Alfred St, Sydney NSW 2000',
    latLong: {
      latitude: 48.78356518226211,
      longitude: 2.3951343385137105,
    },
  },
  {
    key: 'Four Frogs Creperie',
    title: 'Four Frogs Creperie',
    description: '1 Macquarie Pl, Sydney NSW 2000',
    latLong: {
      latitude: 48.77993070617117,
      longitude: 2.3956984115292626,
    },
  },
  {
    key: 'Tapavino',
    title: 'Tapavino',
    description: '6 Bulletin Pl, Sydney NSW 2000',
    latLong: {
      latitude: 48.780455052145385,
      longitude: 2.4131448702847615,
    },
  },
];