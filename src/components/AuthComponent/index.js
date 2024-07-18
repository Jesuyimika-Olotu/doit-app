import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export const AuthComponent = (props) => {
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.spacer} variant="labelLarge">
          Welcome
        </Text>
        <Text variant="headlineLarge">Doit</Text>
        <Text style={styles.spacer} variant="bodyLarge">
          {props.title}
        </Text>
        <View style={styles.subContainer}>
          <TextInput
            label="Username"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Password"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button
            style={[styles.spacer, styles.btnStyle]}
            icon="login"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Login
          </Button>
          <Button
            style={[styles.spacer, styles.btnStyle]}
            mode="text"
            onPress={props.goToOtherPage}
          >
            {props.switchBtnTitle}
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: "80%",
  },
  spacer: {
    margin: 11,
  },
  btnStyle: {
    borderRadius: 4,
    marginHorizontal: 0,
    paddingVertical: 6,
  },
});
