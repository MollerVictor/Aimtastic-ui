<template>
	<diV  class="center_area fullscreen_window">
		<div class="gamemode_container">

			<div v-for="item of allGameModes" v-bind:key="item.title">
				<GameModeButton :title="item.title" :roomName="item.roomName" :imageUrl="item.imgSrc" :isDLC="item.isDLC"/>
			</div>

			<div><h1>Tracking</h1>
				<div class="gamemode-column">		
					<GameModeButton title="Flat Wall Tracking" roomName="TrackingRoom" imageUrl="traking"/>
					<GameModeButton title="360 Tracking" roomName="360TrackingRoom" imageUrl="360"/>
					<GameModeButton title="(DLC) Snaking" roomName="SnakeRoom" imageUrl="360" :isDLC="true"/>
					<GameModeButton title="Simple Circle" roomName="SimpleCircleRoom" imageUrl="simple"/>
					<GameModeButton title="Reflex" roomName="ReflexRoom" imageUrl="reflex"/>
					<GameModeButton title="Left/Right Flicks" roomName="LeftRightRoom" imageUrl="left"/>
					<GameModeButton title="Sphere Targets" roomName="SphereTargetsRoom" imageUrl="sphere"/>
					<GameModeButton title="Skeet Shooting: Corridor" roomName="SkeetShootingCorridor" imageUrl="skeet"/>
				</div>
			</div>  
			<div><h1>Flicks</h1>
				<div class="gamemode-column">
					<GameModeButton title="(DLC) Sphere Tracking (Moving)" roomName="TrackingOnMovingTargets" :isDLC="true" imageUrl="360"/>
					<GameModeButton title="(DLC) Sphere Tracking (Static)" roomName="TrackingOnStaticTargets" :isDLC="true" imageUrl="360"/>
					<GameModeButton title="Bigger Then Smaller" roomName="BiggerThenSmallerRoom" imageUrl="bigger"/>
					<GameModeButton title="Popup Targets Flicks" roomName="PopupTargetsRoom" imageUrl="pupoo"/>		
					<GameModeButton title="(DLC) Flicks Flicks Flicks" roomName="FlicksFlicksFlicksRoom" 	:isDLC="true" imageUrl="360"/>
					<GameModeButton title="(DLC) 180 Flicks" roomName="180FlicksRoom" 						:isDLC="true" imageUrl="360"/>
					<GameModeButton title="(DLC) Tile Frenzy" roomName="TileFrenzy" 						:isDLC="true" imageUrl="360"/>
				</div>
			</div>
			<div><h1>Assault Maps</h1>
				<div class="gamemode-column">
					<GameModeButton title="Assault Course 1" roomName="Assult Course Uno" imageUrl="360"/>
					<GameModeButton title="Assault Course 2" roomName="Assault Course 2" 				:isDLC="true" imageUrl="360"/>
					<GameModeButton title="Reaction Time" roomName="ReactionsRoom" imageUrl="reaction"/>
					<GameModeButton title="Training Zone 1" roomName="Training Zone 1" 					:isDLC="true" imageUrl="360"/>
					<GameModeButton title="Forever Attacking Droids" roomName="WarmupRoom" 				:isDLC="true" imageUrl="360"/>
					<GameModeButton title="Forever Attacking Droids (University)" roomName="RA_Coast" 	:isDLC="true" imageUrl="360"/>
					<GameModeButton title="Adaptive Sphere Flicking (Moving)" roomName="FlicksOnMovingTargets" 	:isDLC="true" imageUrl="360"/>
					<GameModeButton title="Adaptive Sphere Flicking (Static)" roomName="FlicksOnStaticTargets" 	:isDLC="true" imageUrl="360"/>
				</div>
			</div>
		</div>
		<br style="clear: both;">
		<div>
			<button onmouseover="ENGINE_playHoverSound()" onclick="ENGINE_playClickSound()" class="ui button secondary">Close</button>
		</div>

		<diV class="dlc_popup" v-if="showDLCPopup.value">
			<div class="dlc_popup_window">
				This requires the DLC to play. Do you want to buy it now?

				<div v-if="isOpeningSteamOverlay">
					<p>Opening Steam overlay...<br/>
						If it's not working please press <a style="color: blue;" @click="openDLCInBrowser">HERE</a> to open it in your browser.
					</p>

				</div>

				<div class="button" @click="closePopup">Close</div>
				<div class="button" @click="buyDLC">Buy</div>
			</div>
		</div>
	</div>
</template>

