import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, Menu, Divider, Provider, TextInput } from "react-native-paper";
import Route from "../../constants/NavigationStrings";

const MeetingAssginments = ({ route, navigation }) => {
  // console.log(route.params)
  const [visible, setVisible] = useState(false);
  const [visibleSPO, setVisibleSPO] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const openSPO = () => setVisibleSPO(true);
  const closeSPO = () => setVisibleSPO(false);

  const [text, setText] = useState("");
  const dateObj = new Date();
  const date = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth();
  const year = dateObj.getUTCFullYear();
  // const year = dateObj.getUTCFullYear()

  return (
    <Provider>
      <View style={{ marginTop: 70 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            color: "#006e51",
            fontWeight: "bold",
          }}
        >
          Meeting Assignments
        </Text>
      </View>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu} color="#006e51">
              List of Client{" "}
            </Button>
          }
        >
          <Menu.Item onPress={() => {}} title="Bukhari Travel" />
          <Menu.Item onPress={() => {}} title="Bukhari Travel" />
          <Menu.Item onPress={() => {}} title="Bukhari Travel" />
        </Menu>
      </View>
      <View
        style={{
          paddingTop: 20,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visibleSPO}
          onDismiss={closeSPO}
          anchor={
            <Button onPress={openSPO} color="#006e51">
              List of Your SPOs
            </Button>
          }
        >
          <Menu.Item onPress={() => {}} title="SPO-1" />
          <Menu.Item onPress={() => {}} title="SPO-2" />
          <Menu.Item onPress={() => {}} title="SPO-3" />
        </Menu>
      </View>
      <Text style={{ color: "#006e51", paddingLeft: 10, paddingTop: 50 }}>
        Write Task
      </Text>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        numberOfLines={8}
        underlineColor="#006e51"
        activeOutlineColor="#006e51"
        mode="outlined"
        multiline={true}
        style={{ width: 350, alignSelf: "center", marginTop: 10 }}
      />
      <Text style={{ paddingLeft: 6, fontSize: 20 }}>
        Date :{date}-{month}-{year}
      </Text>
      <Text style={{ paddingLeft: 6, fontSize: 20 }}>Time: 12:44</Text>

      <TouchableOpacity
        style={{ paddingLeft: 30, marginTop: 50, alignSelf: "center" }}
      >
        <Button
          mode="contained"
          color="#006e51"
          onPress={() => {
            navigation.navigate(Route.MeetingAssignments, {
              meetings: "ABC",
            });
          }}
        >
          Click To Assign
        </Button>
      </TouchableOpacity>
    </Provider>
  );
};

export default MeetingAssginments;
