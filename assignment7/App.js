import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CartProvider } from './CartContext';
import Home from './Screens/Home';
import Checkout from './Screens/Checkout';
import ProductDisplay from './Screens/ProductDisplay';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CartProvider>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="ProductDisplay"
            component={ProductDisplay}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
