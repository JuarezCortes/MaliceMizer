import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import GrupoOverviewScreen from './screens/GrupoOverviewScreen';
import InformacionScree from './screens/InformacionScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <>


      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: { backgroundColor: 'black'},
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#F1E5D1'}
          }}
        >
          <Stack.Screen 
            name="Inicio" 
            component={CategoriesScreen}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={GrupoOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#C39898'}
            }} 
          />
          <Stack.Screen 
            name="Información" 
            component={InformacionScree} 
            
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
