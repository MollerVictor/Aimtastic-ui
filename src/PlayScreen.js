import React from 'react';
import GameModeButton from './GameModeButton';

export default PlayScreen;

function PlayScreen(props) {

   

    return (
        <div>
            PlayScreen
            <GameModeButton title="Bigger Then Smaller" roomName="BiggerThenSmallerRoom"  onMenuScreenChange={props.onMenuScreenChange} onRoomStateChange={props.onRoomStateChange} />
            <GameModeButton title="Popup Targets Flicks" roomName="PopupTargetsRoom"  onMenuScreenChange={props.onMenuScreenChange} onRoomStateChange={props.onRoomStateChange}  />
        </div>
    );
  }