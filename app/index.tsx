import { Image } from "expo-image"; // https://docs.expo.dev/versions/latest/sdk/image/#imagesource
import { StyleSheet, Text, View } from "react-native";
import Note from "./components/note";

  /*
  START HERE:

  To run: navigate to root directory and run "npm start" and scan QR code

  I tried to leave many loose comments to keep the code organized for interpretation!
  You can try changing the "lineHeight" constant as the parameter to the Note componentto move the note up and down on the staff.
  
  ---X------------------------- line 5
  ---X------------------------- line 4
  ---X------------------------- line 3
  ---X------------------------- line 2
  ---X------------------------- line 1
     ^ the note should be appearing here horizontally right now, since there is no good implementation
     for horizontal positioning yet, but you can try modifying the "xPos={mobileXOffset}" line to manually
     move the note left/right


  navigate from here (index.tsx) to ./components/note.tsx to see the note implementation.
  Components in React Natives are the substitutes for classes in OOP languages.
  By defining a Note component, we can create as many notes as we want by just calling the Note() function with different props (properties).
  This works in this file by writing <Note> like a HTML element, and passing the props as attributes. The Note() function then takes 
  those props and uses them to calculate the final position of the note on the staff, and returns an Image component with the note image at the correct position.



  */

  // I found the pixel height on the original image and divided by 2 since thats approx the ratio of the
  // final displayed image to the original image.
  // constant staff line heights:
  const line1Height = 140;
  const line2Height = 108;
  const line3Height = 76;
  const line4Height = 44;
  const line5Height = 12;

  // Currently the staff goes off the screen on mobile, so I use a const mobile x offset to keep the note on screen
  const mobileXOffset = 180;

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
          <Note
            name="Quarter Note"
            xPos={mobileXOffset} // not yet useful, but constant value is used to keep note on screen
            yPos={line5Height}  // TRY CHANGING TO OTHER CONSTANTS!
            xOffset={17}  // should stay fixed for quarter notes!
            yOffset={90}  // ^^^
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
      position: "relative",
      height: 155,
      width: 640,
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
