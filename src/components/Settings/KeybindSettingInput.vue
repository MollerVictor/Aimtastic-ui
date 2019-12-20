<template>
	<div class="half_select_setting" @mouseover="setInfo">
		<span class="select_label">{{ title }}</span>
		<button class="keybindSetting" @click="changeKeybind">{{ value }}</button>
	</div>
</template>

<script>
/* global ENGINE_settingsChanged ENGINE_captureKeybind */

window.keybindPressed = function (key, val) {
	window.settings.value.Keybinds[key] = val;
	let arr = document.getElementsByClassName('keybindSetting');
	let aL = arr.length;
	for(let i=0;i<aL;i++) {
			arr[i].style.backgroundColor = '#ccc'
	}
};



export default {
	name: "KeybindSettingInput",
	props: ["title", "bindedSetting", "value", "info"],
	
	methods: {
		setInfo: function() {
			if(this.info)
				document.getElementById("infoBox").innerHTML = this.info+""
			else
				document.getElementById("infoBox").innerHTML = "No info available"
		},

		changeKeybind: function(){
			let arr = document.getElementsByClassName('keybindSetting');
			let aL = arr.length;
			for(let i=0;i<aL;i++) {
				if(arr[i].innerHTML==this.value) {
					arr[i].style.backgroundColor = '#4AA088'
				}
			}
			ENGINE_captureKeybind(this.bindedSetting);
		},


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
</style>