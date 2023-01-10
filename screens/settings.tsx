import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./header";

interface S {

}

interface Props {

}


 class SettingsScreen extends Component <S,Props> {
 
  settingCells = ({name},i:any) => {
   return <View key={i} style={styles.settingsList}>
           <Text style={styles.textColor}>{name}</Text>
          </View>
        }

   render(){
    const cells = [
      {name: "Edit Profile"},
      {
        name: "Private Account",
        isSwitch: true
      },
      {name: "Change Password"},
      {name: "Edit phone"},
      {name: "Edit email"},
      {
        name: "Deactivate Account",
        isSwitch: true
      },
      {name: "About"},
      {name: "Contact Us"},
    ]
    return(
      <>
    <ScrollView >
        <View style={styles.container}>
        <View style={{width: '100%'}}>
           <Header Name="Settings and privacy"/>
        </View>
        <View style={styles.settingsUpper}>
             {cells.map(this.settingCells)}
            <View style={{height: 1,width: '100%',backgroundColor: 'black'}}>

            </View>
            <View style={{position: 'relative',height: 100}}>
             
             <TouchableOpacity>
              <Text style={{color: 'black',position: 'absolute',left: 20,top: 20}}>Logout</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>
    </ScrollView>
    </>
    )
  }
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
     settingsUpper : {
     width: '95%',
     marginTop: 25,
     flex:1
    },
     settingsList : {
        position: 'relative',
        right: 1,
        padding: 15
     },
     textColor: {
        color: 'black'
     }
    })


    export default SettingsScreen
