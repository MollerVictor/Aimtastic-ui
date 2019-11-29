<template>
	<div class="half_select_setting">
		<span class="select_label">{{ title }}</span>
		<select class="column listSetting">
			<option v-for="item in options"  v-bind:key="item.Name">  {{ item.Name }}</option>
		</select>
	</div>
</template>




<script>
/* global ENGINE_settingsChanged */

export default {
	name: "ListSettingInput",
	props: ["title", "bindedSetting", "value", "options"],

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