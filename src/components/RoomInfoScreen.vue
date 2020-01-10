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
				<div id="presetInfo" v-if="this.presets.value.length > 0">
					<button onmouseover="ENGINE_playHoverSound()" class="button room-button" @click="addPreset">Add New Preset</button>
					<button onmouseover="ENGINE_playHoverSound()" class="button room-button" :disabled="!isLocked.value" @click="deletePreset" >Delete Preset</button>
	
					<button onmouseover="ENGINE_playHoverSound()" class="button room-button" :disabled="!isLocked.value" @click="showEditWindow = true">Edit Preset</button>

					<span class="preset_dropdown">
						<select class="column" v-model="selectedPreset"  @input="onPresetChange($event, $event.target.selectedIndex)">
							<option  v-for="item of presets.value" v-bind:key="item.id">
								{{ item.Name }}
							</option>
						</select>
					</span>
					<div id="roomSettings">
						<div v-for="item of roomSettings.value" v-bind:key="item.id" class="room_settings_data">
							<div class="room_settings_data_name">
								{{ item.displayName }}
							</div>
							<div>
								{{ item.value }}
							</div>
						</div>
					</div>
				</div>
				<button onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" class="button room-button" v-on:click="EnterRoom" >Play</button>
			</div>
			<div>
				<RoomInfoLeaderboard v-if="UseHighScores.value"/>
			</div>
		</div>

		<br style="clear: both;" />
		<div>
			<button onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" class="button room-button" v-on:click="$emit('menu-button-pressed', 'Play')">Back</button>
		</div>

		<RoomInfoSettingsPopup v-if="showEditWindow" 
			:settings="roomSettings.value" 
			:presetName="presets.value[selectedPresetIndex.value].Name"  
			:presetIndex="selectedPresetIndex.value"			
			v-on:closePopupSettings="closePopupSettings" 
			v-on:presetSettingChanged="presetSettingChanged"
			v-on:presetNameChanged="presetNameChanged"/>

	</div>
</template>

<script>
/* global ENGINE_roomButtonClicked ENGINE_deleteRoomPreset ENGINE_createNewRoomPreset ENGINE_renameRoomPreset */

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import RoomInfoLeaderboard from "./RoomInfoLeaderboard.vue";
import RoomInfoSettingsPopup from "./RoomInfoSettingsPopup.vue";


window.onRequestRoomSettings = function (jsonString) {
	window.leaderboardLoading.value = true;
	window.myEntry.value = null;

	var parsedData = JSON.parse(jsonString);

	console.log(parsedData);



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

	//console.log("RoomInfo", parsedData);

	window.presets.value = parsedData.Presets;
	window.roomSettings.value = [];	//We clear it incase we have a room with no settings	
	window.roomSettings.value = CurrentSettings;	
	window.roomName.value = parsedData.DisplayName;
	window.roomDescription.value = parsedData.DisplayInformation;	
	window.SceneName.value = parsedData.SceneName;	
	window.LevelIndex.value = parsedData.LevelIndex;
	window.UseHighScores.value = parsedData.UseHighScores;
	
	if(parsedData.Presets.length > 0){
		window.selectedPreset.value = parsedData.Presets[parsedData.DefaultSettingsIndex].Name;
		window.selectedPresetIndex.value = parsedData.DefaultSettingsIndex;
		window.isLocked.value = parsedData.Presets[parsedData.DefaultSettingsIndex].AllowChangingValues;
	}
	else
	{
		window.selectedPresetIndex.value = 0;
		window.isLocked.value = false;
	}

	window.screenState.value = "RoomInfo";
};

window.presets = { value: []};
window.roomSettings = { value: []};	//Handling sliders name, min,max, current value.
window.roomName = { value: "" };
window.roomDescription = { value: "" };
window.SceneName = { value: ""};
window.LevelIndex = { value: ""};
window.UseHighScores = { value: ""};


window.selectedPreset = { value: ""};
window.selectedPresetIndex = { value: -1};
window.isLocked = { value: ""};


export default {
	name: "RoomInfoScreen",
	components: {
		VueSlider,
		RoomInfoLeaderboard,
		RoomInfoSettingsPopup
	},
	data() {
		return {
			roomSettings: window.roomSettings,
			roomName: window.roomName,
			roomDescription: window.roomDescription,
			presets: window.presets,
			//selectedPreset: window.selectedPreset,
			selectedPresetIndex: window.selectedPresetIndex,
			isLocked: window.isLocked,
			UseHighScores: window.UseHighScores,

			showEditWindow: false
		};
	},
	computed:{
		selectedPreset: function () {
			if(this.presets.value.length > 0)
				return this.presets.value[window.selectedPresetIndex.value].Name;
			
			return "";
		}
	},	
	methods: {
		EnterRoom: function() {
			var returnData = [window.SceneName.value, window.LevelIndex.value, window.selectedPresetIndex.value]

			console.log(returnData);
			
			ENGINE_roomButtonClicked(returnData);

		},
		onPresetChange(event, index) {

			console.log("preset change,", event, index);

			Object.keys(this.presets.value[index].Settings).forEach(key => {
				var result = this.roomSettings.value.find(obj => {
					return obj.bindedName === key;
				});

				result["value"] = this.presets.value[index].Settings[key];					
		
			});

			this.selectedPresetIndex.value = index;						
			window.isLocked.value = this.presets.value[index].AllowChangingValues;
		},
		
		deletePreset(){
			ENGINE_deleteRoomPreset(this.selectedPresetIndex.value);

			
			this.presets.value.splice(this.selectedPresetIndex.value, 1);
			

			if(this.selectedPresetIndex.value >= this.presets.value.length){
				this.selectedPresetIndex.value = this.presets.value.length - 1;
			}

			var index = this.selectedPresetIndex.value;

			Object.keys(this.presets.value[index].Settings).forEach(key => {
				var result = this.roomSettings.value.find(obj => {
					return obj.bindedName === key;
				});

				result["value"] = this.presets.value[index].Settings[key];					
		
			});

			//window.selectedPreset.value = this.presets.value[index].Name;
									
			window.isLocked.value = this.presets.value[index].AllowChangingValues;
		},

		addPreset(){
			ENGINE_createNewRoomPreset(this.selectedPresetIndex.value);


			var index = this.selectedPresetIndex.value;
	
			var newPreset = Object.assign({}, this.presets.value[index]);

			var newPresetName = this.presets.value[index].Name + " Copy";
			newPreset.Name = newPresetName;
			newPreset.AllowChangingValues = true;

			this.presets.value.push(newPreset);


			this.selectedPresetIndex.value = this.presets.value.length - 1;
			//this.selectedPreset.value = newPresetName;
			this.isLocked.value = this.presets.value[this.selectedPresetIndex.value].AllowChangingValues;

			console.log(newPreset);	
		},

		closePopupSettings() {
			this.showEditWindow = false;
		},
		presetSettingChanged(bindedName, newValue){
			this.presets.value[this.selectedPresetIndex.value].Settings[bindedName] = newValue;
		},
		presetNameChanged(newName){
			this.presets.value[this.selectedPresetIndex.value].Name = newName;
			//this.$forceUpdate();

			console.log("name change,", newName);

			ENGINE_renameRoomPreset(this.selectedPresetIndex.value, newName);
		}
	},
	
};
</script>


<style scoped>
.room_settings_data{
	display: flex;
	font-size: 2.5vh;;
}

.room_settings_data_name{
	width: 45%;
    margin-bottom: 2vh;    
}

</style>