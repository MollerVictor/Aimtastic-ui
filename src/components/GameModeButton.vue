<template>
	<div class="play_gamemode button-sound get-closer" v-on:click="ShowRoomSettings">
		<img class="background-image"  :src="require(`../assets/images/rooms/${imageUrl}.png`)" rel="preload"/>
		<div class="box-title">{{ title }}</div>
	</div>
</template>

<script>

/* global ENGINE_requstRoomSettings */
export default {
	name: "GameModeButton",
	props: ["title", "roomName", "imageUrl"],

	methods: {
		ShowRoomSettings: function() {
			window.screenState.value = "RoomInfo";
			ENGINE_requstRoomSettings(this.roomName);
		}
	}
};
</script>

