<template>
	<div class="half_select_setting">
		<span class="select_label">{{ title }}</span>

		<div class="rangeSliderHolder">
			<vue-slider class="vue-slider-turq" @dragging="valueChanged" :drag-on-click="true" :silent="true" :adsorb="true" v-model="realValue" :min="0" :max="300" :interval="0.001"></vue-slider>
		</div>

		<div class="inputSpinnerHolder">
			<VueNumberInput @change="valueChanged"  :step="0.001" :min="0" :max="300"  v-model="realValue" controls center></VueNumberInput>
		</div>
	</div>
</template>

<script>
/* global ENGINE_settingsChanged */

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import VueNumberInput from '@chenfengyuan/vue-number-input';

export default {
	name: "Cm360InfoBoxInput",
	props: ["title", "bindedSetting", "value", "dpi"],

	data() {
		return {
			settings: window.settings,
		};
	},

	computed: {
		realValue: {
			// getter
			get: function () {
				return Math.round( 360 / (this.dpi * 0.022 * this.value) * 2.54 * 1000) / 1000//  360 / (this.dpi * 0.022 * this.value * 2.54);//(settings.value.PlayerSettings.DPI * 0.022 * this.value) * 2.54
			},
		}
	},

	methods: {
		valueChanged: function(newValue) {
			var sourceSens = 914.4 /(0.022 * this.dpi * newValue) //Converting cm360 to source sens. #math
			//ENGINE_settingsChanged(this.bindedSetting, sourceSens, "float");
			this.$emit('input', sourceSens);
		}
	},

	components: {
		VueSlider,
		VueNumberInput
	}
};
</script>

<style scoped>
.half_select_setting {
	background-color: rgba(255, 255, 255, 0.1);
	margin-top: 0.5vh;
	padding: 0.6vh;
	padding-left: 0.6vh;
	padding-left: 1.25vh;
	display: flex;
	
	width: 90%;
}

.inputSpinnerHolder {
	width: 30vh;
	margin-left: 2%;
	font-family: 'veneer', sans-serif, sans;	
}
</style>
<style lang="scss">
.vue-slider-turq .vue-slider-rail .vue-slider-process {
	background-color: #4AA088 !important;
}
</style>