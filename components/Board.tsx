import {View, StyleSheet} from 'react-native';
import Sqaure from './Square';

export default function Board({board, onSquarePress}) {
    return (
        <View style={style.board}>
            {board.map((row, rowIdx) => (
                <View style={style.row}>
                    {row.map((value, colIdx) => (
                        <Sqaure 
                            key={`${rowIdx}-${colIdx}`}
                            value = {value}
                            onPress={() => onSquarePress(rowIdx, colIdx)}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    board: {
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    }
})