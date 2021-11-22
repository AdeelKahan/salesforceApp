import React from "react";
import { Text, View } from "react-native";
import { Divider, List } from "react-native-paper";
import Route from "../../constants/NavigationStrings";

const SPODetails = ({ navigation }) => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 35,
          color: "#006e51",
          fontWeight: "bold",
          marginTop: 35,
          marginBottom: 35,
        }}
      >
        SPO Details
      </Text>
      <View>
        <Divider />
        <List.Item
          title="Bukhari Travel"
          description="01-Dec-2021 10:50"
          description={`${"01-Dec-2021 10:50"}\n${"Scheduled"}`}
          right={() => (
            <Text
              style={{
                fontSize: 12,
                textTransform: "capitalize",
                alignSelf: "center",
              }}
              onPress={() => navigation.navigate(Route.ViewDetails)}
            >
              View Details
            </Text>
          )}
        />
        <Divider />
        <List.Item
          title="Bukhari Travel"
          description={`${"01-Dec-2021 10:50"}\n${"Canceled"}`}
          right={() => (
            <Text
              style={{
                fontSize: 12,
                textTransform: "capitalize",
                alignSelf: "center",
              }}
              onPress={() => navigation.navigate(Route.ViewDetails)}
            >
              View Details
            </Text>
          )}
        />
        <Divider />

        <List.Item
          title="Bukhari Travel"
          description={`${"01-Dec-2021 10:50"}\n${"Scheduled"}`}
          right={() => (
            <Text
              style={{
                fontSize: 12,
                textTransform: "capitalize",
                alignSelf: "center",
              }}
              onPress={() => navigation.navigate(Route.ViewDetails)}
            >
              View Details
            </Text>
          )}
        />
        <Divider />
      </View>
    </View>
  );
};

export default SPODetails;
