import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Auth/Login/index'
import SignupScreen from './src/screens/Auth/Signup/index'
import Meteor from 'react-native-meteor';
const SERVER_URL = 'ws://localhost:3000/websocket';

export type RootStackParamList = {
    LoginScreen: React.FunctionComponent;
    SignupScreen: React.FunctionComponent;
};

const Stack = createStackNavigator<RootStackParamList>();


export default function App() {
    useEffect(() => {
        Meteor.connect(SERVER_URL);
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
          </Stack.Navigator>
      </NavigationContainer>
    );
}
