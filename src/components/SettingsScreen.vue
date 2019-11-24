<template>
	<div class="center_area fullscreen_window">
		<div>
			<div data-settings-tab="#game_settings" class="button get-closer settings-tab-button">Game</div>
			<div
				data-settings-tab="#keybindings_settings"
				class="button get-closer settings-tab-button"
			>Keybindings</div>
			<div
				data-settings-tab="#graphics_settings"
				class="button get-closer settings-tab-button"
			>Graphics</div>
			<div data-settings-tab="#ui_settings" class="button get-closer settings-tab-button">UI</div>
			<div data-settings-tab="#audio_settings" class="button get-closer settings-tab-button">Audio</div>
			<!--<div data-settings-tab='#movement_settings' class='button get-closer settings-tab-button'>Movement</div>-->
		</div>
		<div id="game_settings" class="settings_tab">
			<div>
				
				<h2>Sensitivity</h2>
				<SettingInput title="CSGO/Quake/Source Sensitivity" :min="0" :max="30" :step="0.001" bindedSetting="PlayerSettings.Sensitivity"/>
				<div class="half_select_setting">
					<span class="select_label">CSGO/Quake/Source Sensitivity</span>
					<input class="rangeSlider" id="sensitivity_input" type="range" min="0" max="30" step="0.001" />
					<input
						class="spinner floatSetting"
						id="sensitivity_spinner"
						binded-setting="PlayerSettings.Sensitivity"
					/>
				</div>

				<div class="half_select_setting">
					<span class="select_label">Overwatch Sensitivity</span>
					<span></span>
					<input
						class="sens_spinner"
						id="sensitivity_overwatch"
						min="0"
						max="100"
						step="0.01"
						sens_type="ow"
					/>
				</div>
				<div class="half_select_setting">
					<span class="select_label">Fortnite Sensitivity</span>
					<span></span>
					<input
						class="sens_spinner"
						id="sensitivity_fortnite"
						min="0"
						max="10"
						step="0.01"
						sens_type="fortnite"
					/>
				</div>

				<div class="half_select_setting">
					<span class="select_label">X Multiplier</span>
					<input class="rangeSlider" type="range" min="0" max="5" step="0.01" />
					<input class="spinner floatSetting" binded-setting="PlayerSettings.XMultiplier" />
				</div>

				<div class="half_select_setting">
					<span class="select_label">Y Multiplier</span>
					<input class="rangeSlider" type="range" min="0" max="5" step="0.01" />
					<input class="spinner floatSetting" binded-setting="PlayerSettings.YMultiplier" />
				</div>

				<!--<div class="half_select_setting">
                            <span class="select_label">DPI</span>
                            <input class="rangeSlider" id="sensitivity_input" type="range" min="0" max="30000" step="10">
                            <input class="spinner intSetting"  id="dpi_spinner"  binded-setting="PlayerSettings.DPI">                            
                        </div>
                        
                        <div class="half_select_setting">
                            <span class="select_label">CM/360</span>
                            <label id="cm360_label"></label>                             
                        </div>
				-->
				<br />
				<div class="half_select_setting">
					<span class="select_label">Use Relative Zoom Sensitivity</span>
					<label class="switch">
						<input
							type="checkbox"
							class="boolSetting"
							binded-setting="PlayerSettings.UseRelativeZoomSensitivity"
						/>
						<span class="slider"></span>
					</label>
				</div>

				<div class="half_select_setting">
					<span class="select_label">Zoom Sensitivity</span>
					<input class="rangeSlider" type="range" min="0" max="30" step="0.01" />
					<input class="spinner floatSetting" binded-setting="PlayerSettings.ZoomSensitivity" />
				</div>

				<div class="half_select_setting">
					<span class="select_label">Relative Zoom Sensitivity</span>
					<input class="rangeSlider" type="range" min="0" max="100" step="1" />
					<input class="spinner floatSetting" binded-setting="PlayerSettings.RelativeZoomSensitivity" />
				</div>

				<div class="half_select_setting">
					<span class="select_label">Inverted Horizontal</span>
					<label class="switch">
						<input type="checkbox" class="boolSetting" binded-setting="PlayerSettings.InvertedHorizontal" />
						<span class="slider"></span>
					</label>
				</div>

				<div class="half_select_setting">
					<span class="select_label">Inverted Vertical</span>
					<label class="switch">
						<input type="checkbox" class="boolSetting" binded-setting="PlayerSettings.InvertedVertical" />
						<span class="slider"></span>
					</label>
				</div>
			</div>
			<div>
				<h2>FOV</h2>
				<div class="half_select_setting">
					<span class="select_label">Vertical FOV</span>
					<input class="rangeSlider" id="vertical_fov" type="range" min="10" max="150" step="1" />
					<input class="spinner floatSetting" id="vertical_spinner" binded-setting="PlayerSettings.FOV" />
				</div>
				<div class="half_select_setting">
					<span class="select_label">Horizontal FOV</span>
					<span></span>
					<input class="hor" id="horizontal_fov" min="10" max="200" step="0.01" fov_type="horizontal" />
				</div>

				<div class="half_select_setting">
					<span class="select_label">Zoom Vertical FOV</span>
					<input class="rangeSlider" type="range" min="10" max="150" step="1" />
					<input class="spinner floatSetting" binded-setting="PlayerSettings.ZoomFOV" />
				</div>

				<div class="half_select_setting">
					<span class="select_label">Countdown Duration</span>
					<input class="rangeSlider" type="range" min="0" max="5" step="0.1" />
					<input class="spinner floatSetting" binded-setting="PlayerSettings.CountdownDuration" />
				</div>
			</div>
		</div>

		<div id="keybindings_settings" class="settings_tab" style="display: none;">
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

		<div id="graphics_settings" class="settings_tab" style="display: none;">
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

					<div class="half_select_setting">
						<span class="select_label">Max FPS</span>
						<input class="rangeSlider" type="range" min="15" max="500" step="1" />
						<input class="spinner intSetting" binded-setting="GraphicsSettings.MaxFPS" />
					</div>

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

		<div id="ui_settings" class="settings_tab" style="display: none;">
			<div>
				<div class="settings_group">
					<h2>UI</h2>
					<div class="half_select_setting">
						<span class="select_label">Show Popup Score</span>
						<label class="switch">
							<input type="checkbox" class="boolSetting" binded-setting="UISettings.ShowPopupScore" />
							<span class="slider"></span>
						</label>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Use Hitmarkers</span>
						<label class="switch">
							<input type="checkbox" class="boolSetting" binded-setting="CrosshairSettings.UseHitMarkers" />
							<span class="slider"></span>
						</label>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Hitmarker</span>
						<select
							class="column listSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.HitMarkerName"
							id="hitmarkerList"
						></select>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Hitmarker Color</span>
						<input class="colorSetting" type="text" binded-setting="CrosshairSettings.HitMarkerColor" />
					</div>
					<div class="half_select_setting">
						<span class="select_label">Hitmarker Alive Duration</span>
						<input class="rangeSlider" type="range" min="0.1" max="1.5" step="0.05" />
						<input
							class="spinner floatSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.HitMarkerAliveTime"
						/>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Hitmarker Scale</span>
						<input class="rangeSlider" type="range" min="0.1" max="1.5" step="0.05" />
						<input
							class="spinner floatSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.HitMarkerScale"
						/>
					</div>
					<div>
						<img id="crosshairPreview" />
					</div>
				</div>
			</div>
			<div class="far_right">
				<div class="settings_group">
					<h2>Crosshair</h2>
					<div class="half_select_setting">
						<span class="select_label">Crosshair Type</span>
						<input class="rangeSlider" type="range" min="1" max="2" step="1" />
						<input
							class="spinner intSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.CrosshairType"
							id="crosshair_type_spinner"
						/>
					</div>
				</div>
				<div class="settings_group" id="crosshair_type1">
					<h2>Crosshair Type 1</h2>
					<div class="half_select_setting">
						<span class="select_label">Crosshair</span>
						<select
							class="column listSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.CrosshairName"
							id="crosshairList"
						></select>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Crosshair Color</span>
						<input
							class="colorSetting"
							type="text"
							binded-setting="CrosshairSettings.CrosshairImageColor"
						/>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Crosshair Scale</span>
						<input class="rangeSlider" type="range" min="0.1" max="3" step="0.05" />
						<input
							class="spinner floatSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.CrosshairScale"
						/>
					</div>
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

					<div class="half_select_setting">
						<span class="select_label">Crosshair Length</span>
						<input class="rangeSlider" type="range" min="0" max="100" step="1" />
						<input
							class="spinner intSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.CrosshairLength"
						/>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Crosshair Thickness</span>
						<input class="rangeSlider" type="range" min="0" max="8" step="1" />
						<input
							class="spinner intSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.CrosshairThickness"
						/>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Crosshair Outline Thickness</span>
						<input class="rangeSlider" type="range" min="0" max="8" step="1" />
						<input
							class="spinner intSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.CrosshairOutlineThickness"
						/>
					</div>
					<div class="half_select_setting">
						<span class="select_label">Crosshair Gap</span>
						<input class="rangeSlider" type="range" min="-5" max="40" step="1" />
						<input
							class="spinner intSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.CrosshairGap"
						/>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Dot Size</span>
						<input class="rangeSlider" type="range" min="0" max="15" step="1" />
						<input
							class="spinner intSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.DotSize"
						/>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Dot Outline Thickness</span>
						<input class="rangeSlider" type="range" min="0" max="15" step="1" />
						<input
							class="spinner intSetting crosshairLiveUpdate"
							binded-setting="CrosshairSettings.DotOutlineThickness"
						/>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Dot Color</span>
						<input class="colorSetting" type="text" binded-setting="CrosshairSettings.DotColor" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">Dot Outline Color</span>
						<input class="colorSetting" type="text" binded-setting="CrosshairSettings.DotOutlineColor" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">Render Top</span>
						<label class="switch">
							<input
								type="checkbox"
								class="boolSetting"
								binded-setting="CrosshairSettings.RenderCrosshairTop"
							/>
							<span class="slider"></span>
						</label>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Render Bottom</span>
						<label class="switch">
							<input
								type="checkbox"
								class="boolSetting"
								binded-setting="CrosshairSettings.RenderCrosshairBottom"
							/>
							<span class="slider"></span>
						</label>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Render Right</span>
						<label class="switch">
							<input
								type="checkbox"
								class="boolSetting"
								binded-setting="CrosshairSettings.RenderCrosshairRight"
							/>
							<span class="slider"></span>
						</label>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Render Left</span>
						<label class="switch">
							<input
								type="checkbox"
								class="boolSetting"
								binded-setting="CrosshairSettings.RenderCrosshairLeft"
							/>
							<span class="slider"></span>
						</label>
					</div>
				</div>
			</div>
		</div>
		<div id="audio_settings" class="settings_tab" style="display: none;">
			<div>
				<div class="settings_group">
					<h2>Volume</h2>
					<div class="half_select_setting">
						<span class="select_label">Master Volume</span>
						<input class="rangeSlider" type="range" min="0" max="100" step="1" />
						<input class="spinner floatSetting" binded-setting="AudioSettings.MasterVolume" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">Gameplay Volume</span>
						<input class="rangeSlider" type="range" min="0" max="100" step="1" />
						<input class="spinner floatSetting" binded-setting="AudioSettings.GamePlayVolume" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">Music Volume</span>
						<input class="rangeSlider" type="range" min="0" max="100" step="1" />
						<input class="spinner floatSetting" binded-setting="AudioSettings.MusicVolume" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">Ambient Volume</span>
						<input class="rangeSlider" type="range" min="0" max="100" step="1" />
						<input class="spinner floatSetting" binded-setting="AudioSettings.AmbientVolume" />
					</div>

					<div class="half_select_setting">
						<span class="select_label">UI Volume</span>
						<input class="rangeSlider" type="range" min="0" max="100" step="1" />
						<input class="spinner floatSetting" binded-setting="AudioSettings.UIVolume" />
					</div>
				</div>
			</div>
			<div class="far_right">
				<div class="settings_group">
					<h2>Sounds</h2>
					<div class="half_select_setting">
						<span class="select_label">Shot Sound</span>
						<select
							class="column listSetting"
							binded-setting="AudioSettings.ShotSoundName"
							id="shotSoundList"
						></select>
					</div>

					<div class="half_select_setting">
						<span class="select_label">Hit Sound</span>
						<select
							class="column listSetting"
							binded-setting="AudioSettings.TargetHitSoundName"
							id="hitSoundList"
						></select>
					</div>
				</div>
			</div>
		</div>

		<div id="movement_settings" class="settings_tab" style="display: none;"></div>
		<button class="ui button secondary" onclick="switch_screens(null)">Close</button>
		<button class="ui button primary" onclick="settingsApplyed()" id="settingsApplyButton">Apply</button>
	</div>
</template>

<script>

import SettingInput from "./SettingInput.vue";

export default {
	name: "SettingsScreen",
	components: {SettingInput}
};
</script>

