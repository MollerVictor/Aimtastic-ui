<template>
	<div class="MainMenu"  v-if="showUI.value">
		<MenuTopBar v-on:menu-button-pressed="screenState.value = $event" />
		<img
			src="/images/DiscordLogo.png"
			class="discord_icon get-closer"
			onclick="ENGINE_openLink('https://discord.gg/j6qhUUH')"
		/>

		<div>
			<keep-alive>
			<PlayScreen v-show="screenState.value === 'Play'" />
			</keep-alive>
			<RoomInfoScreen v-if="screenState.value === 'RoomInfo'" />
			<SettingsScreen v-if="screenState.value === 'Settings'" />
		</div>
	</div>
</template>

<script>

/* global ENGINE_showCrosshairPreview */

window.screenState = { value: "" };
window.showUI = { value: true };


window.setMenuState = function (menuState) {
	window.showUI.value = menuState;
}


import PlayScreen from "./components/PlayScreen.vue";
import RoomInfoScreen from "./components/RoomInfoScreen.vue";
import SettingsScreen from "./components/settings/SettingsScreen.vue";
import MenuTopBar from "./components/MenuTopBar.vue";

export default {
	name: "app",
	components: {
		PlayScreen,
		RoomInfoScreen,
		SettingsScreen,
		MenuTopBar
	},

	data() {
		return {
			screenState: window.screenState,
			showUI: window.showUI
		};
	},

	watch: {
		menuState: function(newVal, oldVal) {
			//Every value chnage means it no longer on the ui page, so we can hade the crosshair preview
			ENGINE_showCrosshairPreview(false);
		},
	},
		

	computed: {
		menuState: function() {
			// `this` points to the vm instance
			return this.screenState.value;
		}
	}
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

* { transition: none !important }

@font-face {
    font-family: "MyFont Sans";
    src: url("assets/fonts/fontbold.ttf");
    
}

@font-face {
    font-family: "agencyfb-bold";
    src: url("assets/fonts/agencyfb-bold.ttf");
    
}

@font-face {
    font-family: "veneer";
    src: url("assets/fonts/veneer_fixed.ttf");
    
}

@font-face {
    font-family: "veneer-italic";
    src: url("assets/fonts/veneer_italic.ttf");
    
}

body{
    
}

body, html {
	width: 100%;
	height: 100%;
	padding: 0px;
	margin: 0px;
	color: white;
	font-family: 'veneer', sans-serif, sans;
    /*critical*/
    overflow: hidden;
}

* {
    --accent-hover: #ffdc02;
    --accent-hover-fg: #6a461c;
    --accent-active: white;
    --accent-active-fg: #444444;
    --accent-selected: #18b8eb;
    --accent-selected-fg: white;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

.hidden{
    display: none;
}

.MainMenu{   
    height: 100%;
    background: white url("assets/images/MainMenuBackgroundImage.png") center center no-repeat;
    background-size: auto 100%;
    background-color: #262626;
}

#main_menu_buttons {
	padding: 1vh;
    left: 2%;
    right: 2%;
	position: absolute;
    vertical-align: top;
    z-index: 10;    
}

.top_bar_logo{
    height: 7vh;
    width: auto;
    float: left;
    margin-right: 4vh;
}

.top_bar{
    width: 100%;
    height: 8vh;
    background-color: #C2191F;
}

.main_logo{
    left: 8%;
    top: 10vh;
    position: absolute;

    width: 64vh;

    vertical-align: top;
}

.main_logo img{
    width: 100%;
}


.discord_icon{
    position: absolute;
    bottom: 3%;
    left: 2%;
    width: 120px;
}

/*Buttons*/
.button {
    display: inline-block;
    background-color: rgba(0,0,0,0.0);
    color: #fcffff;
    vertical-align: center;
    font-size: 2.6vh;
    padding: 5px;
    border: 0px;
    margin-right: 2vh;
    box-shadow: 0 0 10px rgba(44, 79, 104, 0.8);
    font-family: 'veneer', sans-serif, sans;
}

.graphic-apply {
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
  margin-top: 8px;
}

.room-button:hover,.graphic-apply:hover {
  background-color: rgba(0,0,0,0.0);
  color: #fcffff;
  box-shadow: 0 0 10px rgba(44, 79, 104, 0.8);
}

.room-button,.graphic-apply {
  background-color: white;
  color: black;
  font-size: 2.7vh;
}

.menu_button{
    background-color: transparent;
    box-shadow: none;
}

.menu_button:hover,.settings-tab-button:hover {
	background-color: white;
  border-radius: 20px;
	color: black !important;
	box-shadow: 0 0 10px rgba(171, 122, 18, 0.2);
}

.button:active {
	background-color: white;
	color: #444;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.button:disabled {
	background-color: #7a7a7a;
	color: #444;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.menu-medium-button {
    font-size: 4vh;
}

.menu-light-button {
    font-size: 4vh;
}

.menu-disabled-button{
    color: rgba(255, 255, 255, 0.2);
}

.menu-disabled-button:hover {
	color: lightgray !important;
    box-shadow: none;
    background-color: transparent;
}

.preset-button{
    min-width: 10vh;
    max-width: 20vh;
    max-height: 8vh;
    overflow: hidden;
    text-align: center;
}

.settings-tab-button {
    background-color: transparent;
    box-shadow: none;
    font-size: 4vh;
    color: rgba(255, 255, 255, 0.8);
    top: 4vh;
    float: none;
}

.selected {
  background-color: white;
  border-radius: 20px;
  color: black !important;
  box-shadow: 0 0 10px rgba(171, 122, 18, 0.2);
}

.background-image{
    position: absolute; 
    height: auto; 
    width:100%;
}

#home_screen {
	position: absolute;
}

