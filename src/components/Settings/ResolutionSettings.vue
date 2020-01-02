<template>
	<div class="settings_group">
		<h2>Resolution</h2>

		<div class="half_select_setting" @mouseover="setInfo('res')">
			<span class="select_label">Resolution</span>
			<select v-model="resolutionSettings.SelectedResolution" class="column listSetting">
				<option v-for="item in resolutionSettings.Resolutions"    v-bind:key="item">  {{ item }}</option>
			</select>
		</div>

		<div class="half_select_setting" @mouseover="setInfo('displayMode')">
			<span class="select_label">Display Mode</span>

			<select class="column listSetting" v-model="resolutionSettings.FullscreenMode">
				<option>Exclusive FullScreen</option>
				<option>Fullscreen Windowed</option>
				<option>Windowed</option>
			</select>
		</div>
		<button class="button graphic-apply" @click="changeResolution">Apply</button>
	</div>
</template>

<script>

/* global ENGINE_settingsChangeResolutionClicked */

export default {
	name: "ResolutionSettings",
	props: ["resolutionSettings"],
	
	methods: {
		changeResolution: function(){
			ENGINE_settingsChangeResolutionClicked(this.resolutionSettings.SelectedResolution, this.resolutionSettings.FullscreenMode);
		},
		
		setInfo: function(who) {
			if(who === "res")
				this.$parent.setInfo("No info available");
			else if(who === "displayMode")
				this.$parent.setInfo("No info available");
		},
		
	}
};
</script>

