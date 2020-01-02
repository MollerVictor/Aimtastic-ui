<template>
	<div  class="info_box">
		<div v-if="data!=='SensitivitySettingInput' && data !== 'FOV'">{{ data }}</div>

		<div v-if="data==='FOV'">
			<h3>FOV</h3>

			<FloatSettingInput title="Vertical FOV" v-model="settings.value.PlayerSettings.FOV" :min="10" :max="150" :step="0.1" bindedSetting="PlayerSettings.FOV" :dontSaveToConfig="true"/>
			<HorizontalFOVInfoBoxInput title="Horizontal FOV" v-model="settings.value.PlayerSettings.FOV" :min="10" :max="180" :step="0.1" bindedSetting="PlayerSettings.FOV"/>
		</div>

		<div v-if="data==='SensitivitySettingInput'">
			<h3>Sensitivity</h3>
			
			<div class="half_select_setting">
				<span class="select_label">Your DPI:</span>

				<div class="inputSpinnerHolder" style="width: 15vh; margin-left: 5vh;">					
					<vue-numeric-input @input="dpiValueChanged" v-model="settings.value.PlayerSettings.DPI" :min="0" :max="30000" :step="5"></vue-numeric-input>
				</div>
			</div>
			
			<Cm360InfoBoxInput v-if="settings.value.PlayerSettings.DPI > 0" title="cm/360" :dpi="settings.value.PlayerSettings.DPI"  v-model="settings.value.PlayerSettings.Sensitivity"/>
	
			<SensitivityInfoBoxInput title="CSGO/Quake/Source" 	v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="1" 		:min="0.01" 	:step="0.01" />
			<SensitivityInfoBoxInput title="Rainbow 6: Siege" 	v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="3.8402" 	:min="0.01" 	:step="0.01" />
			<SensitivityInfoBoxInput title="Fortnite" 			v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="1/25" 		:min="0.001" 	:step="0.001"/>
			<SensitivityInfoBoxInput title="Overwatch" 			v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="10/3" 		:min="0.01" 	:step="0.01" />
			
		</div>
	</div>
</template>

<script>

import VueNumericInput from 'vue-numeric-input'


import SensitivityInfoBoxInput from "./infobox/SensitivityInfoBoxInput.vue";
import FloatSettingInput from "./FloatSettingInput.vue";
import Cm360InfoBoxInput from "./infobox/Cm360InfoBoxInput.vue";
import HorizontalFOVInfoBoxInput from "./infobox/HorizontalFOVInfoBoxInput.vue";




export default {
	name: "InfoBox",
	props: ["data"],

	components: {
		SensitivityInfoBoxInput,
		FloatSettingInput,
		VueNumericInput,
		Cm360InfoBoxInput,
		HorizontalFOVInfoBoxInput
	},

	
	data() {
		return {
			settings: window.settings,
			screenState: "game"
		};
	},

	

	methods: {
		dpiValueChanged: function(newValue) {
			ENGINE_settingsChanged("PlayerSettings.DPI", newValue, "int");
		}
	}
};
</script>