.center_text {
    text-align: center;
}


.center_area {
    /*border: 2px solid red;*/
    position: absolute;
    left: 40vh;
    right: 10vh;
    top: 20vh;
    bottom: 20vh;
}


.relative {
	position: relative;
	width: 100%;
	height: 100%;
}


.animation_fade_in {
   animation: fadein 0.05s;
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}

.get-closer {
    transition: transform 0.13s linear;
    transform: rotateX(0deg) !important;
}

.get-closer:hover {
    transform: scale(1.1) rotateX(0deg) !important;
}

#roomSettings{
    margin: 2vh;
}

.play_gamemode{
    width: 21vh;
    height: 10vh;
    background: center center no-repeat;
    background-size: auto 100%;
    vertical-align: middle;
}

.play_gamemode .box-title{
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.2vh;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000; 
}

.play_gamemode img{
    background-size: contain;
}

.room-selected{
    background-color:#C2191F;
}

.room-info{
    float:left;
}

.float_right{
    float:right;
}

.main_title{
    font-size: 7.5vh;
}

.presets_container{
    width: 70%; 
    margin: 5vh;
}

.preset_button_selected{
    background-color: green;
}

.rangeSliderHolder {
  width: 80%;
}

.fullscreen_window{
    position: absolute;    
    top: 8vh;
    bottom: 0%;
    left: 0%;
    right: 0%;
    padding: 5vh;
    padding-bottom: 15vh;
    background-image: radial-gradient(#29303E,#1F212A);
    background-size: 100% 100%;
}

.settings_container {
  height: 100%;
  width: 100%;
  margin-left: 5px;
  display: flex;
}

.info_box {
  height: 100%;
  width: calc(40%-5px);
  margin-left: 5px;
  font-size: 28px;
}

.settings_tab{
    height: 100%;
    width: 60%;
    overflow: scroll;
    overflow-x:hidden;
}

.setting_row {
    width: 100%;
    height: 4.5vh;
    left: auto;
    right: auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 0.2vh;
}

.settings_group:not(:first-child){
    margin-top: 50px;
}

.ui-spinner {
    width: 12.5vh;
    height: 3vh;
    font-size: 2.1vh;
    padding: 0;
    overflow: hidden;
    border-width: 0 !important;
}
.ui-spinner-input {
    margin: 0;
    padding: 0;
    padding-top: 0.15vh;
    padding-left: 0.45vh;
    vertical-align: top;
    width: 10vh;
}

input[type='range'] {
    overflow: hidden;
    width: 40vh;
    -webkit-appearance: none;
    border-width: 0;
    background-color: transparent;
    height: 2.35vh;
    margin: 0.57vh;
    margin-left: 1.2vh;
    margin-right: 1.2vh;
}

input[type='range']::-webkit-slider-runnable-track {
    height: 4.1vh;
    -webkit-appearance: none;
    color: #13bba4;
    border-width: 0;
    background-color: rgba(0,0,0, 0.2);
}

input[type='range']::-webkit-slider-thumb {
    width: 2.4vh;
    -webkit-appearance: none;
    height: 4.1vh;
    background: white;
    box-shadow: -40vh 0 0 40vh #18b8eb;
    border-width: 0;
}

#global_leaderboard{
    color: black;
}

  .square {
    width: .7em;
    height: .7em;
    margin: .5em;
    display: inline-block;
  }
  
  /* Custom dropdown */
  .preset_dropdown {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 1.4em;
    margin-top: 15px;
  }
  
  .preset_dropdown select {
    background-color: #000000;
    color: #fff;
    font-size: inherit;
    padding: .5em;
    padding-right: 2.5em;	
    border: 0;
    margin: 0;
    border-radius: 3px;
    text-indent: 0.01px;
    text-overflow: '';
    -webkit-appearance: button; /* hide default arrow in chrome OSX */
  }
  
  .preset_dropdown::before,
  .preset_dropdown::after {
    content: "";
    position: absolute;
    pointer-events: none;
  }
  
  .preset_dropdown::after { /*  Custom dropdown arrow */
    content: "\25BC";
    height: 1em;
    font-size: .625em;
    line-height: 1;
    right: 1.2em;
    top: 50%;
    margin-top: -.5em;
  }
  
  .preset_dropdown::before { /*  Custom dropdown arrow cover */
    width: 2em;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 3px 3px 0;
  }
  
  .preset_dropdown select[disabled] {
    color: rgba(0,0,0,.3);
  }
  
  .preset_dropdown select[disabled]::after {
    color: rgba(0,0,0,.1);
  }
  
  .preset_dropdown::before {
    background-color: rgba(255, 255, 255, 0.45);
  }
  
  .preset_dropdown::after {
    color: rgba(255, 255, 255, 0.6);
  }

