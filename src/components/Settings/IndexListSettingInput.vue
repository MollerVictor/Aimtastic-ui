<template>
	<div class="half_select_setting"  @mouseover="setInfo">
		<span class="select_label">{{ title }}</span>
		<div class="select">
			<select id="select" @change="onChange($event, $event.target.selectedIndex)" v-model="selectedName"  class="column listSetting">
				<option v-for="item in options"  v-bind:key="item">  {{ item }}</option>
			</select>
		</div>
	</div>
</template>




<script>
/* global ENGINE_settingsChanged */

export default {
	name: "IndexListSettingInput",
	props: ["title", "bindedSetting", "value", "options", "info"],

	computed: {
		
		selectedName: function () {
			return this.options[this.value];
		}
	},

	methods: {
		setInfo: function() {
			this.$parent.setInfo(this.info);
		},
		onChange(event, selectedIndex) {
			this.value = selectedIndex
			ENGINE_settingsChanged(this.bindedSetting, this.value, "int");
			this.$emit('input', this.value);			
        }
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

.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  overflow: hidden;
  border-radius: .25em;
}

select {
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	appearance: none;
	outline: 0;
	box-shadow: none;
	border: 0 !important;
	background-image: none;
}

.half_select_setting select {
	flex: 1;
	padding: 0 .5em;
	color: black;
	cursor: pointer;
	font-family: 'veneer', sans-serif, sans;
	font-size:2.2vh;
}
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #4AA088;
  cursor: pointer; 
  pointer-events: none;
  -webkit-transition: .25s all ease;
  transition: .25s all ease;
}
.select:hover::after {
  color: #ccc;
}
#select * {
  background-color: #4AA088;
  border-radius: 20px;
  font-size:1.23vh;
}
</style>