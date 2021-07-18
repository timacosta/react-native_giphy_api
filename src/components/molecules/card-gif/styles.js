import { Platform, StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.main,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
        shadowColor: '#000',
        ...Platform.select({
            ios: {
                shadowOpacity: 0.2,
                shadowRadius: 1,
                shadowOffset: {width: 0,height: 4},
            },
            android: {
                elevation: 4,
            }
        }),
    },
    image: {width: '100%',height: 200,resizeMode: 'cover'},
    infoContainer: {flexDirection: 'row', padding: 20},
    name: {fontSize: 16, fontWeight: 'bold', color: colors.white, flex: 1},
})

export default styles;