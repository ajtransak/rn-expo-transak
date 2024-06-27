import { Transak, TransakConfig } from "@transak/transak-sdk";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Page = (props: Props) => {
  const transakConfig: TransakConfig = {
    apiKey: "d79671a4-b021-4a4f-a444-6862a680a94b",
    environment: Transak.ENVIRONMENTS.STAGING,
  };

  useEffect(() => {
    const transak = new Transak(transakConfig);

    transak.init();
  });

  return (
    <View style={styles.container}>
      <Link href="/">
        <Text style={styles.text}>Back to Home</Text>
      </Link>
    </View>
  );
};

export default Page;

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
