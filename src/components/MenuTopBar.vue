<template>
	<div class="top_bar">
		<div id="main_menu_buttons">
			<div style="float:left; margin-left:4vh">
				<div id="mm_play" class="button get-closer menu-medium-button menu_button" v-on:click="$emit('menu-button-pressed', 'Play')">PLAY</div>
				<div id="mm_gamemode" class="button get-closer menu-medium-button menu-disabled-button menu_button" v-on:click="$emit('menu-button-pressed', 'RoomInfo')">Gamemode</div>
				<div id="mm_warmup" class="button get-closer menu-medium-button menu_button" >Warmup</div>
			</div>

			<div style="float: right ">
				<div id="mm_options" class="button get-closer menu-medium-button menu_button"  v-on:click="$emit('menu-button-pressed', 'Settings')">OPTIONS</div>
				<div id="mm_workshop" class="button get-closer menu-light-button menu_button">WORKSHOP</div>
				<div
					id="mm_credits"
					class="button get-closer menu-light-button menu-disabled-button menu_button"
				>CREDITS</div>
				<div onclick="ENGINE_exitGame()" class="button get-closer menu-light-button menu_button">EXIT</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuTopBar"
};
</script>

