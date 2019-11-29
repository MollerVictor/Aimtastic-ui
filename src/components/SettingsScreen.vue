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

				<FloatSettingInput title="CSGO/Quake/Source Sensitivity" :value="settings.value.PlayerSettings.Sensitivity" :min="0" :max="30" :step="0.001" bindedSetting="PlayerSettings.Sensitivity"/>
				<FloatSettingInput title="X Multiplier" :value="settings.value.PlayerSettings.XMultiplier" :min="0" :max="5" :step="0.01" bindedSetting="PlayerSettings.XMultiplier"/>
				<FloatSettingInput title="Y Multiplier" :value="settings.value.PlayerSettings.YMultiplier" :min="0" :max="5" :step="0.01" bindedSetting="PlayerSettings.YMultiplier"/>
						
				<br />

				<BoolSettingInput title="Use Relative Zoom Sensitivity" :value="settings.value.PlayerSettings.UseRelativeZoomSensitivity" bindedSetting="PlayerSettings.UseRelativeZoomSensitivity" info="asdhakhsdkja"/>
				<FloatSettingInput title="Zoom Sensitivity" :value="settings.value.PlayerSettings.ZoomSensitivity" :min="0" :max="30" :step="0.01" bindedSetting="PlayerSettings.ZoomSensitivity"/>
				<FloatSettingInput title="Relative Zoom Sensitivity" :value="settings.value.PlayerSettings.RelativeZoomSensitivity" :min="0" :max="100" :step="1" bindedSetting="PlayerSettings.RelativeZoomSensitivity"/>

				<BoolSettingInput title="Inverted Horizontal" :value="settings.value.PlayerSettings.InvertedHorizontal" bindedSetting="PlayerSettings.InvertedHorizontal"/>
				<BoolSettingInput title="Inverted Vertical" :value="settings.value.PlayerSettings.InvertedVertical" bindedSetting="PlayerSettings.InvertedVertical"/>

	
			</div>
			<div>
				<h2>FOV</h2>

				<FloatSettingInput title="Vertical FOV" :value="settings.value.PlayerSettings.FOV" :min="10" :max="150" :step="0.1" bindedSetting="PlayerSettings.FOV"/>
				<FloatSettingInput title="Zoom Vertical FOV" :value="settings.value.PlayerSettings.ZoomFOV" :min="10" :max="150" :step="0.1" bindedSetting="PlayerSettings.ZoomFOV"/>
				<FloatSettingInput title="Countdown Duration" :value="settings.value.PlayerSettings.CountdownDuration" :min="0" :max="5" :step="0.1" bindedSetting="PlayerSettings.CountdownDuration"/>

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
					<div class="half_select_setting">
						<span class="select_label">Forward</span>
						<button class="keybindSetting" binded-action="Forward"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Backward</span>
						<button class="keybindSetting" binded-action="Backward"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Left</span>
						<button class="keybindSetting" binded-action="Left"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Right</span>
						<button class="keybindSetting" binded-action="Right"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Jump</span>
						<button class="keybindSetting" binded-action="Jump"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Primary Fire</span>
						<button class="keybindSetting" binded-action="PrimaryFire"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Zoom/ADS</span>
						<button class="keybindSetting" binded-action="Zoom"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Toggle Zoom/ADS</span>
						<button class="keybindSetting" binded-action="ToggleZoom"></button>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Reset</span>
						<button class="keybindSetting" binded-action="Reset"></button>
					</div>
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

					<IntSettingInput title="Max FPS" :value="settings.value.GraphicsSettings.MaxFPS" :min="15" :max="500" :step="1" bindedSetting="GraphicsSettings.MaxFPS"/>


					<div class="half_select_setting">
						<span class="select_label">Render Gun</span>
						<label class="switch">
							<input type="checkbox" class="boolSetting" binded-setting="GraphicsSettings.RenderGunModel" />
							<span class="slider"></span>
						</label>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Max Bullet Decals</span>
						<input class="rangeSlider" type="range" min="0" max="500" step="1" />
						<input class="spinner intSetting" binded-setting="GraphicsSettings.MaxBulletDecals" />
					</div>
					<div class="half_select_setting">
						<span class="select_label">Show Hit Particles</span>
						<label class="switch">
							<input type="checkbox" class="boolSetting" binded-setting="GraphicsSettings.UseHitParticles" />
							<span class="slider"></span>
						</label>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Brightness</span>
						<input class="rangeSlider" type="range" min="-5" max="3" step="0.2" />
						<input class="spinner floatSetting" binded-setting="GraphicsSettings.Brightness" />
					</div>
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

					<BoolSettingInput title="Show Popup Score" :value="settings.value.UiSettings.ShowPopupScore" bindedSetting="UiSettings.ShowPopupScore"/>
					<BoolSettingInput title="Use Hitmarkers" :value="settings.value.CrosshairSettings.UseHitMarkers" bindedSetting="CrosshairSettings.UseHitMarkers"/>

					
					<ListSettingInput title="Hitmarker" :options=settings.value.HitMarkers  bindedSetting="CrosshairSettings.HitMarkerName"/>
					
					<div class="half_select_setting">
						<span class="select_label">Hitmarker Color</span>
						<input class="colorSetting" type="text" binded-setting="CrosshairSettings.HitMarkerColor" />
					</div>
					
					<FloatSettingInput title="Hitmarker Alive Duration" :value="settings.value.CrosshairSettings.HitMarkerAliveTime" :min="0.1" :max="1.5" :step="0.05" bindedSetting="CrosshairSettings.HitMarkerAliveTime"/>
					<FloatSettingInput title="Hitmarker Scale" :value="settings.value.CrosshairSettings.HitMarkerScale" :min="0.1" :max="1.5" :step="0.05" bindedSetting="CrosshairSettings.HitMarkerScale"/>
					

					<div>
						<img id="crosshairPreview" />
					</div>
				</div>
			</div>
			<div class="far_right">
				<div class="settings_group">
					<h2>Crosshair</h2>

					<IntSettingInput title="Crosshair Type" :value="settings.value.CrosshairSettings.CrosshairType" :min="1" :max="2" :step="1" bindedSetting="CrosshairSettings.CrosshairType"/>
					
				</div>
				<div class="settings_group" id="crosshair_type1">
					<h2>Crosshair Type 1</h2>
					<ListSettingInput title="Crosshair" :options=settings.value.Crosshairs  bindedSetting="CrosshairSettings.CrosshairName"/>
				
					<div class="half_select_setting">
						<span class="select_label">Crosshair Color</span>
						<input
							class="colorSetting"
							type="text"
							binded-setting="CrosshairSettings.CrosshairImageColor"
						/>
					</div>

					<FloatSettingInput title="Hitmarker Scale" :value="settings.value.CrosshairSettings.CrosshairScale" :min="0.1" :max="3" :step="0.05" bindedSetting="CrosshairSettings.CrosshairScale"/>
				
				</div>
				<div class="settings_group" id="crosshair_type2">
					<h2>Crosshair Type 2</h2>
					<div class="half_select_setting">
						<span class="select_label">Crosshair Color</span>
						<input class="colorSetting" type="text" binded-setting="CrosshairSettings.CrosshairColor" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">Crosshair Outline Color</span>
						<input
							class="colorSetting"
							type="text"
							binded-setting="CrosshairSettings.CrosshairOutlineColor"
						/>
					</div>

					<IntSettingInput title="Crosshair Length" :value="settings.value.CrosshairSettings.CrosshairLength" :min="0" :max="100" :step="1" bindedSetting="CrosshairSettings.CrosshairLength"/>
					<IntSettingInput title="Crosshair Thickness" :value="settings.value.CrosshairSettings.CrosshairThickness" :min="0" :max="8" :step="1" bindedSetting="CrosshairSettings.CrosshairThickness"/>
					<IntSettingInput title="Crosshair Outline Thickness" :value="settings.value.CrosshairSettings.CrosshairOutlineThickness" :min="0" :max="8" :step="1" bindedSetting="CrosshairSettings.CrosshairOutlineThickness"/>
					<IntSettingInput title="Crosshair Gap" :value="settings.value.CrosshairSettings.CrosshairGap" :min="-5" :max="40" :step="1" bindedSetting="CrosshairSettings.CrosshairGap"/>
					<IntSettingInput title="Dot Size" :value="settings.value.CrosshairSettings.DotSize" :min="0" :max="15" :step="1" bindedSetting="CrosshairSettings.DotSize"/>
					<IntSettingInput title="Dot Outline Thickness" :value="settings.value.CrosshairSettings.DotOutlineThickness" :min="0" :max="15" :step="1" bindedSetting="CrosshairSettings.DotOutlineThickness"/>

			


					<div class="half_select_setting">
						<span class="select_label">Dot Color</span>
						<input class="colorSetting" type="text" binded-setting="CrosshairSettings.DotColor" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">Dot Outline Color</span>
						<input class="colorSetting" type="text" binded-setting="CrosshairSettings.DotOutlineColor" />
					</div>


					<BoolSettingInput title="Render Top" :value="settings.value.CrosshairSettings.RenderCrosshairTop" bindedSetting="CrosshairSettings.RenderCrosshairTop"/>
					<BoolSettingInput title="Render Bottom" :value="settings.value.CrosshairSettings.RenderCrosshairBottom" bindedSetting="CrosshairSettings.RenderCrosshairBottom"/>
					<BoolSettingInput title="Render Right" :value="settings.value.CrosshairSettings.RenderCrosshairRight" bindedSetting="CrosshairSettings.RenderCrosshairRight"/>
					<BoolSettingInput title="Render Left" :value="settings.value.CrosshairSettings.RenderCrosshairLeft" bindedSetting="CrosshairSettings.RenderCrosshairLeft"/>
					
				</div>
			</div>
		</div>
		<div id="audio_settings" class="settings_tab" v-if="screenState==='audio'">
			<div>
				<div class="settings_group">
					<h2>Volume</h2>


					<FloatSettingInput title="Master Volume" :value="settings.value.AudioSettings.MasterVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.MasterVolume"/>
					<FloatSettingInput title="Gameplay Volume" :value="settings.value.AudioSettings.GamePlayVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.GamePlayVolume"/>
					<FloatSettingInput title="Music Volume" :value="settings.value.AudioSettings.MusicVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.MusicVolume"/>
					<FloatSettingInput title="Ambient Volume" :value="settings.value.AudioSettings.AmbientVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.AmbientVolume"/>
					<FloatSettingInput title="UI Volume" :value="settings.value.AudioSettings.UIVolume" :min="0" :max="100" :step="1" bindedSetting="AudioSettings.UIVolume"/>

				</div>
			</div>
			<div class="far_right">
				<div class="settings_group">
					<h2>Sounds</h2>
					<ListSettingInput title="Shot Sound" :options=settings.value.ShotSounds  bindedSetting="AudioSettings.ShotSoundName"/>
					<ListSettingInput title="Hit Sound" :options=settings.value.HitSounds  bindedSetting="AudioSettings.HitSoundName"/>
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


import IntSettingInput from "./IntSettingInput.vue";
import FloatSettingInput from "./FloatSettingInput.vue";
import BoolSettingInput from "./BoolSettingInput.vue";
import ListSettingInput from "./ListSettingInput.vue";

export default {
	name: "SettingsScreen",
	components: {
		IntSettingInput,
		FloatSettingInput, 
		BoolSettingInput,
		ListSettingInput,
		},
		

	data() {
		return {
			settings: window.settings,
			screenState: "game",
		};
	},
};
</script>
