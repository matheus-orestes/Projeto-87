import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    this.props.navigation.replace("Login");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
       
      </View>
      
    );
  }
}
toogleSwitch() {
    const_previous_state = this.state.isEnabled;
    const theme = !this.state.isEnabled ? "dark":"light"
    var updates = {}
    updates["/users/" + firebase.auth().currentUser.uid + "/current_theme"] = theme
    firebase.database().ref().update(updates);
    this.setState({ isEnabled: !previous_state,light_theme: previous_state})
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
