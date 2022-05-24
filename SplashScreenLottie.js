import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicLottieExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./assets/106483-download.json')}
      />
    );
  }
}