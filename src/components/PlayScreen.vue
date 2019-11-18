<template>
	<div>
		PlayScreen
		<GameModeButton
			title="Bigger Then Smaller"
			roomName="BiggerThenSmallerRoom"			
		/>
		<GameModeButton
			title="Popup Targets Flicks"
			roomName="PopupTargetsRoom"			
		/>
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

