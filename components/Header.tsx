import { View, Text, StyleSheet, Image } from "react-native";
import IconSetting from "react-native-vector-icons/AntDesign";
import IconLanguage from "react-native-vector-icons/MaterialIcons";
import IconLight from "react-native-vector-icons/Entypo";

const Header = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Crypto Markets</Text>
      <View style={styles.iconWrapper}>
        <IconSetting name="setting" style={styles.icon} />
        <IconLanguage name="language" style={styles.icon} />
        <IconLight name="light-up" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  largeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0011ff",
    fontFamily: "Georgia",
  },
  iconWrapper: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 30,
    marginLeft: 10,
    color: "#000000",
  },
});

export default Header;
