<template>
	<diV  class="center_area fullscreen_window">



		<div class="gamemode_filter">

	
			<div>
				<h3>Aiming Type</h3>
				<input type="radio" value="All" v-model="mouseMovementTypeRadio">
				<label>All</label>
				<br>
				<input type="radio" value="Flicking" v-model="mouseMovementTypeRadio">
				<label>Flicking</label>
				<br>
				<input type="radio" value="Tracking" v-model="mouseMovementTypeRadio">
				<label >Tracking</label>
			</div>
			<div>
				<h3>Game Type</h3>
				<input type="radio" value="All" v-model="gameModeTypeRadio">
				<label>All</label>
				<br>
				<input type="radio"  value="Practice" v-model="gameModeTypeRadio">
				<label>Practice</label>
				<br>
				<input type="radio" value="Warmup" v-model="gameModeTypeRadio">
				<label>Warmup</label>
				<br>
				<input type="radio"  value="Assault Course" v-model="gameModeTypeRadio">
				<label>Assault Course</label>
				<br>
				<input type="radio" value="Other" v-model="gameModeTypeRadio">
				<label>Other</label>
			</div>

			<div>
				<h3>Search</h3>
				<input v-model="gameModeSearch" placeholder="Search...">
			</div>
		</div>


		<div class="gamemode_container">

			<div v-for="item of filteredGameModes" v-bind:key="item.title">
				<GameModeButton :title="item.title" :roomName="item.roomName" :imageUrl="item.imgSrc" :isDLC="item.isDLC"/>
			</div>
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
	const GameModeItem = Struct('title', 'roomName', 'imgSrc', 'isDLC', 'isFlick', "gameModeType")

	

	import GameModeButton from "./GameModeButton.vue";
import { filter } from 'minimatch';

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
				mouseMovementTypeRadio: "All",
				gameModeTypeRadio: "All",
				gameModeSearch: "",
				allGameModes: [
					GameModeItem("Bigger Then Smaller" 						,"BiggerThenSmallerRoom" 	,"biggernsmaller"	,false, true, 	"Practice"	),
					GameModeItem("Popup Targets Flicks" 					,"PopupTargetsRoom" 		,"popup"	,false, true, 	"Practice"	),
					GameModeItem("Simple Circle" 							,"SimpleCircleRoom" 		,"simplecircle"	,false, true, 	"Practice"	),
					GameModeItem("Reflex" 									,"ReflexRoom" 				,"reflex"	,false, true, 	"Practice"	),
					GameModeItem("Left/Right Flicks" 						,"LeftRightRoom" 			,"leftrightflicks"		,false, true, 	"Practice"	),
					GameModeItem("Sphere Targets" 							,"SphereTargetsRoom" 		,"spheretargets"	,false, true, 	"Practice"	),
					GameModeItem("Skeet Shooting: Corridor" 				,"SkeetShootingCorridor" 	,"skeetshootingcorrdior"	,false, true, 	"Practice"	),
					GameModeItem("Flat Wall Tracking" 						,"TrackingRoom" 			,"flatwalltracking"	,false, false, 	"Practice"	),
					GameModeItem("360 Tracking" 							,"360TrackingRoom" 			,"360tracking"		,false, false, 	"Practice"	),
					GameModeItem("Snaking" 									,"SnakeRoom" 				,"snaking"		,true, 	true, 	"Practice"	),
					GameModeItem("Assault Course 1" 						,"Assult Course Uno" 		,"assault1"		,false, true, 	"Assault Course"	),
					GameModeItem("Assault Course 2" 						,"Assault Course 2" 		,"assault2"		,true, 	true, 	"Assault Course"	),

					GameModeItem("Sphere Tracking (Moving)" 				,"TrackingOnMovingTargets" 	,"spheretrackingmoving"		,true, 	false, 	"Practice"	),
					GameModeItem("Sphere Tracking (Static)" 				,"TrackingOnStaticTargets" 	,"spheretrackingstatic"		,true, 	false, 	"Practice"	),
		
					GameModeItem("Flicks Flicks Flicks" 					,"FlicksFlicksFlicksRoom" 	,"flicksflicksflicks"		,true, 	true, 	"Practice"	),
					GameModeItem("180 Flicks" 								,"180FlicksRoom" 			,"180flicks"		,true, 	true, 	"Practice"	),
					GameModeItem("Tile Frenzy" 								,"TileFrenzy" 				,"tilefrenzy"		,true, 	true, 	"Practice"	),

					GameModeItem("Reaction Time" 							,"ReactionsRoom" 			,"reaction"	,false, false, 	"Other"	),
					GameModeItem("Forever Attacking Droids" 				,"WarmupRoom" 				,"foreverattaackingdriods"		,true, 	true, 	"Warmup"	),
					GameModeItem("Forever Attacking Droids (University)" 	,"RA_Coast" 	 			,"foreverattckingdroidsuniversty"		,true, 	true, 	"Warmup"	),
					GameModeItem("Adaptive Sphere Flicking (Moving)" 		,"FlicksOnMovingTargets"	,"adaptive sphere flicking moving"		,true, 	true, 	"Practice"	),
					GameModeItem("Adaptive Sphere Flicking (Static)" 		,"FlicksOnStaticTargets"	,"adatpive sphere flicking static"		,false, true, 	"Practice"	)
					
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
			},
			
		},
		computed: {		
			filteredGameModes: function () {
				var filterdList = this.allGameModes; 

				if(this.gameModeTypeRadio !== "All"){
					filterdList = filterdList.filter(x => x.gameModeType == this.gameModeTypeRadio);
				}	

				if(this.mouseMovementTypeRadio == "Flicking"){
					filterdList = filterdList.filter(x => x.isFlick == true);
				}
				else if(this.mouseMovementTypeRadio == "Tracking"){
					filterdList = filterdList.filter(x => x.isFlick == false);
				}
				
				filterdList = filterdList.filter(x => x.title.toLowerCase().includes(this.gameModeSearch.toLowerCase()));

				return filterdList;
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


.gamemode_filter{
	display: flex;
	width: 100%;
	height: 17vh;
	background-color:rgba(82, 79, 79, 0.301);
	justify-content: space-evenly;
	margin-bottom: 3vh;
}

.gamemode_container{
	display: flex;	
	flex-wrap: wrap;
	padding-left: 8vh;
	overflow-y: scroll;
    max-height: 95%;
}


.gamemode_container > div{
	margin-left: 4vh;
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
