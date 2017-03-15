<template>
<svg id="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20">
	<polyline class="arrow-icon" points="33.51 517.03 285.82 260.67 33.51 5.03"/>
</svg>
</template>

<script>
export default {
	name: "arrow-icon"
}
</script>

<style lang="scss">
@import '../../../scss/partials/_variables';

.arrowIconSvg {
    fill: none;
    stroke: $white;
    stroke-miterlimit: 10;
    stroke-width: 50px;
    transform: scale(0.0383);
}
</style>
