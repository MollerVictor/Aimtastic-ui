import React, { useState, useEffect } from 'react';
import MenuTopBar from './MenuTopBar';
import PlayScreen from './PlayScreen';
import RoomInfoScreen from './RoomInfoScreen';


export default MainMenu;



function MainMenu(props) {

    function renderScreen(param) {
        switch (param) {
            case 'play':
                return <PlayScreen onMenuScreenChange={setScreenState} onRoomStateChange={setRoomState} />;
            case 'roominfo':
                return <RoomInfoScreen roomState={roomState}/>;
            case 'workshop':
                return <RoomInfoScreen />;
            case 'settings':
                return <RoomInfoScreen />;
            default:
                return null;
        }
    }

    const [screenState, setScreenState] = useState();

    const [roomState, setRoomState] = useState();

    return (
        <div>
            <MenuTopBar onMenuScreenChange={setScreenState} />
            <img src="/images/DiscordLogo.png" class="discord_icon get-closer" onclick="ENGINE_openLink('https://discord.gg/j6qhUUH')" />

            <div id="screens_container">
                {renderScreen(screenState)}

            </div>
        </div>
    );
}



