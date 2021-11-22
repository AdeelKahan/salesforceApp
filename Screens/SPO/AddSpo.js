import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

const AddSpo = () => {
  const [pno, setpno] = useState("");
  const [showmessage, setshowmessage] = useState("");

  const HandleText = () => {
    if (pno == "1234") {
      setshowmessage("Naveed Azhar DGM IT");
    } else {
      setshowmessage(
        "No account found for this PNO.Please request SPO to signup on this application"
      );
    }
  };

  return (
    <View>
      <Text
        style={{
          color: "#006e51",
          fontSize: 35,
          textAlign: "center",
          marginTop: 40,
          fontWeight: "bold",
        }}
      >
        Add New SPO
      </Text>

      <View style={{ width: 300, alignSelf: "center", marginTop: 110 }}>
        <Text style={{ color: "black", fontSize: 19 }}>Please Enter Pno</Text>
        <TextInput
          theme={{
            colors: { primary: "#006e51", underlineColor: "#006e51" },
          }}
          keyboardType="numeric"
          mode="outlined"
          value={pno}
          onChangeText={(text) => setpno(text)}
        />
        <TouchableOpacity>
          <Button
            mode="contained"
            color="#006e51"
            style={{ marginTop: 20 }}
            onPress={HandleText}
          >
            Search
          </Button>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button mode="contained" color="#006e51" style={{ marginTop: 25 }}>
            Add to my team
          </Button>
        </TouchableOpacity>
        <Text
          style={{
            color: "red",
            fontSize: 17,
            marginTop: 24,
            textAlign: "center",
          }}
        >
          {showmessage}
        </Text>
      </View>
    </View>
  );
};

export default AddSpo;
