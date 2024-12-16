import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)" // This should match your route structure
          options={{
            drawerLabel: 'Home',
            title: 'Overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}