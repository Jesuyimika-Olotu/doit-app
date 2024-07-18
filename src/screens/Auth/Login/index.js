import { AuthComponent } from "../../../components";

export const LoginScreen = ({ navigation }) => {
  return (
    <AuthComponent
      title="Login"
      switchBtnTitle="New User? Signup"
      goToOtherPage={() => navigation.navigate("Signup")}
    />
  );
};
