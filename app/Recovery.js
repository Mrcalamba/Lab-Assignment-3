import { useRouter } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Recovery = () => {
  const router = useRouter();

  // Animated values for fading and sliding
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity 0
  const slideAnim = useRef(new Animated.Value(50)).current; // Initial position from the bottom

  useEffect(() => {
    // Fade-in and Slide-up animation on component mount
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade to full opacity
        duration: 1000, // Duration for fade-in
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0, // Slide to original position
        duration: 1000, // Duration for slide-up
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Text variant="headlineMedium" style={styles.recoveryText}>Can't Log in?</Text>
      </Animated.View>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        <TextInput 
          label="Phone number, username, or email" 
          mode="outlined" 
          style={styles.input} 
          theme={{ colors: { primary: '#4CAF50' } }} 
        />
      </Animated.View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Button 
          mode="contained" 
          style={styles.button} 
          buttonColor="#4CAF50" 
          onPress={() => { console.log("Recovery") }}
        >
          Send Recovery Link
        </Button>
      </Animated.View>
      <Button 
        mode="text" 
        textColor="#4CAF50" 
        onPress={() => router.replace('/')}
      >
        Back to Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5', // Light grey background
  },
  header: {
    alignItems: 'center', // Center the text
    marginBottom: 20,
  },
  recoveryText: {
    fontWeight: 'bold', // Make the text bold
    fontSize: 28, // Larger header text
    color: '#4CAF50', // Green color for the header text
  },
  input: {
    marginBottom: 16,
    width: '90%', // Set width to 90% of the container
    alignSelf: 'center', // Center the input boxes
  },
  button: {
    marginBottom: 16,
    width: '90%', // Set width to 90% of the container
    alignSelf: 'center', // Center the button
    borderRadius: 10, // Rounded corners for button
    paddingVertical: 12, // Extra padding for the button
  },
});

export default Recovery;
