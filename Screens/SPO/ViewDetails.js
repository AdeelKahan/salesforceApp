import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

const ViewDetails = () => {
  const Theme = {
    colors: { primary: "#006e51", underlineColor: "transparent" },
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 35,
          color: "#006e51",
          marginTop: 34,
          fontWeight: "bold",
        }}
      >
        Details
      </Text>
      <View style={Styles.mainView}>
        <View>
          <Text style={Styles.hedText}>Bukhair Travel</Text>
        </View>
        <View style={Styles.text}>
          <Text style={Styles.text}>03002112304</Text>
          <Text style={Styles.text}>B-123 Block 13 Gulistan-e-Johar</Text>
          <Text style={Styles.text}>21-Dec-2020 12.20</Text>
        </View>
        <View>
          <Text style={Styles.text}>Details send by Dm</Text>
          <Text style={Styles.text}>Please complete assign task</Text>
        </View>
        <View>
          <Text style={Styles.text}>SPO Comments</Text>
          <TextInput
            mode="outlined"
            placeholder="Detail"
            style={Styles.inputField}
            theme={Theme}
            numberOfLines={10}
            multiline
          />
        </View>
        <View>
          <Text style={Styles.text}>Status</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Button
              mode="contained"
              style={Styles.continueBtn}
              onPress={() => alert("Updated.......")}
            >
              Click here to Update
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ViewDetails;
const Styles = StyleSheet.create({
  continueBtn: {
    backgroundColor: "#006e51",
    width: 300,
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 100,
  },
  mainView: {
    alignSelf: "center",
    padding: 100,
  },
  hedText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  text: {
    fontWeight: "bold",
    color: "black",
  },
  inputField: {
    width: 300,
    height: 100,
  },
});
