import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

type Props = {
  name: string;
  symbol: string;
  currentPrice: string;
  priceChange7Days: number;
  logoPATH: any;
};

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChange7Days,
  logoPATH,
}: Props): JSX.Element => {
  const priceChangeColor = priceChange7Days > 0 ? "green" : "red";
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image source={logoPATH} style={styles.image} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{currentPrice.toLocaleString()}</Text>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChange7Days.toFixed(2)}%
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
