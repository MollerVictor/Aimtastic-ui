<template>
	<div class="center_area fullscreen_window">
		<div>
			<div v-on:click="screenState = 'game'" data-settings-tab="#game_settings" class="button get-closer settings-tab-button">Game</div>
			<div v-on:click="screenState = 'keybinds'"
				data-settings-tab="#keybindings_settings"
				class="button get-closer settings-tab-button"
			>Keybindings</div>
			<div v-on:click="screenState = 'graphics'"
				data-settings-tab="#graphics_settings"
				class="button get-closer settings-tab-button"
			>Graphics</div>
			<div v-on:click="screenState = 'ui'" data-settings-tab="#ui_settings" class="button get-closer settings-tab-button">UI</div>
			<div v-on:click="screenState = 'audio'" data-settings-tab="#audio_settings" class="button get-closer settings-tab-button">Audio</div>
			<!--<div data-settings-tab='#movement_settings' class='button get-closer settings-tab-button'>Movement</div>-->
		</div>
		<div class="settings_container">
		<div id="game_settings" class="settings_tab"  v-if="screenState==='game'">
			<div>				
				<h2>Sensitivity</h2>

				<FloatSettingInput title="CSGO/Quake/Source Sensitivity" v-model="settings.value.PlayerSettings.Sensitivity" :min="0" :max="30" :step="0.001" bindedSetting="PlayerSettings.Sensitivity" info="Input the mouse sensitivity you used in any Source engine game."/>
				<FloatSettingInput title="X Multiplier" v-model="settings.value.PlayerSettings.XMultiplier" :min="0" :max="5" :step="0.01" bindedSetting="PlayerSettings.XMultiplier" info="Adjusting this slider will change the speed your camera moves horizontally on your screen."/>
				<FloatSettingInput title="Y Multiplier" v-model="settings.value.PlayerSettings.YMultiplier" :min="0" :max="5" :step="0.01" bindedSetting="PlayerSettings.YMultiplier" info="Adjusting this slider will change the speed your camera moves vertically on your screen."/>
						
				<br/>

				<BoolSettingInput title="Use Relative Zoom Sensitivity" v-model="settings.value.PlayerSettings.UseRelativeZoomSensitivity" bindedSetting="PlayerSettings.UseRelativeZoomSensitivity" info="This setting will make the zoom sensitivity relative to the normal sensitivity."/>
				<FloatSettingInput v-if="!settings.value.PlayerSettings.UseRelativeZoomSensitivity" title="Zoom Sensitivity" v-model="settings.value.PlayerSettings.ZoomSensitivity" :min="0" :max="30" :step="0.01" bindedSetting="PlayerSettings.ZoomSensitivity" info="Changing this will adjust the sensitivity your camera will move at when scoped into a weapon"/>
				<FloatSettingInput v-if="settings.value.PlayerSettings.UseRelativeZoomSensitivity"  title="Relative Zoom Sensitivity" v-model="settings.value.PlayerSettings.RelativeZoomSensitivity" :min="0" :max="100" :step="1" bindedSetting="playerSettings.RelativeZoomSensitivity" info="Sensitivity to use with relative zoom sensitivity activated."/>

				<BoolSettingInput title="Inverted Horizontal" v-model="settings.value.PlayerSettings.InvertedHorizontal" bindedSetting="PlayerSettings.InvertedHorizontal" info="Inverts the horizontal movement of your camera"/>
				<BoolSettingInput title="Inverted Vertical" v-model="settings.value.PlayerSettings.InvertedVertical" bindedSetting="PlayerSettings.InvertedVertical" info="Inverts the vertical movement of your camera"/>
			</div>
			<div>
				<h2>FOV</h2>

				<FloatSettingInput title="Vertical FOV" v-model="settings.value.PlayerSettings.FOV" :min="10" :max="150" :step="0.1" bindedSetting="PlayerSettings.FOV" info="Changes your vertical field of view"/>
				<FloatSettingInput title="Zoom Vertical FOV" v-model="settings.value.PlayerSettings.ZoomFOV" :min="10" :max="150" :step="0.1" bindedSetting="PlayerSettings.ZoomFOV" info="Changes your vertical field of view when scoped into a weapon"/>
				<FloatSettingInput title="Countdown Duration" v-model="settings.value.PlayerSettings.CountdownDuration" :min="0" :max="5" :step="0.1" bindedSetting="PlayerSettings.CountdownDuration" info="Controls length of countdown after you start a round."/>

				<div class="half_select_setting">
					<span class="select_label">Horizontal FOV</span>
					<span></span>
					<input class="hor" id="horizontal_fov" min="10" max="200" step="0.01" fov_type="horizontal" />
				</div>
			</div>
		</div>

		<div id="keybindings_settings" class="settings_tab"  v-if="screenState==='keybinds'">
			<div>
				<div class="settings_group">
					<h2>Movement</h2>
					<KeybindSettingInput title="Forward" v-model="settings.value.Keybinds.Forward" bindedSetting="Forward" info="Makes you go forward, duh."/>
					<KeybindSettingInput title="Backward" v-model="settings.value.Keybinds.Backward" bindedSetting="Backward" info="Makes you go backward, duh."/>
					<KeybindSettingInput title="Left" v-model="settings.value.Keybinds.Left" bindedSetting="Left" info="Strafe left."/>
					<KeybindSettingInput title="Right" v-model="settings.value.Keybinds.Right" bindedSetting="Right" info="Strafe right."/>

					<KeybindSettingInput title="Jump" v-model="settings.value.Keybinds.Jump" bindedSetting="Jump"/>
					<KeybindSettingInput title="Primary Fire" v-model="settings.value.Keybinds.PrimaryFire" bindedSetting="PrimaryFire"/>
					<KeybindSettingInput title="Zoom/ADS" v-model="settings.value.Keybinds.Zoom" bindedSetting="Zoom"/>
					<KeybindSettingInput title="Toggle Zoom/ADS" v-model="settings.value.Keybinds.ToggleZoom" bindedSetting="ToggleZoom"/>
					
					<KeybindSettingInput title="Reset" v-model="settings.value.Keybinds.Reset" bindedSetting="Reset"/>
				</div>
			</div>
		</div>

		<div id="graphics_settings" class="settings_tab" v-if="screenState==='graphics'">
			<div>
				<div class="settings_group">
					<h2>Resolution</h2>

					<div class="half_select_setting">
						<span class="select_label">Resolution</span>
						<select class="column listSetting" id="resoultions_list"></select>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Screen Option</span>
						<select class="column listSetting" id="fullscreen_options_list">
							<option>Exclusive FullScreen</option>
							<option>Fullscreen Windowed</option>
							<option>Windowed</option>
						</select>
					</div>
					<button class="ui button primary" onclick="changeResolution()">Apply</button>
				</div>

				<div class="settings_group">
					<h2>Graphics</h2>

					<IntSettingInput title="Max FPS" v-model="settings.value.GraphicsSettings.MaxFPS" :min="15" :max="500" :step="1" bindedSetting="GraphicsSettings.MaxFPS" info="Changing this will set a cap for your frame rate"/>

					<BoolSettingInput title="Render Gun" v-model="settings.value.GraphicsSettings.RenderGunModel" bindedSetting="GraphicsSettings.RenderGunModel" info="This checkbox will determine whether you have a gun rendered onscreen for the aim practices."/>

					<FloatSettingInput title="Max Bullet Decals" v-model="settings.value.GraphicsSettings.MaxBulletDecals" :min="0" :max="500" :step="1" bindedSetting="GraphicsSettings.MaxBulletDecals" info="Max amount of bullet decals in the world."/>

					<BoolSettingInput title="Show Hit Particles" v-model="settings.value.GraphicsSettings.UseHitParticles" bindedSetting="GraphicsSettings.UseHitParticles" info="If it should render particles when hiting things, like small wall debris."/>

					<FloatSettingInput title="Brightness" v-model="settings.value.GraphicsSettings.Brightness" :min="-5" :max="3" :step="0.2" bindedSetting="GraphicsSettings.Brightness" info="Adjusting this will change the gamma value of the game making it brighter or dimmer."/>
				</div>
			</div>

			<div class="far_right">
				<div class="settings_group">
					<!--<h2>Advanced</h2>

                            <div class="half_select_setting">
                                <span class="select_label">Bloom</span>
                                <label class="switch">
                                    <input type="checkbox" class="boolSetting" binded-setting="GraphicsSettings.UseBloom">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="half_select_setting">
                                <span class="select_label">Anti Aliasing</span>
                                <label class="switch">
                                    <input type="checkbox" class="boolSetting" binded-setting="GraphicsSettings.UseAA">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="half_select_setting">
                                <span class="select_label">Ambient Occlusion</span>
                                <label class="switch">
                                    <input type="checkbox" class="boolSetting" binded-setting="GraphicsSettings.UseAO">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="half_select_setting">
                                <span class="select_label">Temperature</span>
                                <input class="rangeSlider" type="range" min="-100" max="100" step="1">
                                <input class="spinner intSetting" binded-setting="GraphicsSettings.Temperature">
                            </div>
                            <div class="half_select_setting">
                                <span class="select_label">Tint</span>
                                <input class="rangeSlider" type="range" min="-100" max="100" step="1">
                                <input class="spinner intSetting" binded-setting="GraphicsSettings.Tint">
                            </div>
                            <div class="half_select_setting">
                                <span class="select_label">Hue Shift</span>
                                <input class="rangeSlider" type="range" min="-180" max="180" step="1">
                                <input class="spinner intSetting" binded-setting="GraphicsSettings.HueShift">
                            </div>
                            <div class="half_select_setting">
                                <span class="select_label">Saturation</span>
                                <input class="rangeSlider" type="range" min="0" max="2" step="0.1">
                                <input class="spinner floatSetting" binded-setting="GraphicsSettings.Saturation">
                            </div>
                            <div class="half_select_setting">
                                <span class="select_label">Contrast</span>
                                <input class="rangeSlider" type="range" min="0.2" max="2" step="0.1">
                                <input class="spinner floatSetting" binded-setting="GraphicsSettings.Contrast">
					</div>-->
				</div>
			</div>
		</div>

		<div id="ui_settings" class="settings_tab" v-if="screenState==='ui'">
			<div>
				<div class="settings_group">
					<h2>UI</h2>

					<BoolSettingInput title="Show Popup Score" v-model="settings.value.UiSettings.ShowPopupScore" bindedSetting="UiSettings.ShowPopupScore" info="This checkbox determines whether a popup scoreboard will appear after a round."/>

					<div>
						<img id="crosshairPreview" />
					</div>
				</div>
			</div>
			<div class="far_right">
				<div class="settings_group">
					<h2>Crosshair</h2>

					<IntSettingInput title="Crosshair Type" v-model="settings.value.CrosshairSettings.CrosshairType" :min="1" :max="2" :step="1" bindedSetting="CrosshairSettings.CrosshairType" info="Choose between crosshair preset 1 or 2"/>

				</div>
				<div class="settings_group" id="crosshair_type1" v-if="settings.value.CrosshairSettings.CrosshairType == 1">
					<h2>Crosshair Type 1</h2>
					<ListSettingInput title="Crosshair" :options=settings.value.Crosshairs v-model="settings.value.CrosshairSettings.CrosshairName"  bindedSetting="CrosshairSettings.CrosshairName" info="Select your crosshair from the default list or any you have imported."/>
				
					<ColorSettingInput title="Crosshair Color" :startColor="settings.value.CrosshairSettings.CrosshairImageColor" v-on:input="settings.value.CrosshairSettings.CrosshairImageColor = arguments[0]" bindedSetting="CrosshairSettings.CrosshairImageColor" info="Select the color of your hitmarker by entering an hex color value."/>

					<FloatSettingInput title="Crosshair Scale" v-model="settings.value.CrosshairSettings.CrosshairScale" :min="0.1" :max="3" :step="0.05" bindedSetting="CrosshairSettings.CrosshairScale" info="Hitmarker Scale."/>
				
				</div>
				<div class="settings_group" id="crosshair_type2" v-if="settings.value.CrosshairSettings.CrosshairType == 2">
					<h2>Crosshair Type 2</h2>

					<ColorSettingInput title="Crosshair Color" :startColor="settings.value.CrosshairSettings.CrosshairImageColor" v-on:input="settings.value.CrosshairSettings.CrosshairImageColor = arguments[0]" bindedSetting="CrosshairSettings.CrosshairImageColor" info="Change the color of the internal crosshair by entering a hex color code."/>
					<ColorSettingInput title="Crosshair Outline Color" :startColor="settings.value.CrosshairSettings.CrosshairOutlineColor" v-on:input="settings.value.CrosshairSettings.CrosshairOutlineColor = arguments[0]" bindedSetting="CrosshairSettings.CrosshairOutlineColor" info="Change the color of the outline of the crosshair by entering a hex color code."/>

					<IntSettingInput title="Crosshair Length" v-model="settings.value.CrosshairSettings.CrosshairLength" :min="0" :max="100" :step="1" bindedSetting="CrosshairSettings.CrosshairLength" info="Adjust the length of the arms of your crosshair."/>
					<IntSettingInput title="Crosshair Thickness" v-model="settings.value.CrosshairSettings.CrosshairThickness" :min="0" :max="8" :step="1" bindedSetting="CrosshairSettings.CrosshairThickness" info="Adjust the thickness of the arms of your crosshair."/>
					<IntSettingInput title="Crosshair Outline Thickness" v-model="settings.value.CrosshairSettings.CrosshairOutlineThickness" :min="0" :max="8" :step="1" bindedSetting="CrosshairSettings.CrosshairOutlineThickness" info="Adjust the thickness of the outline of your crosshair."/>
					<IntSettingInput title="Crosshair Gap" v-model="settings.value.CrosshairSettings.CrosshairGap" :min="-5" :max="40" :step="1" bindedSetting="CrosshairSettings.CrosshairGap" info="Adjust the space in the middle of the crosshair."/>
					<IntSettingInput title="Dot Size" v-model="settings.value.CrosshairSettings.DotSize" :min="0" :max="15" :step="1" bindedSetting="CrosshairSettings.DotSize" info="Adjust the size of the dot in the middle of the crosshair."/>
					<IntSettingInput title="Dot Outline Thickness" v-model="settings.value.CrosshairSettings.DotOutlineThickness" :min="0" :max="15" :step="1" bindedSetting="CrosshairSettings.DotOutlineThickness" info="Adjust the thickness of the outline of the dot in the middle of your crosshair."/>

			
					<ColorSettingInput title="Dot Color" :startColor="settings.value.CrosshairSettings.DotColor" v-on:input="settings.value.CrosshairSettings.DotColor = arguments[0]" bindedSetting="CrosshairSettings.DotColor" info="Change the color of the dot in your crosshair by entering in a hex color code."/>
					<ColorSettingInput title="Dot Outline Color" :startColor="settings.value.CrosshairSettings.DotOutlineColor" v-on:input="settings.value.CrosshairSettings.DotOutlineColor = arguments[0]" bindedSetting="CrosshairSettings.DotOutlineColor" info="Adjust the color of the outline of the dot in your crosshair by entering a hex color code."/>

					<BoolSettingInput title="Render Top" v-model="settings.value.CrosshairSettings.RenderCrosshairTop" bindedSetting="CrosshairSettings.RenderCrosshairTop" info="This checkbox will determine if this side of the crosshair is rendered."/>
					<BoolSettingInput title="Render Bottom" v-model="settings.value.CrosshairSettings.RenderCrosshairBottom" bindedSetting="CrosshairSettings.RenderCrosshairBottom" info="This checkbox will determine if this side of the crosshair is rendered."/>
					<BoolSettingInput title="Render Right" v-model="settings.value.CrosshairSettings.RenderCrosshairRight" bindedSetting="CrosshairSettings.RenderCrosshairRight" info="This checkbox will determine if this side of the crosshair is rendered."/>
					<BoolSettingInput title="Render Left" v-model="settings.value.CrosshairSettings.RenderCrosshairLeft" bindedSetting="CrosshairSettings.RenderCrosshairLeft" info="This checkbox will determine if this side of the crosshair is rendered."/>
					
				</div>

				<BoolSettingInput title="Use Hitmarkers" v-model="settings.value.CrosshairSettings.UseHitMarkers" bindedSetting="CrosshairSettings.UseHitMarkers" info="This checkbox will determine if you there will be hitmarkers on a succesful hit."/>

				<ListSettingInput title="Hitmarker" :options=settings.value.HitMarkers v-model="settings.value.CrosshairSettings.HitMarkerName"  bindedSetting="CrosshairSettings.HitMarkerName" info="Select your hitmarker from the default list or any you have imported."/>
				
				<ColorSettingInput title="Hitmarker Color" :startColor="settings.value.CrosshairSettings.HitMarkerColor" v-on:input="settings.value.CrosshairSettings.HitMarkerColor = arguments[0]" bindedSetting="CrosshairSettings.HitMarkerColor" info="Select the color of your hitmarker by entering an hex color value."/>

				<FloatSettingInput title="Hitmarker Alive Duration" v-model="settings.value.CrosshairSettings.HitMarkerAliveTime" :min="0.1" :max="1.5" :step="0.05" bindedSetting="CrosshairSettings.HitMarkerAliveTime" info="How long hitmakers stay alive"/>
				<FloatSettingInput title="Hitmarker Scale" v-model="settings.value.CrosshairSettings.HitMarkerScale" :min="0.1" :max="1.5" :step="0.05" bindedSetting="CrosshairSettings.HitMarkerScale" info="Changes scale of hitmarkers"/>

			</div>
		</div>
		<div id="audio_settings" class="settings_tab" v-if="screenState==='audio'">
			<div>
				<div class="settings_group">
					<h2>Volume</h2>


					<FloatSettingInput title="Master Volume" v-model="settings.value.AudioSettings.MasterVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.MasterVolume" info="This slider will control every sound produced by the game."/>
					<FloatSettingInput title="Gameplay Volume" v-model="settings.value.AudioSettings.GamePlayVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.GamePlayVolume" info="This slider will control gameplay sounds produced by the game. (Gunshots, hitmarkers, movement)"/>
					<FloatSettingInput title="Music Volume" v-model="settings.value.AudioSettings.MusicVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.MusicVolume" info="This slider will control music produced by the game."/>
					<FloatSettingInput title="Ambient Volume" v-model="settings.value.AudioSettings.AmbientVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.AmbientVolume" info="This slider will control ambient sounds produced by the game. (Enter examples here)"/>
					<FloatSettingInput title="UI Volume" v-model="settings.value.AudioSettings.UIVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.UIVolume" info="This slider will control sound produced by interacting with the UI."/>

				</div>
			</div>
			<div class="far_right">
				<div class="settings_group">
					<h2>Sounds</h2>
					<ListSettingInput title="Shot Sound" :options=settings.value.ShotSounds v-model="settings.value.AudioSettings.ShotSoundName"   bindedSetting="AudioSettings.ShotSoundName" info="Select your custom sound for shots from the default list or anything you have imported."/>
					<ListSettingInput title="Hit Sound" :options=settings.value.HitSounds v-model="settings.value.AudioSettings.TargetHitSoundName"   bindedSetting="AudioSettings.HitSoundName" info="Select your custom sound for hits from the default list or anything you have imported."/>
				</div>
			</div>
		</div>
		<div id="movement_settings" class="settings_tab" style="display: none;"></div>
		<div id="infoBox" class="info_box">Test Test Test</div>
	</div>

	</div>
</template>

<script>

window.onGettingSettings = function (jsonString) {
	var parsedData = JSON.parse(jsonString);

	console.log(parsedData);

	window.settings.value = parsedData;
};

window.settings = { value: ""};

/* global ENGINE_showCrosshairPreview */

import IntSettingInput from "./IntSettingInput.vue";
import FloatSettingInput from "./FloatSettingInput.vue";
import BoolSettingInput from "./BoolSettingInput.vue";
import ListSettingInput from "./ListSettingInput.vue";
import ColorSettingInput from "./ColorSettingInput.vue";
import KeybindSettingInput from "./KeybindSettingInput.vue";


export default {
	name: "SettingsScreen",
	components: {
		IntSettingInput,
		FloatSettingInput, 
		BoolSettingInput,
		ListSettingInput,
		ColorSettingInput,
		KeybindSettingInput
		},
		

	data() {
		return {
			settings: window.settings,
			screenState: "game",
		};
	},

	watch: {
		screenState: function(val) {
			if(val === "ui")
				ENGINE_showCrosshairPreview(true);
			else
				ENGINE_showCrosshairPreview(false);
		}
	}
};
</script>
