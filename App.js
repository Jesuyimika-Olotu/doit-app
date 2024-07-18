import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";

import MainNavigation from "./src/navigation";

export default function App() {
  return (
    <PaperProvider>
      <MainNavigation />
    </PaperProvider>
  );
}
