import React, { useState, useEffect } from 'react';
import { useGlobal, setGlobal } from 'reactn';
import Slider from './Slider';
import ReactSlider from 'react-slider'

export default RoomInfoScreen;

/* global globalVar */

function RoomInfoScreen(props) {

    const [roomInfo, setRoomState] = useGlobal('room');

    const listItems = [];
    for(var i = 0; i < roomInfo._settingsDefault.length; i++){

        var ds = roomInfo._settingsDefault[i];

        listItems[i] = <Slider Name={ds.displayName} Value={5} MinValue={ds.minValue} MaxValue={ds.maxValue}/>
    }


    return (
        <div id="room_info_screen" className="center_area fullscreen_window">
            <div id="selected_room_title" className="main_title floating_title">{roomInfo.DisplayName}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div className="room-info">
                    <div>
                        <p id="selected_room_desc">{roomInfo.DisplayInformation}</p>
                        {/*<img src="resources/images/rooms/360.png" style="width: 30vh; height: auto; display:none"/> */}
                    </div>
                    <div id="presetInfo">
                        <button className="ui button primary" onclick="createNewRoomPreset()">Add Preset</button>
                        <button className="ui button primary" onclick="deleteRoomPreset()" id="deletePresetButton">Delete Preset</button>
                        <button className="ui button primary" onclick="openRenamePresetWindow()" id="renamePresetButton">Rename Preset</button>
                        <div className="rename_preset_window" style={{ display: 'none' }}>
                            <h3>Rename</h3>
                            <input type="text" id="rename_preset_input" /><br />
                            <button className="ui button secondary bottom_left" onclick="hideRenamePresetWindow()">Cancel</button>
                            <button className="ui button primary bottom_right" onclick="applyRenamePresetWindow()">Apply</button>
                        </div>
                        <span className="preset_dropdown">
                            <select className="column " id="presetList" />
                        </span>
                        <div id="roomSettings">
                            {listItems}
                        </div>
                    </div>
                    <button className="ui button primary" id="roomPlayButton" onclick="enterRoom()">Play</button>
                </div>
                <div>
                    <div>
                        <table id="global_leaderboard_table" className="leaderboard_table">
                            <thead>
                                <tr>
                                    <td>
                                        Rank
                    </td>
                                    <td>
                                        Name
                    </td>
                                    <td>
                                        Score
                    </td>
                                    <td>
                                        Hits
                    </td>
                                    <td>
                                        Misses
                    </td>
                                    <td>
                                        Hit %
                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="dont_remove">
                                    <td id="select_room_my_rank">
                                        Rank
                    </td>
                                    <td id="select_room_my_name">
                                        Name
                    </td>
                                    <td id="select_room_my_score">
                                        Score
                    </td>
                                    <td id="select_room_my_hits">
                                        Hits
                    </td>
                                    <td id="select_room_my_misses">
                                        Misses
                    </td>
                                    <td id="select_room_my_hitprocent">
                                        %
                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table className="leaderboard_table">
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br style={{ clear: 'both' }} />
            <div>
                <button className="ui button secondary" onclick="switch_screens('#play_screen')">Back</button>
            </div>
        </div>
    );
}


window.onRequestRoomSettings = function asd(jsonString) {
    var parsedData = JSON.parse(jsonString);

    console.log(parsedData);

    setGlobal({
        room: parsedData
    });
}

