import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import Header from "./components/Header";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.divider} />
      <ScrollView>
        {SAMPLE_DATA.map((data, index) => (
          <ListItem
            name={data.name}
            symbol={data.symbol}
            currentPrice={data.currentPrice}
            priceChange7Days={data.priceChange7Days}
            logoPATH={data.logoPATH}
            key={index}
          />
        ))}
      </ScrollView>
      {/* <Footer /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
