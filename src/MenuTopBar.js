import React, { useState, useEffect } from 'react';
import MainMenu from './MainMenu';



function MenuTopBar(props) {


    return (
        <div class="top_bar">
            <div id="main_menu_buttons">
                <div style={{ float: "left", marginLeft: "4vh" }}>

                    <div id="mm_play" onClick={() => props.onMenuScreenChange("play")} class='button get-closer menu-medium-button menu_button'>PLAY</div>
                    <div id="mm_gamemode" onClick={() => props.onMenuScreenChange("roominfo")} class='button get-closer menu-medium-button menu-disabled-button menu_button'>Gamemode</div>
                    <div id="mm_warmup" onclick='open_warmup()' class='button get-closer menu-medium-button menu_button'>Warmup</div>
                </div>

                <div style={{ float: "right" }}>
                    <div id="mm_options" onClick={() => props.onMenuScreenChange("settings")} class='button get-closer menu-medium-button menu_button'>OPTIONS</div>
                    <div id="mm_stats" onclick='' class='button get-closer menu-light-button  menu-disabled-button menu_button'>Stats</div>
                    <div id="mm_workshop" onClick={() => props.onMenuScreenChange("workshop")} class='button get-closer menu-light-button menu_button '>WORKSHOP</div>
                    <div id="mm_patchnotes" onclick='' class='button get-closer menu-light-button menu-disabled-button menu_button'>PATCH NOTES</div>
                    <div id="mm_credits" onclick='' class='button get-closer menu-light-button menu-disabled-button menu_button'>CREDITS</div>
                    <div onclick='exit_game()' class='button get-closer menu-light-button menu_button'>EXIT</div>
                </div>
            </div>
        </div>
    );
}



export default MenuTopBar;
