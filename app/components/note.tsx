import { Image } from "expo-image"; // https://docs.expo.dev/versions/latest/sdk/image/#imagesource
import { StyleSheet } from "react-native";

export default function Note() {
  return (
    <Image
        style={noteStyles.note}
        source={require("../../assets/BFMN_lib/Notes/3_Quarter_Note_-_Crotchet/Stems_up/Quarter_Crotchet.png")}
    />
  );
}

const noteStyles = StyleSheet.create({  
    note: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    left: 0,
    top: 0,
    resizeMode: 'contain',
  }
});