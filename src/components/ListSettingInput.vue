<template>
	<div class="half_select_setting"  @mouseover="setInfo">
		<span class="select_label">{{ title }}</span>
		<select @change="onChange($event)" v-model="value"  class="column listSetting">
			<option v-for="item in options"  v-bind:key="item.Name">  {{ item.Name }}</option>
		</select>
	</div>
</template>




<script>
/* global ENGINE_settingsChanged */

export default {
	name: "ListSettingInput",
	props: ["title", "bindedSetting", "value", "options", "info"],

	watch: {
		value: function(val) {
			
		}
	},	
	methods: {
		setInfo: function() {
			if(this.info)
				document.getElementById("infoBox").innerHTML = this.info+""
			else
				document.getElementById("infoBox").innerHTML = "No info available"
		},
		onChange(event) {
            ENGINE_settingsChanged(this.bindedSetting, event.target.value, "list");
			this.$emit('input', event.target.value);
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