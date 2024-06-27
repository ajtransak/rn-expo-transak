import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="/transak">
        <Text style={styles.text}>Get started with Transak</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#1461DA",
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
  },
});
