import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Provider,
  Menu,
  Button,
  Divider,
  TextInput,
  RadioButton,
} from "react-native-paper";

const EditMeetingAssign = () => {
  const Theme = {
    colors: { primary: "#006e51", underlineColor: "transparent" },
  };

  const data = [{ type: "Adill" }, { type: "kashif" }];
  const [checked, setChecked] = React.useState("first");
  const [visible, setVisible] = React.useState(false);
  const [value, setvalue] = React.useState("Amir");
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <Text
        style={{
          textAlign: "center",
          fontSize: 35,
          color: "#006e51",
          fontWeight: "bold",
          marginTop: 34,
        }}
      >
        Edit Meeting Assignment
      </Text>
      <View style={Styles.main}>
        <View>
          <Text style={Styles.hedText}>Bukhair Travel</Text>
        </View>
        <View style={Styles.text}>
          <Text style={Styles.text}>03002112304</Text>
          <Text style={Styles.text}>B-123 Block 13 Gulistan-e-Johar</Text>
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button mode="contained" onPress={openMenu} style={Styles.menubtn}>
              {value}
              <Text> {"                          "} ↘️ </Text>
            </Button>
          }
        >
          {data.map((item, id) => {
            return (
              <Menu.Item
                key={id}
                onPress={() => {
                  setvalue(item.type);
                }}
                title={item.type}
              />
            );
          })}

          <Divider />
        </Menu>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 20,
              marginLeft: 36,
            }}
          >
            Date
          </Text>
          <TextInput
            mode="outlined"
            placeholder="DD-MM-YYYY"
            style={Styles.inputField}
            theme={Theme}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 20,
              marginLeft: 38,
            }}
          >
            Time
          </Text>
          <TextInput
            mode="outlined"
            placeholder="HH-MM"
            style={Styles.inputFieldTime}
            theme={Theme}
          />
          <Text> </Text>
          <TextInput
            mode="outlined"
            placeholder="HH-MM"
            style={Styles.inputFieldTime}
            theme={Theme}
          />
        </View>
        <View>
          <TextInput
            multiline
            mode="outlined"
            placeholder="Detail"
            label=" Detail"
            style={Styles.inputFieldDetail}
            theme={Theme}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", marginLeft: 29, marginTop: 6 }}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 5,
                color: "#006e51",
              }}
            >
              Schedule
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 29, marginTop: 6 }}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 5,
                color: "#006e51",
              }}
            >
              Cancelled
            </Text>
          </View>
        </View>
        <Button
          mode="contained"
          style={Styles.continueBtn}
          // onPress={() =>
          //   navigation.navigate(NavigationStrings.HazardIncident)
          // }
        >
          Click here to update
        </Button>
      </View>
    </Provider>
  );
};

export default EditMeetingAssign;
const Styles = StyleSheet.create({
  menubtn: {
    backgroundColor: "#006e51",
    width: 280,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 9,
  },
  inputField: {
    width: 200,
    height: 50,
  },
  inputFieldTime: {
    width: 98,
    height: 50,
  },
  inputFieldDetail: {
    width: 280,
    height: 100,
    alignSelf: "center",
  },
  continueBtn: {
    backgroundColor: "#006e51",
    width: 250,

    alignSelf: "center",
    marginTop: 100,
  },
  main: {
    marginTop: 90,
  },
  hedText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 43,
  },
  text: {
    fontWeight: "bold",
    marginLeft: 22,
  },
});
