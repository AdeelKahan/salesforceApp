import React from "react";
import Route from "../constants/NavigationStrings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// RoutCalls
import {
  splashScreen,
  DMDashboard,
  SPODetails,
  AddSpo,
  SPOSchedule,
  SPOMeetings,
  MeetingAssignments,
  ClientList,
  ViewDetails,
  EditMeetingAssign,
} from "./RouteCalls";

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={Route.splashScreen}
        component={splashScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name={Route.DMDashboard}
        component={DMDashboard}
        options={{
          title: "DM Dashboard",
          headerLeft: () => {
            return <></>;
          },
        }}
      />
      <Stack.Screen
        name={Route.SPOMeetings}
        component={SPOMeetings}
        options={{ title: "SPO Meetings" }}
      />
      <Stack.Screen
        name={Route.SPODetails}
        component={SPODetails}
        options={{ title: "SPO Details" }}
      />
      <Stack.Screen
        name={Route.MeetingAssignments}
        component={MeetingAssignments}
        options={{ title: "Meetings Assign" }}
      />
      <Stack.Screen
        name={Route.AddSpo}
        component={AddSpo}
        options={{ title: "ADD SPO" }}
      />
      <Stack.Screen
        name={Route.ClientList}
        component={ClientList}
        options={{}}
      />
      <Stack.Screen
        name={Route.SPOSchedule}
        component={SPOSchedule}
        options={{}}
      />
      <Stack.Screen
        name={Route.ViewDetails}
        component={ViewDetails}
        options={{ title: "View Details" }}
      />

      <Stack.Screen
        name={Route.EditMeetingAssign}
        component={EditMeetingAssign}
        options={{ title: "Edit Meeting Assignment" }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
