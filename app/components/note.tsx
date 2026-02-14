import { Image } from "expo-image"; // https://docs.expo.dev/versions/latest/sdk/image/#imagesource
import { StyleSheet } from "react-native";

/* 
For now, all notes are quarter notes, and all are stem up.
*/

// define a new typescript type for the note props, this assures that the types are passed and
// uses typescript's type checking to catch any errors 
type NoteProps = {
  name: string;
  xPos: number; // this is the horizontal position of the note, used with xOffset to calculate the final position of the note
  yPos: number; // this is the height of the line the note is on, used with yOffset to calculate the final position of the note
  xOffset?: number; // ? means optional parameter, Note() constructor provides default value of 0
  yOffset?: number;
}

export default function Note({
  name,
  xPos,
  yPos,
  xOffset = 0,
  yOffset = 0
}: NoteProps) {

  const finalX = xPos - xOffset; // calculate the final x position of the note based on the x position and the x offset
  const finalY = yPos - yOffset; // calculate the final y position of the note based on the line height and the y offset

  return (
    // give all of the styles from the noteStyles sheet, under the "note" key. Override the top and left positions with the calculated finalY and finalX
    <Image
        style={[noteStyles.note, { top: finalY, left: finalX }]}
        source={require("../../assets/BFMN_lib/Notes/3_Quarter_Note_-_Crotchet/Stems_up/Quarter_Crotchet.png")}
    />
  );
}

const noteStyles = StyleSheet.create({  
    note: {
      position: 'absolute',
      width: 35,
      height: 110,
      zIndex: 10, // make sure the note is on top of the staff lines
      left: 0,
      top: 0,
      resizeMode: 'contain',
  }
});