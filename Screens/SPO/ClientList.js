import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// React Native Paper
import { List, Button, Avatar, Divider, FAB } from "react-native-paper";
import Route from "../../constants/NavigationStrings";

const ClientList = ({ navigation }) => {
  return (
    <View>
      <View style={{ marginTop: 70, padding: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            alignSelf: "center",
            color: "#006e51",
          }}
        >
          List Of Clients
        </Text>
        <TouchableOpacity
          style={{ width: 150, alignSelf: "center", marginTop: 10 }}
        >
          <Button
            mode="contained"
            color="#006e51"
            style={{ width: 140, alignSelf: "center" }}
            onPress={() => {
              navigation.navigate(Route.MeetingAssignments, {
                meetings: "ABC",
              });
            }}
          >
            Add Client
          </Button>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {Array(5)
          .fill()
          .map((item, id) => {
            return (
              <View key={id}>
                <Divider />
                <List.Item
                  title="Bukhari travel"
                  description="Mobile#: 0342-5654789, Address: B-123 Gulshan-e-Iqbal, Karachi "
                  left={() => (
                    <Avatar.Text
                      size={45}
                      label="Bukhari Travel"
                      backgroundColor="#006e51"
                    />
                  )}
                />
              </View>
            );
          })}
      </ScrollView>
      <FAB
        theme={{
          colors: {
            accent: "#006e51",
          },
        }}
        icon="plus"
        color="#fff"
        style={{
          position: "absolute",
          margin: 10,
          right: 0,
          bottom: 0,
          marginVertical: -50,
        }}
      />
    </View>
  );
};

export default ClientList;
