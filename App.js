/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  TextInput,
  Image,
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  Alert
} from "react-native";
// import {createStackNavigator} from 'react-navigation';
// import {} from 'react-native-gesture-handler';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const defaultImg = {
      uri:
        "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
    };
    return (
      <View style={styles.container}>
        <View>
          <Image source={defaultImg} style={styles.defaultImg} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={"Username"}
            style={styles.inputTextBox}
            onChangeText={(text) => {
              this.setState({ username: text });
            }}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            style={styles.inputTextBox}
            onChangeText={(text) => {
                this.setState({ password: text });
            }}
          />
        </View>
        <View style={{ margin: 16 }}>
          <Button
            title={"Login"}
            style={styles.btns}
            onPress={() => {
              Alert.alert("Login", "Logged In with userrname " + this.state.username );
            }}
          />
          <Button
            title={"Forgot password"}
            style={styles.btns}
            onPress={() => {
              Alert.alert("Why you do that!", "We are not responsible for your loss :P");
            }}
          />
        </View>
        <Text style={{ marginTop: 16 }}>Don't have account? Register</Text>
        <Home />
      </View>
    );
  }
}

//
// Home Class
//
export class Home extends Component<Props> {
  render() {
    return (
      <View>
        <Text> Welcome </Text>
      </View>
    );
  }
}

//
// Style sheets
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#48c3c8"
  },
  defaultImg: {
    height: 150,
    width: 150,
    margin: 16
  },
  textInputContainer: {
    backgroundColor: "#aaf3ff",
    margin: 16,
    borderRadius: 20,
    height: 80,
    flexDirection: "row",
    borderColor: "#d5d5d5",
    borderWidth: 1
  },
  inputTextBox: {
    width: "80%",
    margin: 16,
    justifyContent: "center",
    fontSize: 26
  },
  btns: {
    padding: 16,
    margin: 16
  },
  register: {},
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
