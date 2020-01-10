<template>
	<diV  class="center_area fullscreen_window">
		<button onclick="ENGINE_openLinkInSteam('https://steamcommunity.com/app/757240/workshop/')">Open Workshop Page</button>
		
		<div>
			<div v-for="item of workshopItems.value" v-bind:key="item.Title">
				{{item.Title}}
			</div>
		</div>

	</div>
</template>

<script>

	window.onWorkshopQueryEvent = function (jsonString) {
		var parsedData = JSON.parse(jsonString);	

		

		window.workshopItems.value = parsedData;

		console.log(parsedData);
	};

	window.workshopItems = { value: []};

	export default {
		name: "WorkshopScreen",

		data() {
			return {
				workshopItems: window.workshopItems
			};
		},
	}

</script>
<style scoped>


</style>