<script>

	/* global ENGINE_openDLCBuyPage ENGINE_openLink */

	window.onHasFullGameDLC = function (jsonString) {
		var parsedData = JSON.parse(jsonString);	

		window.hasDLC.value = jsonString;
	};

	window.hasDLC = { value: false};
	window.showDLCPopup = { value: false};

	//Simple struct generator
	const Struct = (...keys) => ((...v) => keys.reduce((o, k, i) => {o[k] = v[i]; return o} , {}))
	const GameModeItem = Struct('title', 'roomName', 'imgSrc', 'isDLC')

	

	import GameModeButton from "./GameModeButton.vue";

	export default {
		name: "PlayScreen",
		components: {
			GameModeButton
		},

		
		data() {
			return {
				hasDLC: window.hasDLC,
				showDLCPopup: window.showDLCPopup,
				isOpeningSteamOverlay: false,
				allGameModes: [
					GameModeItem("Flat Wall Tracking" 						,"TrackingRoom" 			,"traking"	,false),
					GameModeItem("360 Tracking" 							,"360TrackingRoom" 			,"360"		,false),
					GameModeItem("(DLC) Snaking" 							,"SnakeRoom" 				,"360"		,true),
					GameModeItem("Simple Circle" 							,"SimpleCircleRoom" 		,"simple"	,false),
					GameModeItem("Reflex" 									,"ReflexRoom" 				,"reflex"	,false),
					GameModeItem("Left/Right Flicks" 						,"LeftRightRoom" 			,"left"		,false),
					GameModeItem("Sphere Targets" 							,"SphereTargetsRoom" 		,"sphere"	,false),
					GameModeItem("Skeet Shooting: Corridor" 				,"SkeetShootingCorridor" 	,"skeet"	,false),

					GameModeItem("(DLC) Sphere Tracking (Moving)" 			,"TrackingOnMovingTargets" 	,"360"		,true),
					GameModeItem("(DLC) Sphere Tracking (Static)" 			,"TrackingOnStaticTargets" 	,"360"		,true),
					GameModeItem("Bigger Then Smaller" 						,"BiggerThenSmallerRoom" 	,"bigger"	,false),
					GameModeItem("Popup Targets Flicks" 					,"PopupTargetsRoom" 		,"pupoo"	,false),		
					GameModeItem("(DLC) Flicks Flicks Flicks" 				,"FlicksFlicksFlicksRoom" 	,"360"		,true),
					GameModeItem("(DLC) 180 Flicks" 						,"180FlicksRoom" 			,"360"		,true),
					GameModeItem("(DLC) Tile Frenzy" 						,"TileFrenzy" 				,"360"		,true),

					GameModeItem("Assault Course 1" 						,"Assult Course Uno" 		,"360"		,false),
					GameModeItem("Assault Course 2" 						,"Assault Course 2" 		,"360"		,true),
					GameModeItem("Reaction Time" 							,"ReactionsRoom" 			,"reaction"	,false),
					GameModeItem("Training Zone 1" 							,"Training Zone 1" 			,"360"		,true),
					GameModeItem("Forever Attacking Droids" 				,"WarmupRoom" 				,"360"		,true),
					GameModeItem("Forever Attacking Droids (University)" 	,"RA_Coast" 	 			,"360"		,true),
					GameModeItem("Adaptive Sphere Flicking (Moving)" 		,"FlicksOnMovingTargets"	,"360"		,true),
					GameModeItem("Adaptive Sphere Flicking (Static)" 		,"FlicksOnStaticTargets"	,"360"		,false)
					
					]
			};
		},
		methods:{
			closePopup: function() {
				this.showDLCPopup.value = false;
			},
			buyDLC: function(){
				this.isOpeningSteamOverlay = true;
				ENGINE_openDLCBuyPage();
			},
			openDLCInBrowser: function(){
				ENGINE_openLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
			}
		}
	};
</script>
<style scoped>
.gamemode-column {
	height: 100%;
	display:flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 20px;
}
h1 {
	width: 26vw;
	text-align: center;
	padding: 6px;
	border: 5px solid #fcffff;
}
.gamemode_container{
	display: flex;
	justify-content: space-between;
	height: 100%;
	flex-wrap: wrap;
}


.gamemode_container > div{
	margin-left: 4vh;
	margin-right: 4vh;
	margin-bottom: 3vh;
}


.dlc_popup{
	position: absolute;
	left: 0;
	top:0;
	width: 100%;
	height: 100%;
	background-color: #5252526e;
	display: flex;
	justify-content: center;
	align-content: center;
}

.dlc_popup_window{
	width: 50vh;
	height: 30vh;
	background-color: grey;
}

</style>
