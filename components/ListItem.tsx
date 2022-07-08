import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChange7Days,
  logoPATH,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left Side */}
        <View style={styles.leftWrapper}>
          <Image source={logoPATH} style={styles.image} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol}</Text>
          </View>
        </View>
        {/* Right Side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{currentPrice}</Text>
          <Text style={[styles.subtitle, { color: "red" }]}>
            {priceChange7Days}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
    resizeMode: "cover",
    backgroundColor: "green",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  titleWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    // color: "whitesmoke",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    // color: "#A9ABB1",
  },
});

export default ListItem;
