import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// React Native Paper
import { List, Button, Avatar, Divider, FAB } from "react-native-paper";
import Route from "../../constants/NavigationStrings";

// Assets/
// import avatar_url from '../assets/avatar.png';

const SPOMeetings = ({ navigation }) => {
  return (
    <View>
      <List.Section>
        <View style={{ paddingBottom: 10, paddingTop: 20 }}>
          <List.Item
            title="CLIENT: BUKHARI TRAVEL"
            right={() => (
              <Avatar.Text
                size={70}
                label="Bukhari Travel"
                backgroundColor="#006e51"
              />
            )}
            description="Date of Meeting: 01-Dec-2020  SCHEDULED    "
          />
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 13 }}>
            {" "}
            Mr.Naveed Azhar{" "}
          </Text>
        </View>

        <TouchableOpacity
          style={{ width: 70, marginLeft: 13, borderRadius: 50 }}
        >
          <Button
            mode="contained"
            color="#006e51"
            onPress={() => console.log("Pressed")}
          >
            Edit
          </Button>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: 200, marginLeft: 13, marginTop: 10 }}>
          <Button
            mode="contained"
            color="#006e51"
            onPress={() => {
              navigation.navigate(Route.MeetingAssignments, {
                meetings: "ABC",
              });
            }}
          >
            Assign Meeting
          </Button>
        </TouchableOpacity>
      </List.Section>
      <ScrollView>
        {Array(6)
          .fill()
          .map((item, id) => {
            return (
              <View key={id}>
                <Divider />
                <List.Item
                  title="Bukhari travel"
                  description="Date of Meeting: 01-Dec-2020 Cancelled"
                  left={() => (
                    <Avatar.Text
                      size={45}
                      label="Bukhari Travel"
                      backgroundColor="#006e51"
                    />
                  )}
                  right={() => (
                    <Text
                      style={{
                        alignSelf: "center",
                        marginTop: 20,
                      }}
                      onPress={() =>
                        navigation.navigate(Route.EditMeetingAssign)
                      }
                    >
                      EDIT
                    </Text>
                  )}
                  key={id}
                />
              </View>
            );
          })}
      </ScrollView>
      <FAB
        style={Styles.fab}
        icon="plus"
        theme={{
          colors: {
            accent: "#006e51",
          },
        }}
        onPress={() => navigation.navigate(Route.MeetingAssignments)}
      />
    </View>
  );
};

export default SPOMeetings;
const Styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
    color: "#006e51",
  },
  fab: {
    position: "absolute",
    margin: 10,
    right: 0,
    bottom: 0,
    marginVertical: -50,
  },
});
