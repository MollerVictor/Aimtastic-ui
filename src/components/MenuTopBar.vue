<template>
	<div class="top_bar">
		<div class="logo"></div>
		<div id="main_menu_buttons">
			<div style="float:left; margin-left:4vh">
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_play" class="button get-closer menu-medium-button menu_button" v-on:click="$emit('menu-button-pressed', 'Play')">PLAY</div>
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_gamemode" class="button get-closer menu-medium-button menu-disabled-button menu_button" v-on:click="$emit('menu-button-pressed', 'RoomInfo')">Gamemode</div>
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_warmup" class="button get-closer menu-medium-button menu_button" >Warmup</div>
			</div>

			<div style="float: right ">
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_options" class="button get-closer menu-medium-button menu_button"  v-on:click="$emit('menu-button-pressed', 'Settings')">OPTIONS</div>
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" id="mm_workshop" class="button get-closer menu-light-button menu_button">WORKSHOP</div>
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()"
					id="mm_credits"
					class="button get-closer menu-light-button menu-disabled-button menu_button"
				>CREDITS</div>
				<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" onclick="ENGINE_exitGame()" class="button get-closer menu-light-button menu_button">EXIT</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuTopBar"
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
</style>
