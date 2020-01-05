<template>
	<div onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound(); showRoomSettings(this);" class="play_gamemode button-sound get-closer" :data-isDLC="isDLC" :data-room="roomName">
		<img class="background-image"  :src="require(`../assets/images/rooms/${imageUrl}.png`)" rel="preload"/>
		<div class="box-title">{{ title }}</div>
		<div v-if="isDLC == true && hasDLC.value == false" class="dlc_overlay">
			<div class="dlc_bottom_text">DLC</div> 
		</div>
	</div>
</template>

<script>

//So the reason we do this insted of using vue methodes, is with the current browser engine, it makes the click element non responsive for a few secondes when opening the menu
//This is a way to get around that
window.showRoomSettings = identifier => 
{
	var dlc = identifier.getAttribute("data-isDLC");
	if(dlc && !window.hasDLC.value){
		window.showDLCPopup.value = true;
	}
	else{
		var roomName = identifier.getAttribute("data-room");
		ENGINE_requstRoomSettings(roomName);
	}
}


/* global ENGINE_requstRoomSettings */
export default {
	name: "GameModeButton",
	props: ["title", "roomName", "imageUrl", "isDLC"],

	data() {
		return {
			hasDLC: window.hasDLC,

		};
	},
};
</script>

<style scoped>
.dlc_overlay{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;

	background-color: rgba(128, 128, 128, 0.336);
}

.dlc_bottom_text{
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: 3vh;
}

</style>