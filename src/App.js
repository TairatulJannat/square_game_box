import React from 'react';
import boxes from './boxes';
import Box from './components/Box';
import './App.css';

export default function App(){

    const [squares, setSquares] = React.useState(boxes)

    function toggle(id){

        setSquares(prevSquare => {
            return prevSquare.map((square)=>{
                return square.id === id ? {...square, on: !square.on} : square
            })
            
        })
        
    }

    const squareElements = squares.map(square =>(
        <Box 
           key ={square.on}
           on ={square.on}
           toggle ={()=>toggle(square.id)}
        />
    ))

    return(
        <main>
            {squareElements}
        </main>
        
    )

}
