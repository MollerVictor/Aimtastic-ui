<template>
	<div id="room_info_screen" class="center_area fullscreen_window">
		<div id="selected_room_title" class="main_title floating_title"> {{ roomName.value }}</div>
		<div style="display:grid;  grid-template-columns: 1fr 1fr;">
			<div class="room-info">
				<div>
					<p id="selected_room_desc">
						{{ roomDescription.value }}
					</p>
					<!--<img src="resources/images/rooms/360.png" style="width: 30vh; height: auto; display:none"/> -->
				</div>
				<div id="presetInfo">
					<button class="ui button primary" onclick="createNewRoomPreset()">Add Preset</button>
					<button
						class="ui button primary"
						onclick="deleteRoomPreset()"
						id="deletePresetButton"
					>Delete Preset</button>
					<button
						class="ui button primary"
						onclick="openRenamePresetWindow()"
						id="renamePresetButton"
					>Rename Preset</button>
					<div class="rename_preset_window" style="display:none;">
						<h3>Rename</h3>
						<input type="text" id="rename_preset_input" />
						<br />
						<button class="ui button secondary bottom_left" onclick="hideRenamePresetWindow()">Cancel</button>
						<button class="ui button primary bottom_right" onclick="applyRenamePresetWindow()">Apply</button>
					</div>

					<span class="preset_dropdown">
						<select class="column" id="presetList" v-model="selectedPreset.value" @change="onPresetChange($event)">
							<option  v-for="item of presets.value" v-bind:key="item.id">
								{{ item.Name }}
							</option>
						</select>
					</span>
					<div id="roomSettings">
						<div v-for="item of roomSettings.value" v-bind:key="item.id">
							<div>
								{{ item.displayName }}
							</div>
							<vue-slider  :disabled="!isLocked.value" :silent="true" :adsorb="true" :min="item.minValue" :max="item.maxValue" :interval="item.stepSize" v-model="item.value"></vue-slider>
							<!-- We make slider silent because of this https://github.com/NightCatSama/vue-slider-component/issues/343 -->
						</div>
					</div>
				</div>
				<button class="ui button primary" v-on:click="EnterRoom" >Play</button>
			</div>
			<div>
				<div>
					<table id="global_leaderboard_table" class="leaderboard_table">
						<thead>
							<tr>
								<td>Rank</td>
								<td>Name</td>
								<td>Score</td>
								<td>Hits</td>
								<td>Misses</td>
								<td>Hit %</td>
							</tr>
						</thead>
						<tbody>
							<tr class="dont_remove">
								<td id="select_room_my_rank">Rank</td>
								<td id="select_room_my_name">Name</td>
								<td id="select_room_my_score">Score</td>
								<td id="select_room_my_hits">Hits</td>
								<td id="select_room_my_misses">Misses</td>
								<td id="select_room_my_hitprocent">%</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<table class="leaderboard_table">
						<tbody></tbody>
					</table>
				</div>
			</div>
		</div>

		<br style="clear: both;" />
		<div>
			<button class="ui button secondary" onclick="switch_screens('#play_screen')">Back</button>
		</div>
	</div>
</template>

<script>
/* global ENGINE_roomButtonClicked */

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

window.onRequestRoomSettings = function (jsonString) {
	var parsedData = JSON.parse(jsonString);

	var CurrentSettings = parsedData._settingsDefault;

	if(parsedData.Presets.length > 0){
		var defaultPreset =
			parsedData.Presets[parsedData.DefaultSettingsIndex].Settings;

		Object.keys(defaultPreset).forEach(key => {
			//console.log(`${key} : ${defaultPreset[key]}`);

			var result = CurrentSettings.find(obj => {
				return obj.bindedName === key;
			});

			result["value"] = defaultPreset[key];
		});
	}

	window.roomSettings.value = [];	//We clear it incase we have a room with no settings
	window.presets.value = parsedData.Presets;
	window.roomSettings.value = CurrentSettings;
	window.roomName.value = parsedData.DisplayName;
	window.roomDescription.value = parsedData.DisplayInformation;
	window.SceneName.value = parsedData.SceneName;
	window.LevelIndex.value = parsedData.LevelIndex;

	window.selectedPreset.value = parsedData.Presets[parsedData.DefaultSettingsIndex].Name;

	window.isLocked.value = parsedData.Presets[parsedData.DefaultSettingsIndex].AllowChangingValues;
};

window.presets = { value: []};
window.roomSettings = { value: []};	//Handling sliders name, min,max, current value.
window.roomName = { value: "" };
window.roomDescription = { value: "" };
window.SceneName = { value: ""};
window.LevelIndex = { value: ""};

window.selectedPreset = { value: ""};
window.isLocked = { value: ""};


export default {
	name: "RoomInfoScreen",
	data() {
		return {
			roomSettings: window.roomSettings,
			roomName: window.roomName,
			roomDescription: window.roomDescription,
			presets: window.presets,
			selectedPreset: window.selectedPreset,
			isLocked: window.isLocked,
		};
	},
	components: {
		VueSlider
	},
	methods: {
		EnterRoom: function() {
			var returnData = [window.SceneName.value, window.LevelIndex.value, this.roomSettings.value]

			console.log(returnData);
			
			ENGINE_roomButtonClicked(returnData);

		},
		onPresetChange(event) {

			for(var i = 0; i < this.presets.value.length; i++){				
				if(this.presets.value[i].Name === event.target.value){									
					Object.keys(this.presets.value[i].Settings).forEach(key => {
						var result = this.roomSettings.value.find(obj => {
							return obj.bindedName === key;
						});

						result["value"] = this.presets.value[i].Settings[key];					

						console.log();
						window.isLocked.value = this.presets.value[i].AllowChangingValues;

					});

					break;
				}
			}
        }
	},
	
};
</script>

