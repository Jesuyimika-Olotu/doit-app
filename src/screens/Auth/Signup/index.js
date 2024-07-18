import { AuthComponent } from "../../../components";

export const SignupScreen = () => {
  return (
    <AuthComponent
      title="Signup"
      switchBtnTitle="Already Registered? Login..."
      goToOtherPage={() => navigation.navigate("Login")}
    />
  );
};
