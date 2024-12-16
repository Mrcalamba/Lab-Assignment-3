import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the icon library

const DashboardLayout = () => {
  const activeColor = '#FF5722'; // Orange color for active icons
  const inactiveColor = '#9E9E9E'; // Light gray color for inactive icons

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#212121', // Dark background color for the tab bar
          borderTopWidth: 2,
          borderTopColor: '#FF5722', // Highlight color for the top border of the tab bar
          height: 60, // Increased height for better visibility
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          color: '#FFFFFF', // White text for labels
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name={focused ? 'home' : 'home-outline'} 
              size={28} // Increased icon size
              color={focused ? activeColor : inactiveColor} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="Profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name={focused ? 'account' : 'account-outline'} 
              size={28} // Increased icon size
              color={focused ? activeColor : inactiveColor} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="Settings" 
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name={focused ? 'cog' : 'cog-outline'} 
              size={28} // Increased icon size
              color={focused ? activeColor : inactiveColor} 
            />
          ),
        }} 
      />
    </Tabs>
  );
};

export default DashboardLayout;
