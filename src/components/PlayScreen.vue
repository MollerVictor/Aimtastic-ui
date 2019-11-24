<template>

<diV  class="center_area fullscreen_window">
         <div class="gamemode_container">
                    <div style="grid-column-start: 1;">
                        <GameModeButton title="Bigger Then Smaller" roomName="BiggerThenSmallerRoom" imageUrl="bigger"/>
						<GameModeButton title="Popup Targets Flicks" roomName="PopupTargetsRoom" imageUrl="pupoo"/>
						<GameModeButton title="Simple Circle" roomName="SimpleCircleRoom" imageUrl="simple"/>
						<GameModeButton title="Reflex" roomName="ReflexRoom" imageUrl="reflex"/>
						<GameModeButton title="Left/Right Flicks" roomName="LeftRightRoom" imageUrl="left"/>
						<GameModeButton title="Sphere Targets" roomName="SphereTargetsRoom" imageUrl="sphere"/>
						<GameModeButton title="Skeet Shooting: Corridor" roomName="SkeetShootingCorridor" imageUrl="skeet"/>

                    </div>
                    <div style="grid-column-start: 2;">
						<GameModeButton title="Flat Wall Tracking" roomName="TrackingRoom" imageUrl="traking"/>
						<GameModeButton title="360 Tracking" roomName="360TrackingRoom" imageUrl="360"/>
						<GameModeButton title="(DLC) Snaking" roomName="SnakeRoom" imageUrl="360"/>
						<GameModeButton title="(DLC) Training Zone 1" roomName="Training Zone 1" imageUrl="360"/>
						<GameModeButton title="(DLC) Forever Attacking Droids" roomName="WarmupRoom" imageUrl="360"/>
						<GameModeButton title="(DLC) Flicks Flicks Flicks" roomName="FlicksFlicksFlicksRoom" imageUrl="360"/>
						<GameModeButton title="(DLC) 180 Flicks" roomName="180FlicksRoom" imageUrl="360"/>
						<GameModeButton title="(DLC) Sphere Tracking" roomName="SphereTrackingRoom" imageUrl="360"/>
						<GameModeButton title="(DLC) Render Test" roomName="RenderTest" imageUrl="360"/>
                    </div>

                    <div style="grid-column-start: 3;">
						<GameModeButton title="Assult Course Uno" roomName="Assult Course Uno" imageUrl="360"/>
						<GameModeButton title="Reaction Time" roomName="ReactionsRoom" imageUrl="reaction"/>
						<GameModeButton title="(DLC) Clicking Moving Targets" roomName="FlicksOnMovingTargets" imageUrl="360"/>
						<GameModeButton title="(DLC) Clicking Static Targets" roomName="FlicksOnStaticTargets" imageUrl="360"/>
						<GameModeButton title="(DLC) Tracking On Moving Targets" roomName="TrackingOnMovingTargets" imageUrl="360"/>
						<GameModeButton title="(DLC) Tracking On Static Targets" roomName="TrackingOnStaticTargets" imageUrl="360"/>
                    </div>
                </div>

                <br style="clear: both;">
                <div>
                    <button class="ui button secondary" onclick="switch_screens(null)">Close</button>
                </div>
</div>
</template>

<script>
import GameModeButton from "./GameModeButton.vue";

export default {
	name: "PlayScreen",
	components: {
		GameModeButton
	}
};
</script>

