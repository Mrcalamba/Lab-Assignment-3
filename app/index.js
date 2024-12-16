import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router'; // Import useRouter
import { Ionicons } from '@expo/vector-icons'; // Import icon for password visibility
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // Manage password visibility

  // Animated values for fading and sliding
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity 0
  const slideAnim = useRef(new Animated.Value(50)).current; // Initial position from the bottom
  const blinkAnim = useRef(new Animated.Value(1)).current; // Initial opacity for blink animation

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

    // Blinking effect for the Login text (looping fade in and out)
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 0, // Fade out
          duration: 500, // Duration for fade out
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 1, // Fade in
          duration: 500, // Duration for fade in
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim, slideAnim, blinkAnim]);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Animated.Text 
          variant="headlineMedium" 
          style={[styles.loginText, { opacity: blinkAnim }]} // Apply blinking effect here
        >
          Login
        </Animated.Text>
      </Animated.View>

      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        <TextInput 
          label="Phone number, username, or email" 
          mode="outlined" 
          style={styles.input} 
          theme={{ colors: { primary: '#4CAF50' } }}
        />
        
        <View style={styles.passwordContainer}>
          <TextInput 
            label="Password" 
            mode="outlined" 
            secureTextEntry={!showPassword} 
            style={[styles.input, { paddingRight: 40 }]} // Add padding for the icon inside the box
            theme={{ colors: { primary: '#4CAF50' } }} 
          />
          {/* Eye Icon inside the password input */}
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
          onPress={() => router.replace('dashboard')}
        >
          Login
        </Button>
      </Animated.View>

      <Button 
        mode="text" 
        textColor="#4CAF50" 
        onPress={() => router.push('Recovery')}
        style={styles.textButton}
      >
        Forgot Password?
      </Button>

      <Button 
        mode="text" 
        textColor="#4CAF50" 
        onPress={() => router.push('Register')}
        style={styles.textButton}
      >
        Sign Up
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#E3F2FD', // Light blue gradient background
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 32, // Larger font size for the title
    color: '#4CAF50', // Green color for the header
    letterSpacing: 2, // Add letter spacing for a more stylish effect
  },
  input: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF', // White background for inputs
    borderRadius: 15, // Rounded corners for inputs
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333333',
    elevation: 5, // Shadow effect to give a floating look
  },
  button: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15, // Rounded corners for button
    paddingVertical: 14, // Extra padding for button
    elevation: 6, // Elevated button for 3D effect
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  textButton: {
    marginBottom: 8,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    paddingVertical: 10,
  },
});

export default Login;
