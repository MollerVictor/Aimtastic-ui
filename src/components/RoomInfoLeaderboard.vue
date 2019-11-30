<template>
	<div>
		<table id="global_leaderboard_table" class="leaderboard_table">
			<thead>
				<tr>
					<td>Rank</td>
					<td>Name</td>
					<td>Score</td>
					<td>Hits</td>
					<td>Misses</td>
					<td>Hit %</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item of leaderboard.value" v-bind:key="item.Rank">
		
					<td>{{ item.Rank }}</td>
					<td>{{ item.DisplayName }}</td>
					<td>{{ item.Score }}</td>
					<td>{{ item.TargetHits }}</td>
					<td>{{ item.TargetMisses }}</td>
					<td>{{  }}</td>
				</tr>

				<tr class="dont_remove">
					<td id="select_room_my_rank">Rank</td>
					<td id="select_room_my_name">Name</td>
					<td id="select_room_my_score">Score</td>
					<td id="select_room_my_hits">Hits</td>
					<td id="select_room_my_misses">Misses</td>
					<td id="select_room_my_hitprocent">%</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>


window.onLeaderboardLoaded = function (jsonString) {
	var parsedData = JSON.parse(jsonString);

	console.log(parsedData);

	window.leaderboard.value = parsedData;
};

window.leaderboard = { value: []};

export default {
	name: "RoomInfoLeaderboard",
	data() {
		return {
			leaderboard: window.leaderboard,
		};
	},
};
</script>

<style scoped>

</style>