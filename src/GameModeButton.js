import React from 'react';

/* global ENGINE_requstRoomSettings */

export default GameModeButton;

function ButtonPressed(props, room) {
    props.onMenuScreenChange("roominfo");
    props.onRoomStateChange(props.roomName);

    ENGINE_requstRoomSettings(props.roomName);
}

function GameModeButton(props) {
    return (
        <div class="play_gamemode button-sound get-closer" data-room-name="BiggerThenSmallerRoom" onClick={() => ButtonPressed(props, "BiggerThenSmallerRoom")}>
            <img class="background-image" src="resources/images/rooms/bigger.png" />
            <div class="box-title">{props.title}</div>
        </div>
    );
}