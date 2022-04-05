<template>
  <div>
    <div
      class="hidden sm:block relative mx-auto overflow-visible h-[430px] w-full max-w-[425px] lg:(w-screen w-[100%] max-w-[540px])"
    >
      <img
        class="absolute glow-effect transform -translate-x-1/2 w-[35%] left-1/2 bottom-[20%] sm:(left-1/2 bottom-[20%]) 2xl:(w-auto bottom-[10%])"
        src="~assets/images/polygon_home/Polygon_1.png"
        alt=""
      />
      <img
        class="absolute glow-effect transform -translate-y-1/2 w-[35%] top-1/2 2xl:(w-auto)"
        src="~assets/images/polygon_home/Polygon_2.png"
        alt=""
      />
      <img
        class="absolute glow-effect transform -translate-x-1/2 w-[35%] left-1/2 top-[20%] 2xl:(w-auto top-[10%])"
        src="~assets/images/polygon_home/Polygon_3.png"
        alt=""
      />
      <img
        class="absolute glow-effect w-[23%] left-[10%] top-[12%]) lg:(left-[10%] w-[23%] top-[12%] 2xl:(w-auto top-0)"
        src="~assets/images/polygon_home/Polygon_4.png"
        alt=""
      />
      <img
        class="absolute glow-effect w-[18%] right-[14%] top-[18%] lg:(right-[14%] w-[18%] top-[18%]) 2xl:(w-auto top-[10%] right-[13%])"
        src="~assets/images/polygon_home/Polygon_5.png"
        alt=""
      />
      <img
        class="absolute glow-effect transform -translate-y-1/2 w-[30%] top-1/2 right-[6%] lg:(top-1/2 w-[30%] right-[6%]) 2xl:(w-auto)"
        src="~assets/images/polygon_home/Polygon_6.png"
        alt=""
      />
      <img
        class="absolute glow-effect w-[18%] right-[14%] bottom-[18%] lg:(right-[14%] w-[18%] bottom-[18%]) 2xl:(w-auto bottom-[10%] right-[13%])"
        src="~assets/images/polygon_home/Polygon_7.png"
        alt=""
      />
    </div>
    <img
      class="sm:hidden"
      src="~assets/images/polygon_home/Picture.png"
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
