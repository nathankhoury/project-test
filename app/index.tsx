import { Image } from "expo-image"; // https://docs.expo.dev/versions/latest/sdk/image/#imagesource
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Test app to try drawing notes to the screen</Text>
      <View style={styles.staffContainer}>
        <Image
          style={styles.image}
          source={require("../assets/BFMN_lib/Staves/Stave_lines_1_system_large.png")}
        />
        <Image
          style={styles.note}
          source={require("../assets/BFMN_lib/Notes/3_Quarter_Note_-_Crotchet/Stems_up/Quarter_Crotchet.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0553',  // temp
    resizeMode: 'contain',
  },
  staffContainer: {
    height: '20%',
    width: '100%',
    
    margin: 20
  },
  note: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    left: 0,
    top: 0,
    resizeMode: 'contain',
  }
});
