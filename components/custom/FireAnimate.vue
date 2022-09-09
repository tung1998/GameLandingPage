<template>
  <div class="ag-spark" />
</template>

<script>
export default {

}
</script>

<style>

.ag-spark {
  z-index: 99;
}

.ag-spark:before {
    -webkit-animation: an-spark 1800s linear infinite,an-slow-shake 26s linear 13s infinite;
    -moz-animation: an-spark 1800s linear infinite,an-slow-shake 26s linear 13s infinite;
    -o-animation: an-spark 1800s linear infinite,an-slow-shake 26s linear 13s infinite;
    animation: an-spark 1800s linear infinite,an-slow-shake 26s linear 13s infinite;
}

.ag-spark:after {
    -webkit-animation: an-spark 3600s linear infinite,an-slow-shake-revert 26s linear infinite;
    -moz-animation: an-spark 3600s linear infinite,an-slow-shake-revert 26s linear infinite;
    -o-animation: an-spark 3600s linear infinite,an-slow-shake-revert 26s linear infinite;
    animation: an-spark 3600s linear infinite,an-slow-shake-revert 26s linear infinite;
}

.ag-spark:before, .ag-spark:after {
    content: "";
    background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/sparks/images/spark.png);
    background-position-x: 50%;
    background-repeat: repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0;
    will-change: transform;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
