<template>
	<div class="top_bar">		
		<div id="main_menu_buttons">
			<div style="float:left; margin-left:4vh">
				<div v-bind:class="{ menuButtonActive: screenState.value == 'Play' }" onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_play" class="button get-closer menu-medium-button menu_button" v-on:click="$emit('menu-button-pressed', 'Play')">PLAY</div>
				<div v-bind:class="{ menuButtonActive: screenState.value == 'RoomInfo' }" onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_gamemode" class="button get-closer menu-medium-button menu-disabled-button menu_button" v-on:click="$emit('menu-button-pressed', 'RoomInfo')">Gamemode</div>
			</div>

			<div style="float: right ">
				<div v-bind:class="{ menuButtonActive: screenState.value == 'Settings' }" onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_options" class="button get-closer menu-medium-button menu_button"  v-on:click="$emit('menu-button-pressed', 'Settings')">OPTIONS</div>
				<div v-bind:class="{ menuButtonActive: screenState.value == 'Workshop' }" onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_workshop" class="button get-closer menu-light-button menu_button" v-on:click="$emit('menu-button-pressed', 'Workshop')">WORKSHOP</div>				
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" onclick="ENGINE_exitGame()" class="button get-closer menu-light-button menu_button">EXIT</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuTopBar",

	props: ["screenState"],

};
</script>
<style scoped>
.logo {
	position:relative;
	top: 50%;
	transform: translate(0,-50%);
	background-color: red;
	height: 64px;
	width: 64px;
	float: left;
}

.menuButtonActive{
	color: rgb(230, 230, 5);
}
</style>
