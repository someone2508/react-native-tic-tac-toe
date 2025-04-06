import Board from '@/components/Board';
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {

  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isActive, setIsActive] = useState(true);

  console.log(winner);

  const checkWinner = (board) => {

    const patterns = [
      // rows
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      
      // cols
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],

      // diagonals
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]]
    ]

    for(let ePattern of patterns) {
      if(ePattern.every(cell => cell === 'X')) return 'X';

      if(ePattern.every(cell => cell === '0')) return '0';
    }
    
    return null;
  }

  const handleSquarePress = (row, col) => {
    if(board[row][col] || winner) return;

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = player;
    const win = checkWinner(newBoard);

    setBoard(newBoard);
    setWinner(win);
    setPlayer(player === 'X' ? '0' : 'X');

    for(let i=0; i<newBoard.length; i++) {
      for(let j=0; j<newBoard[i].length; j++) {
        if(newBoard[i][j] === '') {
          return;
        }
      }
    }

    setIsActive(false);
  }

  const handleReset = () => {
    setBoard(initialBoard);
    setPlayer('X');
    setWinner(null);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Tic Tac Toe</Text>
      <Board board={board} onSquarePress={handleSquarePress} />
      <Text style={style.status}>
        {isActive ? (winner ? `Winner ${winner}` : `Turn: ${player}`) : winner ? `Winner ${winner}` : 'Game Finished (No winner)'}
      </Text>
      <Button title='Restart Game' onPress={handleReset}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 20,
    marginVertical: 20
  }
})