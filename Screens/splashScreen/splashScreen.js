import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import NavigationStrings from "../../constants/NavigationStrings";
import Pialogo from "../../assets/Pialogo.png";

const splashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NavigationStrings.DMDashboard);
    }, 2000);
  }, []);
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Image
        source={Pialogo}
        style={{
          width: 305,
          height: 159,
        }}
      />
    </View>
  );
};

export default splashScreen;
