import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IconWallet from "react-native-vector-icons/Ionicons";

const CardList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <IconWallet
          name="wallet-outline"
          style={{
            color: "whitesmoke",
            fontSize: 25,
            top: 10,
            marginRight: 10,
          }}
        />
        <Text style={styles.topFont}>My Wallet</Text>
      </View>
      <View style={styles.bottomWrapper}>
        <View style={styles.leftWrapper}>
          <Text style={styles.fontBalance}>--Balance--</Text>
          <Text style={styles.fontNumber}>$ 4545.45</Text>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.fontDetails}>Deposit</Text>
          <Text style={styles.fontDetails}>Withdraw</Text>
          <Text style={styles.fontDetails}>More..</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#0000ff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 30,
    flexDirection: "column",
  },
  topWrapper: {
    // alignItems: "center",
    flexDirection: "row",
    bottom: 20,
    marginLeft: 110,
  },
  topFont: {
    color: "whitesmoke",
    fontSize: 25,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    paddingTop: 10,
  },
  bottomWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftWrapper: {},
  rightWrapper: { flexDirection: "column" },
  fontBalance: {
    color: "whitesmoke",
    fontSize: 23,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    bottom: 10,
    marginLeft: 20,
  },
  fontNumber: {
    color: "whitesmoke",
    fontSize: 30,
    fontFamily: "Comic Sans MS",
    fontWeight: "bold",
  },
  fontDetails: {
    color: "whitesmoke",
    fontSize: 15,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
});

export default CardList;
