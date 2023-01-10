// import React from "react";
import React, { Component ,createRef} from "react";
import { StyleSheet,View,Text,TouchableOpacity,Pressable ,TextInput} from "react-native";

interface Props {

}

interface S {
  inputRef?: React.RefObject<HTMLButtonElement>,
  otp: any,
  isPinReady: Boolean,
  isInputBoxFocused: Boolean,
  maximumLength: any
}


class OtpChange extends Component  <Props,S >{
    inputRef: any;
    state: { otp: string; isPinReady: boolean; isInputBoxFocused: boolean; maximumLength: number; };
    setState: any;
    constructor(props: Props){
       super(props);
       this.state = {
        otp: "",
        isPinReady: false,
        isInputBoxFocused: false,
        maximumLength: 6,
       };
       this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.setState({isPinReady: this.state.otp.length === this.state.maximumLength})
    }

    componentDidUpdate(prevProp,prevState: any){
        if(prevState.otp !== this.state.otp){
            this.setState({isPinReady: this.state.otp.length === this.state.maximumLength})
        }
    }

    handleOnBlur = () => {
      this.setState({isInputBoxFocused: false})
    };

    handleOnpress = () => {
        this.setState({isInputBoxFocused: true});
        this.inputRef.current.focus();
    };
    
    boxDigit = (_, index) => {
        const emptyInput = "";
        const digit = this.state.otp[index] || emptyInput;
        const currentVal = index === this.state.otp.length;
        const isLastValue = index === this.state.maximumLength - 1;
        const isCodeComplete = this.state.otp.length === this.state.maximumLength;
        const isValueFocused = currentVal || (isLastValue && isCodeComplete);
        return (
          <Pressable 
            style={isValueFocused && this.state.isInputBoxFocused ? styles.otpInputFocused :styles.otpInput} 
            key={index} 
            onPress={this.handleOnpress}
          >
            <Text>{digit}</Text>
          </Pressable>
        );
      };
    render(){
        const boxArray = Array(this.state.maximumLength).fill(0);


        return(
            <View>
          <View style={styles.header}>
            <Text style={{zIndex: 1,color: 'white',fontSize: 20}}>Change password</Text>
           <TouchableOpacity style={{position: 'absolute' ,left: 10}}>
              <Text style={{color: 'white', fontSize: 15}} >Back</Text>
              </TouchableOpacity>
         </View>           
             <Text style={{color: 'black',fontSize:15,position: 'absolute',top: 100,left: 7}}>
              OTP
            </Text>
            <View style={{width: '90%'}}>
              <Text style={{top: 55,left : 10,fontSize: 20,width: '90%'}}>
                we have sent you the access code to change password,please type it here
              </Text>
            </View>
            <Text style={{top: 90, left: 40 }}>Enter OTP</Text>
            <View style={{top: 110}}>
             <View style={{flexDirection: 'row',justifyContent: 'center' }}>
              {boxArray.map(this.boxDigit)}
              </View>        
            </View>
            <TouchableOpacity>
            <Text style={{left: 300,top: 120,borderBottomWidth: 2,borderBottomColor: 'grey',width: 75}} >
              ResendOTP
            </Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={!this.state.isPinReady}>
            <View style={styles.sendButton}>
             <Text style={{color: 'white'}}>Send</Text>
            </View>
            </TouchableOpacity>
            <TextInput 
              value={this.state.otp} 
              onChangeText={(val)=>this.setState({otp: val})} 
              onBlur={this.handleOnBlur} 
              ref={this.inputRef}  
              maxLength={this.state.maximumLength} 
              style={{borderColor: 'black', borderRadius: 5,borderWidth:1,top: 260,opacity:0}}
            />
        </View>
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
      otpInput: {
        borderColor: '#e5e5e5',
        borderWidth: 2,
        borderRadius: 5,
        padding: 12,
        minWidth: 50,
        margin: 3
      },
      otpInputFocused: {
        backgroundColor: 'grey',
        borderColor: '#ecdbba',
        borderWidth: 2,
        borderRadius: 5,
        padding: 12,
        minWidth: 50,
        margin: 3
      },
      sendButton: {
        backgroundColor: '#d2691e',
        height: 55,
        width: '90%',
        top: 150,
        left: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
     },
}) 

export default OtpChange