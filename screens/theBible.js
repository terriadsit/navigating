import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import FlatButton from "../shared/button";
import Card from "../shared/card";

export default function TheBible() {

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.blueletterbible.org/niv/jhn/1/1/s_998001');
  }


  return (
    <View style={styles.thisView}>
        <Card>
          <Text style={styles.thisText}>Read the Bible online, BlueLetterBible.org</Text>
          <FlatButton 
            text='Read Now' 
            onPress={handlePress}>
          </FlatButton>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    thisText: {
        marginBottom: 10
    },
    thisView: {
        marginTop: 20
    }
})


