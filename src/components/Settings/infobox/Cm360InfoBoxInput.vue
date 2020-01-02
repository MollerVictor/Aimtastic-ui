<template>
	<div class="half_select_setting">
		<span class="select_label">{{ title }}</span>

		<div class="rangeSliderHolder">
			<vue-range-slider ref="slider"  @slide-end="valueChanged" v-model="realValue" :tooltip="false" :step="0.001" :min="0" :max="100" ></vue-range-slider>
		</div>

		<div class="inputSpinnerHolder">			
			<vue-numeric-input @input="valueChanged" v-model="realValue" :min="0.001" :max="100" :step="0.001"></vue-numeric-input>
		</div>
	</div>
</template>

<script>

import VueNumericInput from 'vue-numeric-input'

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
	name: "Cm360InfoBoxInput",
	props: ["title", "value", "dpi"],

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
			this.$emit('input', sourceSens);
		}
	},

	components: {
		VueRangeSlider,
		VueNumericInput
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