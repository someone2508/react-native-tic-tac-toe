import {TouchableOpacity, Text, StyleSheet} from 'react-native';



export default function Sqaure({value, onPress}) {
    return (
        <TouchableOpacity style={style.square} onPress={onPress}>
            <Text style={style.text}>{value}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold'
    }
})