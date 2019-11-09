// import React from 'react';
// import { View, Text, Button, Image, StyleSheet } from 'react-native';
// import { Colors } from '../constants/Colors';
// import ImagePicker from 'react-native-image-picker';

// const styles = StyleSheet.create({
//     imagePicker: {
//         alignItems: 'center',
//     },
//     imagePreview: {
//         width: '100%',
//         height: 200,
//         marginBottom: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderColor: Colors.ligthGray,
//         borderWidth: 1,
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//     },
// });

// const ImgPicker = () => {

//     const options = {
//         tintColor: Colors.primary,
//         storageOptions: {
//             skipBackup: true,
//             path: 'images',
//         },
//     }

//     const takeImageHandler = () => {
//         ImagePicker.launchCamera(options, (response) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//             console.log('User cancelled image picker');
//             } else if (response.error) {
//             console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//             console.log('User tapped custom button: ', response.customButton);
//             } else {
//                 console.log(response.uri);
//             }
//         });
//     }

//     return (
//         <View style={styles.imagePicker}>
//             <View style={styles.imagePreview}>
//                 <Text> No image picked yet . </Text>
//                 <Image style={styles.image} />
//             </View>
//             <Button
//                 title="Take picture"
//                 color={Colors.primary}
//                 onPress={takeImageHandler}
//             />
//         </View>
//     )
// }

// export default ImgPicker;
