import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, FAB, List, Divider } from "react-native-paper";
import Route from "../../constants/NavigationStrings";

const SPOSchedule = ({ navigation }) => {
  return (
    <View style={{ marginTop: 70 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 35,
          color: "#006e51",
          fontWeight: "bold",
        }}
      >
        Schedule Meeting
      </Text>

      <View style={{ marginTop: 56, marginBottom: 56 }}>
        <Divider />
        {Array(4)
          .fill()
          .map((item, id) => {
            return (
              <List.Item
                key={id}
                titleStyle={{ color: "black" }}
                title="SPO 1"
                onPress={() => navigation.navigate(Route.SPODetails)}
                right={() => (
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textTransform: "capitalize",
                      justifyContent: "center",
                    }}
                  >
                    05
                  </Text>
                )}

              />
                // {/* // <Button onPress={() => navigation.navigate(Route.SPODetails)}> */}

//                   {/* <Pressable
//   onPress={() => navigation.navigate(Route.SPODetails)}
// >
//   <Text
//     style={{
//       color: "black",
//       fontSize: 20,
//       textTransform: "capitalize",
//       justifyContent: "center",
//     }}
//   >
//     05
//   </Text>
// </Pressable> */}
              //     {/* // 05 */}
              //   {/* // </Button> */}
              // {/* </List.Item> */}
            );
          })}

        <Divider />
      </View>

      <FAB
        style={styles.fab}
        theme={{
          colors: {
            accent: "#006e51",
          },
        }}
        icon="plus"
        color="#fff"
        onPress={() => navigation.navigate(Route.AddSpo)}
      />
    </View>
  );
};

export default SPOSchedule;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 10,
    right: 0,
    bottom: 0,
    marginVertical: -210,
  },
});
