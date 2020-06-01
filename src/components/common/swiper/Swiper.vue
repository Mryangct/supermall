<template>
  <div id="hy-swiper">
    <div class="swiper">
      <div class="slide">
        <img src="https://imgcps.jd.com/ling4/100004323294/5p6B5a6i5b-F5aSH/6L-95rGC5p6B6Ie055Sf5rS7/p-5d91a4f642dd5b7c7d52cbc8/2eac115e/cr/s1125x690/q70.jpg" alt="" />
      </div>
      <div class="slide">
        <img src="https://imgcps.jd.com/ling4/100004323294/5p6B5a6i5b-F5aSH/6L-95rGC5p6B6Ie055Sf5rS7/p-5d91a4f642dd5b7c7d52cbc8/2eac115e/cr/s1125x690/q7.jpg" />
      </div>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div v-for="item in slideCount" class="indi-item" :class="{ active: item === currentIndex }" :key="item"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data: function() {
    return {
      slideCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 0, // 当前的index
      scrolling: false // 是否正在滚动
    };
  },
  props: {
    interval: { type: Number, default: 3000 },
    animDuration: { type: Number, default: 300 },
    moveRatio: { type: Number, default: 0.25 },
    showIndicator: { type: Boolean, default: true }
  },
  mounted: function() {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 100);
  },

  methods: {
    startTimer: function() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },

    setTransform: function(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },

    scrollContent: function(currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms';
      this.setTransform(currentPosition);
      this.checkPosition();
      this.scrolling = false;
    },

    checkPosition: function() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      });
    },

    handleDom: function() {
      let swiperEl = document.querySelector('.swiper');
      let slidesEls = swiperEl.getElementsByClassName('slide');
      // 2.保存个数
      this.slideCount = slidesEls.length;
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
       
      }
      this.setTransform(-this.totalWidth);
    }
  }
};
</script>
<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}
.slide {
  width: 100%;
  flex-shrink: 0;
}
.swiper {
  display: flex;
}
.slide img {
  width: 100%;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}
.indi-item {
  /* box-sizing: border-box; */
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: #fff;
  line-height: 8px;
  /*  text-align: center; */
  /* font-size: 12px; */
  margin: 0 5px;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
