/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){

    let statusText = '';


    if (props.status === 'plr1') {
      statusText = 'Player X';
    } else if (props.status === 'plr2') {
      statusText = 'Player O';
    } else if (props.status === 'plr1won') {
      statusText = 'Player X wins!';
    } else if (props.status === 'plr2won') {
      statusText = 'Player O wins!';
    } else if (props.status === 'draw') {
      statusText = 'PLAY AGAIN';
    }

  return (
    <div>{statusText}</div>
    //<div>To be implemented...</div>
  );
}
