import "react-native-gesture-handler";
import React, { useContext } from "react";
import { context } from "../store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// not authenticated
import WelcomeScreen from "./Screens/Welcome/Index";
import LoginScreen from "./Screens/Login/Index";
import SignUpScreen from "./Screens/SignUp/Index";
import RegisterScreen from "./Screens/Register/Index";
import ForgotPasswordScreen from "./Screens/ForgotPassword/Index";

// authenticated
import DashboardScreen from "./Screens/Dashboard/Index";
import ProfileScreen from "./Screens/Profile/Index";
import FasterResult from "./Screens/FasterResult/Index";
import Workouts from "./Screens/Workouts/Index";
import Guide from "./Screens/Guide/Index";
import Daily from "./Screens/Daily/Index";
import SideBarScreen from "./Screens/SideBarScreen/Index";
import Test from "./Screens/Test/Index";

const NotAuthenticatedStack = createStackNavigator();
function NotAuthenticated() {
    return (
        <NotAuthenticatedStack.Navigator
            initialRouteName="Welcome"
            headerMode="none"
        >
            <NotAuthenticatedStack.Screen
                name="WelcomeScreen"
                options={{ title: "Welcome" }}
                component={WelcomeScreen}
            />
            <NotAuthenticatedStack.Screen
                name="LoginScreen"
                options={{ title: "Login" }}
                component={LoginScreen}
            />
            <NotAuthenticatedStack.Screen
                name="SignUpScreen"
                options={{ title: "Sign Up" }}
                component={SignUpScreen}
            />
            <NotAuthenticatedStack.Screen
                name="RegisterScreen"
                options={{ title: "Register" }}
                component={RegisterScreen}
            />
            <NotAuthenticatedStack.Screen
                name="ForgotPasswordScreen"
                options={{ title: "Forgot Password" }}
                component={ForgotPasswordScreen}
            />
            <NotAuthenticatedStack.Screen
                name="ProfileScreen"
                options={{ title: "Profile" }}
                component={ProfileScreen}
            />
            <NotAuthenticatedStack.Screen
                name="FasterResult"
                options={{ title: "Faster Result" }}
                component={FasterResult}
            />
            <NotAuthenticatedStack.Screen
                name="Workouts"
                options={{ title: "Workouts" }}
                component={Workouts}
            />
            <NotAuthenticatedStack.Screen
                name="Guide"
                options={{ title: "Guide" }}
                component={Guide}
            />
            <NotAuthenticatedStack.Screen
                name="Daily"
                options={{ title: "Daily" }}
                component={Daily}
            />
            <NotAuthenticatedStack.Screen
                name="SideBarScreen"
                options={{ title: "SideBarScreen" }}
                component={SideBarScreen}
            />
            <NotAuthenticatedStack.Screen
                name="Test"
                options={{ title: "Test" }}
                component={Test}
            />
        </NotAuthenticatedStack.Navigator>
    );
}

const AuthenticatedStack = createStackNavigator();
function Authenticated() {
    return (
        <AuthenticatedStack.Navigator
            initialRouteName="Dashboard"
            headerMode="none"
        >
            <AuthenticatedStack.Screen
                name="DashboardScreen"
                options={{ title: "Dashboard" }}
                component={DashboardScreen}
            />
        </AuthenticatedStack.Navigator>
    );
}

const MainStack = createStackNavigator();
export default function App() {
    const [state, dispatch] = useContext(context);

    if (state.isLoading) {
        // return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="NotAuthenticated"
                headerMode="none"
            >
                <MainStack.Screen
                    name="NotAuthenticated"
                    options={{ title: "Not Authenticated" }}
                    component={NotAuthenticated}
                />
                <MainStack.Screen
                    name="Authenticated"
                    options={{ title: "Authenticated" }}
                    component={Authenticated}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
