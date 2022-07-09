import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";

const { width: SIZE } = Dimensions.get("window");

const Chart = ({
  currentPrice,
  logoPATH,
  name,
  symbol,
  priceChangePercentage7Days,
  sparkLine,
}) => {
  const priceChangeColor = priceChangePercentage7Days > 0 ? "green" : "red";

  const formatUSD = (value) => {
    "worklet";
    if (value === "") {
      return `$${currentPrice.toLocaleString("en-US", { currency: "USD" })}`;
    }
    const formattedValue = `$${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    return formattedValue;
  };

  return (
    <ChartPathProvider
      data={{ points: sparkLine, smoothingStrategy: "bezier" }}
    >
      <View style={styles.chartWrapper}>
        <View style={styles.titlesWrapper}>
          <View style={styles.upperTitle}>
            <View style={styles.upperLeftTitle}>
              <Image source={logoPATH} style={styles.image} />
              <Text style={styles.subtitle}>
                {name} {symbol.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.subtitle}>7D</Text>
          </View>

          <View style={styles.lowerTitle}>
            <ChartYLabel format={formatUSD} style={styles.boldTitle} />
            {/* <Text style={styles.boldTitle}>
              ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
            </Text> */}
            <Text style={(styles.title, { color: priceChangeColor })}>
              {priceChangePercentage7Days.toFixed(2)}%
            </Text>
          </View>
        </View>

        <View style={styles.chartLineWrapper}>
          <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
          <ChartDot style={{ backgroundColor: "red" }} />
        </View>
      </View>
    </ChartPathProvider>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    marginHorizontal: 16,
  },
  upperTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#A9ABB1",
  },
  lowerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
});

export default Chart;
