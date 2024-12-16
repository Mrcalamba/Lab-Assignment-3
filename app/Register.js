import { useRouter } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; // Import for password visibility icon

const Register = () => {
  const router = useRouter();
  
  // State to manage the visibility of the password
  const [showPassword, setShowPassword] = useState(false);

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

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Text variant="headlineLarge" style={styles.registerText}>Create an account</Text>
      </Animated.View>
      <Animated.View style={[{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <TextInput label="Name" mode="outlined" style={styles.input} theme={{ colors: { primary: '#4CAF50' } }} />
        <TextInput label="Email" mode="outlined" style={styles.input} theme={{ colors: { primary: '#4CAF50' } }} />
        <View style={styles.passwordContainer}>
          <TextInput 
            label="Password" 
            mode="outlined" 
            secureTextEntry={!showPassword} 
            style={styles.inputWithPadding} 
            theme={{ colors: { primary: '#4CAF50' } }} 
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons 
              name={showPassword ? "eye-off" : "eye"} 
              size={24} 
              color="#4CAF50" 
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Button 
          mode="contained" 
          style={styles.button} 
          buttonColor="#4CAF50" 
          onPress={() => { console.log("Register") }}
        >
          Sign Up
        </Button>
      </Animated.View>
      <Button 
        mode="text" 
        textColor="#4CAF50" 
        onPress={() => router.replace('/')}
      >
        Already have an account? Login
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
    borderRadius: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Shadow effect for the whole container
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  registerText: {
    fontWeight: '700',
    fontSize: 28, // Larger header text
    color: '#4CAF50', // Green color for the header text
  },
  input: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF', // White background for inputs
    borderRadius: 10, // Rounded corners for input fields
    paddingHorizontal: 12,
    fontSize: 16, // Adjusted font size
    color: '#333333', // Dark text for better readability
  },
  inputWithPadding: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF', // White background for inputs
    borderRadius: 10, // Rounded corners for input fields
    paddingHorizontal: 12,
    fontSize: 16, // Adjusted font size
    color: '#333333', // Dark text for better readability
    paddingRight: 40, // Add extra padding to make space for the icon
  },
  button: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10, // Rounded button corners
    paddingVertical: 12, // Extra padding for the button
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});

export default Register;
