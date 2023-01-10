import { Text, TouchableOpacity, View,StyleSheet, TextInput } from "react-native"
import Header from "./header"

const SetNewPassword = () =>{
  return(
    <View style={styles.container}>
      <View style={{width: '100%'}}>
      <Header Name="Change password"/>
      </View>
      <View style={styles.upperView}>
        <Text style={{top: 30,left: 10,width: '100%',color: 'black'}}>New Password</Text>
        <View style={{top: 10,width: '100%'}}>
         <TextInput style={styles.textField} placeholder="new password" />
        </View>
        <Text style={{top: 60,left: 10,width: '100%',color: 'black'}}>Repeat New Password</Text>
        <View style={{top: 40,width: '100%'}}>
          <TextInput style={styles.textField} placeholder="repeat new password" />
        </View>
        <TouchableOpacity style={styles.sendButton}>
            <Text style={{color: 'white'}}>Done!</Text>
        </TouchableOpacity>  
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
      },
      header: {
         width: '100%',
         height: 80,
         backgroundColor: 'black',
         justifyContent: 'center',
         alignItems: 'center',
         position: 'relative'
      },
      upperView: {
        alignItems: 'center',
        position: 'relative',
        width: '90%',
        // flex: 1
      },
      label: {
        top: 20,
        position: 'absolute',
        left: 10,
        color: 'black'
      },
      textField: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        top: 30,
        borderRadius: 5,
        paddingTop:10
      },
      sendButton: {
        backgroundColor: '#d2691e',
        height: 60,
        width: '100%',
        top: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
     },
})

export default SetNewPassword
