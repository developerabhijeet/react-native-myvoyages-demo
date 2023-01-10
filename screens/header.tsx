import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props{
Name: String
}

export default class Header extends React.Component<Props>{
    props: { Name: any; };

    constructor(props: Props){
        super(props);
    }

    render(){

        const {Name} = this.props;

        return (
            <View>
            <View style={styles.header}>
            <Text style={{zIndex: 1,color: 'white',fontSize: 20}}>{Name}</Text>
           <TouchableOpacity style={{position: 'absolute' ,left: 10}}>
              <Text style={{color: 'white', fontSize: 15}} >Back</Text>
              </TouchableOpacity>
         </View>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
     }
})