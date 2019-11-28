<template>
	<div class="half_select_setting">
		<span class="select_label">{{ title }}</span>

		<input type="checkbox" v-model="value">
	</div>
</template>




<script>
/* global ENGINE_settingsChanged */

export default {
	name: "BoolSettingInput",
	props: ["title", "bindedSetting", "value"],

	watch: {
		value: function(val) {
			ENGINE_settingsChanged(this.bindedSetting, val, "bool");
		}
	},

	components: {}
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

</style>