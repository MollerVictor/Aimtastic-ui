<template>
	<div class="half_select_setting">
		<span class="select_label">{{ title }}</span>

		<div class="rangeSliderHolder">
			<vue-slider class="vue-slider-turq" @change="valueChanged" :drag-on-click="true" :silent="true" :adsorb="true" :value="realValue" :min="min" :max="Math.round(25*multiplier * 100) / 100 " :interval="step"></vue-slider>
		</div>

		<div class="inputSpinnerHolder">
			<VueNumberInput @change="valueChanged"  :step="step" :min="min" :max="Math.round(25*multiplier * 100) / 100 " :value="realValue"  center controls></VueNumberInput>
		</div>
	</div>
</template>

<script>
/* global ENGINE_settingsChanged */

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import VueNumberInput from '@chenfengyuan/vue-number-input';

export default {
	name: "SensitivityInfoBoxInput",
	props: ["title", "min", "step", "bindedSetting", "value", "value2", "multiplier"],


	computed: {
		realValue: {
			// getter
			get: function () {
				return Math.round(this.value * this.multiplier * 10000) / 10000;
			},
		}
	},

	methods: {
		valueChanged: function(newValue) {
			//ENGINE_settingsChanged(this.bindedSetting, (newValue / this.multiplier), "float");
			this.$emit('input', (newValue / this.multiplier));
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