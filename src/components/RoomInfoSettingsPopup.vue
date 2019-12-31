<template>
	<div class="preset_cover_screen">
		<div class="edit_presets_window"  >
			<input v-model="presetName" @input="presetNameChange($event.target.value)"/>
			<div id="roomSettings">
				<div v-for="item of settings" v-bind:key="item.id">
					<div>
						{{ item.displayName }}
					</div>
					<vue-slider  @drag-end="() => valueChanged(item)" :silent="true" :adsorb="true" :drag-on-click="true" :min="item.minValue" :max="item.maxValue" :interval="item.stepSize" v-model="item.value"></vue-slider>
					<!-- We make slider silent because of this https://github.com/NightCatSama/vue-slider-component/issues/343 -->
				</div>
			</div>
			<div>
				<button onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()"  class="ui button secondary" v-on:click="$emit('closePopupSettings')">Close</button>
			</div>
		</div>
	</div>
</template>

<script>

/* global ENGINE_presetSettingChanged */

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
	name: "RoomInfoSettingsPopup",
	props: ["settings", "presetName", "presetIndex"],
	components: {
		VueSlider,
	},

	methods: {
		valueChanged: function(item){
			this.$emit("presetSettingChanged", item.bindedName, item.value);

			ENGINE_presetSettingChanged(this.presetIndex, item.bindedName, item.value);
		},

		presetNameChange(newValue){
			this.$emit("presetNameChanged", newValue);
		}
		
	}
};
</script>


<style scoped>

.preset_cover_screen{
	width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(7, 8, 8, 0.45);
    top: 0;
    left: 0;
}

.edit_presets_window{
	display: flex;
	position: absolute;
	left: 50%;
    top: 50%;
    background: blue;
}

</style>

