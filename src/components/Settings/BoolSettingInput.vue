<template>
	<div class="half_select_setting" @mouseover="setInfo">
		<span class="select_label">{{ title }}</span>
		<label class="check_container">
			<input type="checkbox" v-model="value" />
			<span class="check"></span>
		</label>
	</div>
</template>




<script>
/* global ENGINE_settingsChanged */

export default {
	name: "BoolSettingInput",
	props: ["title", "bindedSetting", "value", "info"],

	watch: {
		value: function(val) {
			ENGINE_settingsChanged(this.bindedSetting, val, "bool");
			this.$emit('input', val);
		}
	},

	methods: {
		setInfo: function() {
			if(this.info)
				document.getElementById("infoBox").innerHTML = this.info+""
			else
				document.getElementById("infoBox").innerHTML = "No info available"
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
.check_container {
	position: relative;
	cursor: pointer;
	user-select: none;
	width: 25px;
	height: 25px;
}
.check_container input {
	opacity: 0;
	height: 0;
	width: 0;
	cursor: pointer;
}
.check {
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #ffffff;
}
.check_container:hover input ~ .check {
	background-color: #ccc;
}
.check:after {
	content: "";
	position: absolute;
	display: none;
	left: 9px;
	top: 5px;
	width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 3px 3px 0;
	transform: rotate(45deg);
}
.check_container input:checked ~ .check:after {
	display: block;
}
.check_container input:checked ~ .check {
	background-color: #4AA088;
}
</style>