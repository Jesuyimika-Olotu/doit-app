import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.spacer]}>Welcome Username</Text>
      <Button
        style={[styles.spacer, styles.btnStyle]}
        icon="logout"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
  },
  spacer: {
    margin: 16,
  },
  btnStyle: {
    borderRadius: 4,
    marginHorizontal: 0,
    paddingVertical: 6,
  },
});