.half_select_setting{
    position: relative;
    width: 90%;
    height: 20px;
    left: 50%;
    transform: translate(-50%,0);
    align-items: center;
}

.keybindSetting{
    float:right;
    width: 200px;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 10px;
    font-family: 'veneer', sans-serif, sans;
    font-size: 2.6vh;
    cursor: pointer;
}

.keybindSetting:hover {
    background-color: #4AA088;
}

  .leaderboard_table{
      width: 100%;
  }

  .leaderboard_table thead{
      font-size: 2em;
  }

  .leaderboard_table tbody {
    font-size: 1.5em;
  }

  .leaderboard_table p{
    width: 100%;
}

  .leaderboard_table td, .leaderboard_table th {
    border: 1px solid #FFFFFF;
    padding: 3px 2px;
  }

 

  .leaderboard_table tbody  tr:nth-child(even) {
    background-color: #4e4e4e;  
  }

  .leaderboard_table tbody  tr:nth-child(uneven) {
    background-color: #858585;      
}

  .leaderboard_table tbody tr:last-child {
      background-color: #818300;    
}

  .leaderboard_table thead {
    
    border-bottom: 5px solid #FFFFFF;
  }
  .leaderboard_table thead th {
    font-weight: bold;
    text-align: center;
    border-left: 2px solid #FFFFFF;
  }
  .leaderboard_table thead th:first-child {
    border-left: none;
  }

  .rename_preset_window{
      width: 350px;
      height: 175px;
      position: absolute;
      left: 0; 
      right: 0; 
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom:  auto;
      margin-left: auto; 
      margin-right: auto; 
      padding: 10px;

      background-color: rgb(146, 0, 0);
      z-index: 100;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .bottom_right{
    position: absolute;
    bottom: 10px;
    right: 50px;
  }

  .bottom_left{
    position: absolute;
    bottom: 10px;
  }

  .hidden{
      display: none;
  }


</style>
