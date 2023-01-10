import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import OTPInputAuth from './screens/OTPInputAuth'

const App = () => {
  const [value, setValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          {/* {showMessage && (
            <View style={styles.message}>
              <Text>Country Code : {countryCode}</Text>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? 'true' : 'false'}</Text>
            </View>
          )} */}
          
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
              setCountryCode(phoneInput.current?.getCountryCode() || '');
            }}
            countryPickerProps={{withAlphaFilter:true}}
            disabled={disabled}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
              setCountryCode(phoneInput.current?.getCountryCode() || '');
              let getNumberAfterPossiblyEliminatingZero = phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
              console.log(getNumberAfterPossiblyEliminatingZero);
            }}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.downareaText}>
         <Text>--------------- Or Sign In with ----------------</Text>
         <TouchableOpacity
          style={styles.facebookbutton}
          > 
          <Text style={styles.facebooktext}>Sign in With Facebook</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={styles.instagrambutton}
          > 
          <Text style={styles.instagramtext}>Sign in With Instagram</Text>
         </TouchableOpacity>
         <View style={styles.downText}>
         <Text >Don't have account ? Sing Up</Text>
         </View>
         </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
    
  },
  wrapper: {
    marginTop: 160,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
  },
  buttonText:{
    color: 'white',
    fontSize: 14,
  },
   message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  downareaText: {
    marginTop: 20,
  },
  facebookbutton: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
  },
  facebooktext:{
    color: 'white',
    fontSize: 14,
  },
  instagramtext:{
    color: 'white',
    fontSize: 14,
  },
  instagrambutton: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bc1592',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
  },

  downText:{
    marginTop: 20,
    alignItems:'center',
  }

});

export default App;
