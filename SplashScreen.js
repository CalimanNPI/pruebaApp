import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import SplashScreenAnimated from "react-native-animated-splash-screen";

export default function ExampleScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  const setAppLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    setAppLoaded();
  }, []);

  return (
    <SplashScreenAnimated
      translucent={true}
      isLoaded={isLoaded}
      logoImage={require("./assets/IconoCoyi/Icon_1024x1024.png")}
      backgroundColor={"#262626"}
      logoHeight={50}
      logoWidth={50}
    >
      <Text >Hello world</Text>
      <Text >Hello world</Text>
      <Text >Hello world</Text>
    </SplashScreenAnimated>
  );
}
