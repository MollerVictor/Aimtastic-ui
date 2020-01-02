<template>
	<div  class="info_box">
		<div v-if="data!=='SensitivitySettingInput' && data !== 'FOV'">{{ data }}</div>


		<div v-if="data==='FOV'">
			<h3>FOV</h3>
			<FloatSettingInput title="Vertical FOV" v-model="settings.value.PlayerSettings.FOV" :min="10" :max="150" :step="0.1" bindedSetting="PlayerSettings.FOV"/>
			<HorizontalFOVInfoBoxInput title="Horizontal FOV" v-model="settings.value.PlayerSettings.FOV" :min="10" :max="180" :step="0.1" bindedSetting="PlayerSettings.FOV"/>
			
			
		</div>

		<div v-if="data==='SensitivitySettingInput'">
			<h3>Sensitivity</h3>
			
			<div class="half_select_setting">
				<span class="select_label">Your DPI:</span>

				<div class="inputSpinnerHolder" style="width: 15vh; margin-left: 5vh;">
					<VueNumberInput @change="dpiValueChanged"  :step="5" :min="0" :max="30000"  v-model="settings.value.PlayerSettings.DPI" controls center></VueNumberInput>
				</div>
			</div>
			
			<Cm360InfoBoxInput v-if="settings.value.PlayerSettings.DPI > 0" title="cm/360" :dpi="settings.value.PlayerSettings.DPI"  	v-model="settings.value.PlayerSettings.Sensitivity" bindedSetting="PlayerSettings.Sensitivity"/>
	
			<SensitivityInfoBoxInput title="CSGO/Quake/Source" :value2="settings.value.PlayerSettings.Sensitivity"	v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="1" 		:min="0.01" 	 :step="0.01" 	bindedSetting="PlayerSettings.Sensitivity"/>
			<SensitivityInfoBoxInput title="Rainbow 6: Siege" :value2="settings.value.PlayerSettings.Sensitivity"	v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="3.8402" 	:min="0.01" :step="0.01" 	bindedSetting="PlayerSettings.Sensitivity"/>
			<SensitivityInfoBoxInput title="Fortnite" 		:value2="settings.value.PlayerSettings.Sensitivity"	v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="1/25" 		:min="0.001" :step="0.001" 	bindedSetting="PlayerSettings.Sensitivity"/>
			<SensitivityInfoBoxInput title="Overwatch" 		:value2="settings.value.PlayerSettings.Sensitivity"	v-model="settings.value.PlayerSettings.Sensitivity" :multiplier="10/3" 		:min="0.01" :step="0.01" 	bindedSetting="PlayerSettings.Sensitivity"/>
		</div>
	</div>
</template>

<script>

import SensitivityInfoBoxInput from "./SensitivityInfoBoxInput.vue";
import FloatSettingInput from "./FloatSettingInput.vue";
import VueNumberInput from '@chenfengyuan/vue-number-input';
import Cm360InfoBoxInput from "./infobox/Cm360InfoBoxInput.vue";
import HorizontalFOVInfoBoxInput from "./infobox/HorizontalFOVInfoBoxInput.vue";




export default {
	name: "InfoBox",
	props: ["data"],

	components: {
		SensitivityInfoBoxInput,
		FloatSettingInput,
		VueNumberInput,
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