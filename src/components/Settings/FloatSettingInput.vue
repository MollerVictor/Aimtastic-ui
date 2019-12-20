<template>
	<div class="half_select_setting" @mouseover="setInfo">
		<span class="select_label">{{ title }}</span>

		<div class="rangeSliderHolder">
			<vue-slider class="vue-slider-turq" :drag-on-click="true" :silent="true" :adsorb="true" v-model="value" :min="min" :max="max" :interval="step"></vue-slider>
		</div>

		<div class="inputSpinnerHolder">
			<VueNumberInput :step="step" :min="min" :max="max"  v-model="value" controls></VueNumberInput>
		</div>
	</div>
</template>

<script>
/* global ENGINE_settingsChanged */

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import VueNumberInput from '@chenfengyuan/vue-number-input';

export default {
	name: "FloatSettingInput",
	props: ["title", "min", "max", "step", "bindedSetting", "value", "info"],

	watch: {
		value: function (val) {			
			ENGINE_settingsChanged(this.bindedSetting, val, "float");
			this.$emit('input', val);
		},
	},
	methods: {
		setInfo: function() {
			if(this.info)
				document.getElementById("infoBox").innerHTML = this.info+""
			else
				document.getElementById("infoBox").innerHTML = "No info available"
		},
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
	height: 6vh;
	width: 90%;
}

.inputSpinnerHolder {
	width: 20%;
	margin-left: 2%;
	font-family: 'veneer', sans-serif, sans;
}
</style>
<style lang="scss">
.vue-slider-turq .vue-slider-rail .vue-slider-process {
	background-color: #4AA088 !important;
}
</style>