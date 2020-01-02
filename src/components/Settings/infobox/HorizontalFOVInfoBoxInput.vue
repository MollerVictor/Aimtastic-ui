<template>
	<div class="half_select_setting" >
		<span class="select_label">{{ title }}</span>


		<div class="rangeSliderHolder">
			<vue-range-slider ref="slider" @slide-end="valueChanged" v-model="realValue" :tooltip="false" :step="step" :min="min" :max="max" ></vue-range-slider>
		</div>

		<div class="inputSpinnerHolder">            
			<vue-numeric-input @input="valueChanged" v-model="realValue" :min="min" :max="max" :step="step"></vue-numeric-input>
        </div>


	</div>
</template>

<script>
/* global ENGINE_settingsChanged */

import VueNumericInput from 'vue-numeric-input'

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
	name: "HorizontalFOVInfoBoxInput",
	props: ["title", "min", "max", "step", "bindedSetting", "value", "info"],

	components: {
		VueNumericInput,
		VueRangeSlider
	},

	computed: {
		realValue: {
			// getter
			get: function () {
				var radAngle = this.value  * Math.PI / 180;
				var radHFOV = 2 * Math.atan(Math.tan(radAngle / 2) * window.settings.value["CameraRes"].Aspect);
				var hFOV =  180 / Math.PI * radHFOV;

				return Math.round(hFOV * 100) / 100;
			},
		}
	},

	
	methods: {
		valueChanged: function(hFOV) {
			console.log("Emitting: hfov " + hFOV);
			var hfovRad = hFOV * Math.PI / 180;
			var vfovRad = 2 * Math.atan(Math.tan(hfovRad / 2) * window.settings.value["CameraRes"].PixelHeight / window.settings.value["CameraRes"].PixelWidth);
			var vFOV = vfovRad * 180 / Math.PI;		
			//ENGINE_settingsChanged(this.bindedSetting, (newValue / this.multiplier), "float");

			var rounded = Math.round(vFOV * 100) / 100;

			this.$emit('input', rounded);

			
		}
	},

	
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
	font-family: 'veneer', sans-serif, sans;
}
</style>
<style lang="scss">
.vue-slider-turq .vue-slider-rail .vue-slider-process {
	background-color: #4AA088 !important;
}
</style>