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
						<select class="column" id="presetList"></select>
					</span>
					<div id="roomSettings">
						<div v-for="item of roomSettings" v-bind:key="item.id">
						<div>
							{{ item.displayName }}
						</div>
						<vue-slider v-model="item.value" :min="item.minValue" :max="item.maxValue" :interval="item.stepSize"></vue-slider>

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

	console.log(parsedData);

	var CurrentSettings = parsedData._settingsDefault;

	var defaultPreset =
		parsedData.Presets[parsedData.DefaultSettingsIndex].Settings;

	Object.keys(defaultPreset).forEach(key => {
		//console.log(`${key} : ${defaultPreset[key]}`);

		var result = CurrentSettings.find(obj => {
			return obj.bindedName === key;
		});

		result["value"] = defaultPreset[key];

	});

	window.roomSettings = CurrentSettings;
	window.roomName.value = parsedData.DisplayName;
	window.roomDescription = { value: parsedData.DisplayInformation };
	window.SceneName = parsedData.SceneName;
	window.LevelIndex = parsedData.LevelIndex;
};

window.roomName = { value: "nasds" };

export default {
	name: "RoomInfoScreen",
	data() {
		return {
			roomSettings: window.roomSettings,
			roomName: window.roomName,
			roomDescription: window.roomDescription
		};
	},
	components: {
		VueSlider
	},
	methods: {
		EnterRoom: function() {
			var returnData = [window.SceneName, window.LevelIndex, this.roomSettings]

			console.log(returnData);
			
			ENGINE_roomButtonClicked(returnData);

		}
	}
};
</script>

