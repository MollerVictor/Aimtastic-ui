<template>
	<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound(); showRoomSettings(this);" class="play_gamemode button-sound get-closer" :data-room="roomName">
		<img class="background-image"  :src="require(`../assets/images/rooms/${imageUrl}.png`)" rel="preload"/>
		<div class="box-title">{{ title }}</div>
	</div>
</template>

<script>

//So the reason we do this insted of using vue methodes, is with the current browser engine, it makes the click element non responsive for a few secondes when opening the menu
//This is a way to get around that
window.showRoomSettings = identifier => 
{
	var roomName = identifier.getAttribute("data-room");
	ENGINE_requstRoomSettings(roomName);
}


/* global ENGINE_requstRoomSettings */
export default {
	name: "GameModeButton",
	props: ["title", "roomName", "imageUrl"],
};
</script>