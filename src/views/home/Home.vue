<template>
  <div id="home">
    <!-- @mousemove="mousemoveHome" -->
    <login id="login" @mouse="mouse" />
    <!-- <div id="login">
      <el-form label-position="top" label-width="80px" :model="formLabelAlign">
        <el-form-item label="账户">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
      </el-form>
    </div>-->
    <!-- <div class="changeBtn">
      <el-button round @click="changeImg()">换肤</el-button>
    </div> -->
    <div class="homepage-hero-module">
      <div class="video-container">
        <div :style="fixStyle" class="filter"></div>
        <video
          :style="[fixStyle,imgMove]"
          autoplay
          loop
          :class="['fillWidth',{videoFilter}]"
          v-on:canplay="canplay"
        >
          <source src="../../assets/video/home1.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
          <source src="../../assets/video/home1.mp4" type="video/webm" />浏览器不支持 video 标签，建议升级浏览器。
        </video>
        <div class="poster hidden" v-if="!vedioCanPlay">
          <img :style="fixStyle" src="PATH_TO_JPEG" alt />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import login from "./components/Login";
export default {
  name: "home",
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: "",
      imgMove: "",
      videoFilter: "",
      labelPosition: "right",
      windowWidthCenter: "",
      windowHeightCenter: "",
      formLabelAlign: {
        name: "",
        region: ""
      },
      random:'1',
    };
  },
  components: {
    login
  },
  watch: {
    windowWidthCenter(val) {
      console.log(val);
    }
  },
  mounted: function() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      this.windowWidthCenter = windowWidth / 2;
      const windowHeight = (this.windowHeight = document.body.clientHeight);
      this.windowHeightCenter = windowHeight / 2;

      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: windowWidth * 0.5625 + "px",
          width: windowWidth + "px",
          "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
          "margin-left": "initial"
        };
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / 0.5625;
        this.fixStyle = {
          height: windowHeight + "px",
          width: windowHeight / 0.5625 + "px",
          "margin-left": (windowWidth - videoWidth) / 2 + "px",
          "margin-bottom": "initial"
        };
      }
    };
    window.onresize();
    // this.$nextTick(()=>{
    //     //mouseover绑定的函数
    //     this.homeMouseover()
    // })
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true;
    },
    mouse(e) {
      console.log(e, "传至");
      if (e == "mouseEnterLogin") {
        this.videoFilter = "videoFilter";
      }
      if (e == "mouseLeaveLogin") {
        this.videoFilter = "";
      }
    },
    changeImg(){
      this.random = '2'
    }
    // TODO:鼠标移动背景移动
    // mousemoveHome(e) {
    //   console.log(e, "test");
    //   let X = (e.clientX - this.windowWidthCenter)/20 + 'px'
    //   let Y = (e.clientY - this.windowHeight)/20 + 'px'
    //   console.log(X,Y)
    //   this.imgMove = {
    //     'transition': '0.3s',
    //     transform:`translate(${X},${Y})`

    //   };
    // }
  }
};
</script>

<style scoped lang='less'>
// #home {
//   width: 100%;
// }

.changeBtn {
  position: absolute;
  z-index: 9;
  right: 10px;
  top: 10px;
  :hover button {
    box-shadow: 0px 0px 10px #41555d;
    color: #41555d;
  }
  button {
    // color: white;
    box-shadow: 0px 0px 10px darkgrey;
    background: transparent;
    outline: none;
    border: none;
    // min-width: 180px;
    // margin-top: 20px;
    // color: white;
  }
}

.homepage-hero-module {
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
}

.video-container .poster img,
.video-container {
  overflow: hidden;
  video {
    z-index: 0;
    position: absolute;
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
    transform: scale(1);
    transition: 1s;
  }
  .videoFilter {
    /* 背景虚化 */
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    transform: scale(1.1);
    transition: 2s;
  }
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0);
}
// #login {
//   min-width: 300px;
//   position: absolute;
//   z-index: 9;
//   padding: 50px;
//   box-shadow: 0px 0px 10px darkgrey;
//   // box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
//   right: 15%;
//   top: 28%;
//   /deep/.el-form-item__label {
//     color: white;
//   }

// }
// #login:hover+.homepage-hero-module>.video-container>video {
//     /* 背景虚化 */
//     -webkit-filter: blur(10px);
//     -moz-filter: blur(10px);
//     -o-filter: blur(10px);
//     -ms-filter: blur(10px);
//     filter: blur(10px);
//     transform: scale(1.1);
//     transition: 2s;
//   }
</style>
