<template>
	<div class="half_select_setting" @mouseover="setInfo">
		<span class="select_label">{{ title }}</span>

		<div>
			<div class="input-group color-picker" ref="colorpicker">
				<input
					type="text"
					class="form-control"
					v-model="colorValue"
					@focus="showPicker()"
					@input="updateFromInput"
				/>
				<span class="input-group-addon color-picker-container">
					<span class="current-color" :style="'background-color: ' + colorValue" @click="togglePicker()"></span>
					<chrome-picker :value="colors" @input="updateFromPicker" v-if="displayPicker" />
				</span>
			</div>
		</div>
	</div>
</template>

<script>
/* global ENGINE_settingsChanged */

var tinycolor = require("tinycolor2");
import { Chrome } from "vue-color";

export default {
	name: "ColorSettingInput",
	props: ["title", "bindedSetting", "value", "info", "color", "startColor"],

	components: {
		"chrome-picker": Chrome
	},

	data() {
		return {
			colors: {
				hex: "#000000"
			},
			colorValue: "",
			displayPicker: false
		};
	},
	mounted() {
		
		
		if (
			typeof this.startColor === "string" || this.startColor instanceof String) {
			this.setColor(this.startColor);
		} else {
			this.startColor["r"] = this.startColor["r"] * 255;
			this.startColor["g"] = this.startColor["g"] * 255;
			this.startColor["b"] = this.startColor["b"] * 255;

			var c = tinycolor(this.startColor);

			this.setColor("#" + c.toHex());
		}
	},
	methods: {
		setInfo: function() {
			if (this.info)
				document.getElementById("infoBox").innerHTML = this.info + "";
			else
				document.getElementById("infoBox").innerHTML =
					"No info available";
		},
		setColor(color) {
			this.updateColors(color);
			this.colorValue = color;
		},
		updateColors(color) {
			if (color.slice(0, 1) == "#") {
				this.colors = {
					hex: color
				};
			} else if (color.slice(0, 4) == "rgba") {
				var rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(","),
					hex =
						"#" +
						(
							(1 << 24) +
							(parseInt(rgba[0]) << 16) +
							(parseInt(rgba[1]) << 8) +
							parseInt(rgba[2])
						)
							.toString(16)
							.slice(1);
				this.colors = {
					hex: hex,
					a: rgba[3]
				};
			}
		},
		showPicker() {
			document.addEventListener("click", this.documentClick);
			this.displayPicker = true;
		},
		hidePicker() {
			document.removeEventListener("click", this.documentClick);
			this.displayPicker = false;
		},
		togglePicker() {
			this.displayPicker ? this.hidePicker() : this.showPicker();
		},
		updateFromInput() {
			this.updateColors(this.colorValue);
		},
		updateFromPicker(color) {
			this.colors = color;
			if (color.rgba.a == 1) {
				this.colorValue = color.hex;
			} else {
				this.colorValue =
					"rgba(" +
					color.rgba.r +
					", " +
					color.rgba.g +
					", " +
					color.rgba.b +
					", " +
					color.rgba.a +
					")";
			}
		},
		documentClick(e) {
			var el = this.$refs.colorpicker,
				target = e.target;
			if (el !== target && !el.contains(target)) {
				this.hidePicker();
			}
		}
	},
	watch: {
		colorValue(val) {
			if (val) {
				this.updateColors(val);
				this.$emit("input", val);
				//document.body.style.background = val;

				var color = tinycolor(val);

				ENGINE_settingsChanged(this.bindedSetting, color, "color");
			}
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
	height: 6vh;
	width: 90%;
}

.vc-chrome {
	z-index: 9;
}
.current-color {
	display: inline-block;
	width: 16px;
	height: 16px;
	background-color: #000;
	cursor: pointer;
}
</style>