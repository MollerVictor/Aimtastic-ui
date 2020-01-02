<template>
	<div class="half_select_setting" @mouseover="setInfo">
		<span class="select_label">{{ title }}</span>

		<div class="rangeSliderHolder">		
			 <vue-range-slider ref="slider" v-model="value" :tooltip="false" :step="step" :min="min" :max="max" ></vue-range-slider>
		</div>

		<div class="inputSpinnerHolder">
			<vue-numeric-input  v-model="value" :min="min" :max="max" :step="step"></vue-numeric-input>
		</div>
	</div>
</template>

<script>
/* global ENGINE_settingsChanged */

import VueNumericInput from 'vue-numeric-input'

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
	name: "IntSettingInput",
	props: ["title", "min", "max", "step", "bindedSetting", "value", "info"],

	watch: {
		value: function (val) {			
			ENGINE_settingsChanged(this.bindedSetting, val, "int");
			this.$emit('input', val);
		},
	},
	methods: {
		setInfo: function() {
			this.$parent.setInfo(this.info);
		},
	},

	components: {
		VueNumericInput,
		VueRangeSlider
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
	width: 25vh;
	margin-left: 2%;
}
</style>
<style lang="scss">
.vue-slider-turq .vue-slider-rail .vue-slider-process {
	background-color: #4AA088 !important;
}
</style>