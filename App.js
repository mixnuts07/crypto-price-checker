import { useRef, useMemo } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import Header from "./components/Header";
import Chart from "./components/Chart";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function App() {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
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
              onPress={() => openModal()}
            />
          ))}
        </ScrollView>
      </SafeAreaView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <Chart />
      </BottomSheetModal>
    </BottomSheetModalProvider>
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
