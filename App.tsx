import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { TitilliumWeb_600SemiBold } from "@expo-google-fonts/titillium-web";
import Header from "./src/components/Header";
import Summary from "./src/components/Summary";
import Transactions from "./src/components/Transactions";
import Quotes from "./src/components/Quotes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    TitilliumWeb_600SemiBold,
  });

  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <>
          <Header />
          <Summary />
          <Transactions />
          <Quotes />
          <StatusBar style="light" />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
});
