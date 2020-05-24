import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Auth/Login/index'
import SignupScreen from './src/screens/Auth/Signup/index'
import HomeScreen from './src/screens/Home/HomeScreen/index';
import ConfigurationScreen from "./src/screens/Home/Configuration";
import ChatScreen from "./src/screens/Home/Chat";
import PlayersScreen from "./src/screens/Home/Players";
//import Meteor from 'meteor-react-native';
import Meteor from 'react-native-meteor';
const SERVER_URL = 'ws://localhost:3000/websocket';
//const SERVER_URL = 'ws://35.222.16.63:27017/websocket';

export type RootStackParamList = {
    LoginScreen: React.FunctionComponent;
    SignupScreen: React.FunctionComponent;
    HomeScreen: { user: string};
    ConfigurationScreen: { user: string};
    PlayersScreen: React.FunctionComponent;
    ChatScreen: React.FunctionComponent;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    useEffect(() => {
        //Meteor.connect(SERVER_URL);
    }, []);
    return (
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}
          >
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />

              <Stack.Screen name="ConfigurationScreen" component={ConfigurationScreen} />
              <Stack.Screen name="PlayersScreen" component={PlayersScreen} />
              <Stack.Screen name="ChatScreen" component={ChatScreen} />

          </Stack.Navigator>
      </NavigationContainer>
    );
}
