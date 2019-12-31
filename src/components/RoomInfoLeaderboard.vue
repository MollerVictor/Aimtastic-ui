<template>
	<div>
		<div v-if="leaderboardLoading.value">Loading...</div>

		<div v-if="!leaderboardLoading.value && leaderboard.value.length == 0">This leaderboard is empty.</div>

		<table
			v-if="!leaderboardLoading.value && leaderboard.value.length > 0"
			id="global_leaderboard_table"
			class="leaderboard_table"
		>
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
					<td>{{ +(item.TargetHits / (item.TargetHits + item.TargetMisses) * 100).toFixed(2) }}%</td>
				</tr>

				<tr class="leaderboard_my_entry" v-if="myEntry.value">
					<td>{{ myEntry.value.PlayerRank == 0 ? "Pending" : myEntry.value.PlayerRank }}</td>
					<td>{{ myEntry.value.DisplayName }}</td>
					<td>{{ myEntry.value.Score }}</td>
					<td>{{ myEntry.value.TargetHits }}</td>
					<td>{{ myEntry.value.TargetMisses }}</td>
					<td>{{ +(myEntry.value.TargetHits / (myEntry.value.TargetHits + myEntry.value.TargetMisses) * 100).toFixed(2) }}%</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
window.onLeaderboardLoaded = function(jsonString) {
	var parsedData = JSON.parse(jsonString);

	window.leaderboard.value = parsedData;
	window.leaderboardLoading.value = false;
};

window.onPlayerRoomRankLoaded = function(jsonString) {
	var parsedData = JSON.parse(jsonString);

	window.myEntry.value = parsedData;

	console.log(parsedData);
};

window.leaderboard = { value: [] };
window.leaderboardLoading = { value: true };
window.myEntry = { value: {} };

export default {
	name: "RoomInfoLeaderboard",
	data() {
		return {
			leaderboard: window.leaderboard,
			leaderboardLoading: window.leaderboardLoading,
			myEntry: window.myEntry
		};
	}
};
</script>

<style scoped>
.leaderboard_table {
	width: 100%;
}

.leaderboard_table thead {
	font-size: 2em;
}

.leaderboard_table tbody {
	font-size: 1.5em;
}

.leaderboard_table p {
	width: 100%;
}

.leaderboard_table td,
.leaderboard_table th {
	border: 1px solid #ffffff;
	padding: 3px 2px;
}

.leaderboard_table tbody tr:nth-child(even) {
	background-color: #4e4e4e;
}

.leaderboard_table tbody tr:nth-child(uneven) {
	background-color: #858585;
}

.leaderboard_table thead {
	border-bottom: 5px solid #ffffff;
}
.leaderboard_table thead th {
	font-weight: bold;
	text-align: center;
	border-left: 2px solid #ffffff;
}
.leaderboard_table thead th:first-child {
	border-left: none;
}

.leaderboard_my_entry {
	background-color: #818300;
}
</style>