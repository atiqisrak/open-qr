import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRGeneratorProps {
  navigation: any;
}

const QRGenerator: React.FC<QRGeneratorProps> = ({ navigation }) => {
  const [text, setText] = useState<string>('');

  const generateQR = () => {
    if (!text.trim()) {
      Alert.alert('Error', 'Please enter some text to generate QR code');
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>QR Code Generator</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter text to generate QR code"
          value={text}
          onChangeText={setText}
          multiline
          numberOfLines={3}
        />

        {text.trim() && (
          <View style={styles.qrContainer}>
            <QRCode
              value={text}
              size={200}
              color="black"
              backgroundColor="white"
            />
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={generateQR}
          disabled={!text.trim()}
        >
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  qrContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QRGenerator;
