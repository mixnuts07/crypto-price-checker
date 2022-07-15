import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IconWallet from "react-native-vector-icons/Ionicons";

const CardList = () => {
  return (
    <View style={styles.container}>
      <IconWallet name="wallet-outline" />
      <Text style={styles.topFont}>My Wallet</Text>
      <View style={styles.leftWrapper}>
        <Text style={styles.font}>Balance</Text>
        <Text style={styles.font}>$ 4545.45</Text>
      </View>
      {/* <View style={styles.rightWrapper}>
        <Text style={styles.fontDetails}>Deposit</Text>
        <Text style={styles.fontDetails}>Withdraw</Text>
        <Text style={styles.fontDetails}>More..</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
    backgroundColor: "#0000ff",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftWrapper: {},
  rightWrapper: { flexDirection: "row" },
  topFont: {
    color: "whitesmoke",
    fontSize: 20,
    fontFamily: "Times New Roman",
    fontWeight: "bold",

    paddingTop: 10,
  },
  font: {
    color: "whitesmoke",
    fontSize: 20,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  fontDetails: { color: "whitesmoke", fontSize: 15 },
});

export default CardList;
