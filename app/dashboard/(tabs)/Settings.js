import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Button } from 'react-native-paper';

const Settings = () => {
  const router = useRouter();

  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => setIsDarkMode(prevState => !prevState);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#E3F2FD' }]}>
      <Text style={[styles.settingsText, { color: isDarkMode ? '#FFFFFF' : '#4CAF50' }]}>
        Settings
      </Text>
      
      {/* Dark mode toggle */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, { color: isDarkMode ? '#FFFFFF' : '#333333' }]}>
          Dark Mode
        </Text>
        <Switch 
          value={isDarkMode} 
          onValueChange={toggleDarkMode} 
          trackColor={{ false: '#E3F2FD', true: '#6200EE' }} 
          thumbColor={isDarkMode ? '#6200EE' : '#f4f3f4'} 
        />
      </View>
      
      {/* Logout button with distinct style */}
      <Button 
        mode="contained" 
        onPress={() => router.replace('/')} 
        style={[styles.logoutButton, { backgroundColor: isDarkMode ? '#D32F2F' : '#D32F2F' }]}
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  settingsText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleText: {
    fontSize: 18,
    marginRight: 10,
  },
  logoutButton: {
    marginTop: 20,
    width: '90%',
    borderRadius: 15,
    paddingVertical: 14,
    elevation: 6, // Elevated button for 3D effect
  },
});

export default Settings;
