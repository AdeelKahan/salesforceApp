import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import Route from "../../constants/NavigationStrings";

const DMDashboard = ({ navigation }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          marginTop: 65,
          color: "#006e51",
          fontWeight: "bold",
        }}
      >
        Sales Force 
      </Text>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Button
          style={{ marginTop: 20 }}
          mode="contained"
          color="#006e51"
          onPress={() => navigation.navigate(Route.SPOSchedule)}
        >
          View My Team
        </Button>
        <Button
          style={{ marginTop: 20 }}
          mode="contained"
          color="#006e51"
          onPress={() => navigation.navigate(Route.SPOMeetings)}
        >
          View Schedule Meeting
        </Button>
        <Button
          style={{ marginTop: 20 }}
          mode="contained"
          color="#006e51"
          onPress={() => navigation.navigate(Route.ClientList)}
        >
          View Client
        </Button>
      </View>
    </View>
  );
};

export default DMDashboard;
