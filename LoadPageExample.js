import React from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      ); }

    return (
      <View sstyle={style.container}>
           <Text style={style.paragraph}>
        fin de  la cargaa
      </Text>
        <Image source={require('./assets/favicon.png')} style={style.logo}/>
      </View>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require('./assets/favicon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }
}


const style = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 2,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
    },
    logo: {
      height: 128,
      width: 128,
    },
  });