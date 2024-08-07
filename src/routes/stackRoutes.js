import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../components/pages/Home";
import Detalhes from "../components/pages/Detalhes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Detalhes"
                component={Detalhes}
            />
        </Stack.Navigator>
    )
}