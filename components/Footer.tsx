import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";

const Footer = () => {
  return (
    <View style={{ backgroundColor: "#0011ff" }}>
      <View style={styles.containerIcon}>
        <Icon name="home" style={styles.iconHome} />
        <Icon name="hearto" style={styles.icon} />
        <Icon name="link" style={styles.icon} />
        <Icon2 name="people-circle-outline" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 30,
  },
  iconHome: {
    fontSize: 30,
    marginLeft: 10,
    color: "whitesmoke",
  },
  icon: {
    fontSize: 30,
    marginLeft: 10,
    color: "whitesmoke",
  },
});

export default Footer;
