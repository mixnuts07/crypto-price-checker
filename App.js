import { useRef, useMemo, useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Chart from "./components/Chart";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function App() {
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["45%"], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Header />
        <View style={styles.divider} />
        <CardList />
        <ScrollView>
          {SAMPLE_DATA.map((data, index) => (
            <ListItem
              name={data.name}
              symbol={data.symbol}
              currentPrice={data.current_price}
              priceChange7Days={data.price_change_percentage_7d_in_currency}
              logoPATH={data.image}
              key={index}
              onPress={() => openModal(data)}
            />
          ))}
        </ScrollView>
        <Footer />
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        {selectedCoinData ? (
          <Chart
            currentPrice={selectedCoinData.current_price}
            logoPATH={selectedCoinData.image}
            name={selectedCoinData.name}
            symbol={selectedCoinData.symbol}
            priceChangePercentage7Days={
              selectedCoinData.price_change_percentage_7d_in_currency
            }
            sparkLine={selectedCoinData?.sparkline_in_7d.price}
          />
        ) : null}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  divider: {
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bottomSheet: {
    shadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
