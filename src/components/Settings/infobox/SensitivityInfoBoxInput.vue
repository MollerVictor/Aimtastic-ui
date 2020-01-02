<template>
	<div class="half_select_setting">
		<span class="select_label">{{ title }}</span>

		<div class="rangeSliderHolder">
			 <vue-range-slider ref="slider"  @slide-end="valueChanged" v-model="realValue" :tooltip="false"  :step="step" :min="min" :max="Math.round(25*multiplier * 100) / 100 " ></vue-range-slider>
		</div>

		<div class="inputSpinnerHolder">
			<vue-numeric-input @input="valueChanged" v-model="realValue" :min="min" :max="Math.round(25*multiplier * 100) / 100 " :step="step"></vue-numeric-input>
		</div>
	</div>
</template>

<script>

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
import VueNumericInput from 'vue-numeric-input'

export default {
	name: "SensitivityInfoBoxInput",
	props: ["title", "min", "step", "value", "multiplier"],


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
			console.log("Emitting sens");
			this.$emit('input', (newValue / this.multiplier));
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