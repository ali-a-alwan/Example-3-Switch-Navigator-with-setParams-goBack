import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

// Profile Screen Component
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

// Settings Screen Component
function SettingsScreen({ navigation }) {
  const route = useRoute(); // Use useRoute hook to access route params
  const { message } = route.params || {}; // Retrieve params from route

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Set Params"
        onPress={() => navigation.setParams({ message: 'Params set!' })}
      />
      <Text>Message from params: {message || 'No message'}</Text>
    </View>
  );
}

// Stack Navigator for Settings
const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

// Main Stack Navigator
const MainStack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        <MainStack.Screen name="Settings" component={SettingsStackScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
