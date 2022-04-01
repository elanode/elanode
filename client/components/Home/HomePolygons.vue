<template>
  <div class="relative h-[430px] w-[540px] max-w-screen">
    <img
      class="absolute glow-effect w-[37%] transform -translate-x-1/2 left-1/2 bottom-[40px]"
      src="~assets/images/polygon_home/Polygon_1.png"
      alt=""
    />
    <img
      class="absolute glow-effect w-[37%] transform -translate-y-1/2 top-1/2"
      src="~assets/images/polygon_home/Polygon_2.png"
      alt=""
    />
    <img
      class="absolute glow-effect w-[37%] transform -translate-x-1/2 left-1/2 top-[40px]"
      src="~assets/images/polygon_home/Polygon_3.png"
      alt=""
    />
    <img
      class="absolute glow-effect left-[50px]"
      src="~assets/images/polygon_home/Polygon_4.png"
      alt=""
    />
    <img
      class="absolute glow-effect top-[45px] right-[70px]"
      src="~assets/images/polygon_home/Polygon_5.png"
      alt=""
    />
    <img
      class="absolute glow-effect transform -translate-y-1/2 top-1/2 right-[30px]"
      src="~assets/images/polygon_home/Polygon_6.png"
      alt=""
    />
    <img
      class="absolute glow-effect bottom-[45px] right-[70px]"
      src="~assets/images/polygon_home/Polygon_7.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'HomePolygons',
};
</script>

<style scoped>
.glow-effect {
  filter: drop-shadow(3px 0 0 #32a9ec) drop-shadow(0 3px 0 #32a9ec)
    drop-shadow(-3px 0 0 #32a9ec) drop-shadow(0 -3px 0 #32a9ec)
    drop-shadow(0px 0px 50px rgba(5, 132, 204, 0.62));
}
/* .temp {
  width: 100px;
  height: 100px;
  position: absolute;
  height: 203.67px;
  left: 705px;
  right: 478.4px;
  top: 462.78px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url('~/assets/images/polygon_home/Polygon_4.png');
  border: 3px solid #32a9ec;
  box-sizing: border-box;
  box-shadow: 0px 0px 50px rgba(5, 132, 204, 0.62);
  border-radius: 15px;
  transform: rotate(-90deg);
}
.polygon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: red;
  box-sizing: border-box;
}
.polygon-1 {
  --pl1W: 199px;
  width: var(--pl1W);
  -webkit-clip-path: url(#shape-1);
  clip-path: url(#shape-1);
}
.polygon-1 img {
  -webkit-clip-path: url(#shape-1);
  clip-path: url(#shape-1);
  width: calc(var(--pl1W) - 2px);
}
.polygon-2 {
  width: 199px;
  -webkit-clip-path: url(#shape-2);
  clip-path: url(#shape-2);
}
.polygon-2 img {
  -webkit-clip-path: url(#shape-2);
  clip-path: url(#shape-2);
  width: 197px;
}
.polygon-3 {
  width: 199px;
  height: 159px;
  -webkit-clip-path: url(#shape-3);
  clip-path: url(#shape-3);
}
.polygon-3 img {
  -webkit-clip-path: url(#shape-3);
  clip-path: url(#shape-3);
  width: 197px;
  height: 157px;
}
.polygon-4 {
  width: 129px;
  height: 105px;
  -webkit-clip-path: url(#shape-4);
  clip-path: url(#shape-4);
}
.polygon-4 img {
  -webkit-clip-path: url(#shape-4);
  clip-path: url(#shape-4);
  width: 126px;
  height: 103px;
} */
</style>
