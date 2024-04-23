/* eslint-disable */
<template>
	<div v-for="(sizes, fishName) in fishValue" :key="fishName" class="fish_section" inputmode="numeric">
  	<img :src="'assets/icons/' + fishName + '.png'" class="fish_img">
  	<div v-for="(value, size) in sizes" :key="`${fishName}_${size}`">
    	<input type="number" v-model.number="value[1]" @change="updateGem" :placeholder="size">
  	</div>
	</div>
</template>

<script>
	import "./assets/style.css";
	export default {
		data() {
			return {
				fishValue: {
					"kingfish": {
						"huge": [300, 0],
			      "large": [100, 0],
						"medium": [70, 0],
						"small": [40, 0],
						"tiny": [10, 0]
					},
					"herring": {
						"huge": [300, 0],
						"large": [100, 0],
						"medium": [70, 0],
						"small": [40, 0],
						"tiny": [10, 0]
					},
					"goldfish": {
						"huge": [450, 0],
						"large": [150, 0],
						"medium": [105, 0],
						"small": [60, 0],
						"tiny": [15, 0]
					},
					"butterflyfish": {
						"huge": [450, 0],
						"large": [150, 0],
						"medium": [105, 0],
						"small": [60, 0],
						"tiny": [15, 0]
					},
					"halibut": {
						"huge": [600, 0],
						"large": [200, 0],
						"medium": [140, 0],
						"small": [80, 0],
						"tiny": [20, 0]
					},
					"tuna": {
						"huge": [1200, 0],
						"large": [400, 0],
						"medium": [280, 0],
						"small": [160, 0],
						"tiny": [40, 0]
					},
					"acid": {
						"huge": [2400, 0],
						"large": [800, 0],
						"medium": [560, 0],
						"small": [320, 0],
						"tiny": [80, 0]
					},
					"angler": {
						"huge": [900, 0],
						"large": [300, 0],
						"medium": [210, 0],
						"small": [120, 0],
						"tiny": [30, 0]
					},
					"crab": {
						"huge": [9600, 0],
						"large": [3200, 0],
						"medium": [2240, 0],
						"small": [1280, 0],
						"tiny": [320, 0]
					}
				},
				gemCounter: 0
			}
		},
		methods: {
			// Vue JS methods go here
			updateGem() {
				this.gemCounter = 0;
				for(let fish in this.fishValue) {
					for(let size in this.fishValue[fish]) {
						// Multiply the fish value (based on species and size) with the fish count
						this.gemCounter += (this.fishValue[fish][size][0] * this.fishValue[fish][size][1]);
					}
				}
			}
		},
		mounted() {
			this.updateGem();
		}
	}
</script>

<style>
</style>