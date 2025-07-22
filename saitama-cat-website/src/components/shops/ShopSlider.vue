<template>
  <div class="shop-slider">
    <div class="slider-container" ref="sliderContainer">
      <div
        class="slider-track"
        :style="{ transform: `translateX(${translateX}%)` }"
      >
        <div class="slide" v-for="shop in shops" :key="shop.id">
          <div class="shop-card">
            <div class="shop-image">
              <div class="image-placeholder">店舗画像</div>
            </div>
            <div class="shop-info">
              <h3 class="shop-name">{{ shop.name }}</h3>
              <p class="shop-address">📍 {{ shop.address }}</p>
              <p class="shop-phone">📞 {{ shop.phone }}</p>
              <p class="shop-hours">🕐 {{ shop.hours }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 前後ボタン -->
    <button
      class="slider-btn slider-btn--prev"
      @click="prevSlide"
      :disabled="currentIndex === 0"
    >
      ←
    </button>
    <button
      class="slider-btn slider-btn--next"
      @click="nextSlide"
      :disabled="currentIndex >= maxIndex"
    >
      →
    </button>

    <!-- インジケーター -->
    <div class="slider-indicators">
      <button
        v-for="page in totalPages"
        :key="page"
        class="indicator"
        :class="{ active: page - 1 === currentIndex }"
        @click="goToSlide(page - 1)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopSlider",
  props: {
    shops: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      isMobile: false,
    };
  },
  computed: {
    itemsPerView() {
      return this.isMobile ? 1 : 3;
    },
    itemWidth() {
      return this.isMobile ? 100 : 33.333;
    },
    totalPages() {
      return Math.ceil(this.shops.length / this.itemsPerView);
    },
    maxIndex() {
      // 計算總頁數：每頁顯示3個，所以總頁數 = ceil(總數 / 3)
      return Math.max(0, Math.ceil(this.shops.length / this.itemsPerView) - 1);
    },
    translateX() {
      // 每次移動3個項目的寬度
      return -(this.currentIndex * (this.itemsPerView * this.itemWidth));
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    goToSlide(pageIndex) {
      if (pageIndex >= 0 && pageIndex <= this.maxIndex) {
        this.currentIndex = pageIndex;
      }
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 767;
      // 重置currentIndex以防超出範圍
      if (this.currentIndex > this.maxIndex) {
        this.currentIndex = 0;
      }
    },
  },
};
</script>

<style scoped>
.shop-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.slider-container {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  flex: 0 0 33.333%;
  padding: 0 10px;
  box-sizing: border-box;
}

.shop-card {
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  margin: 0 5px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.shop-card:hover {
  transform: translateY(-4px);
}

.shop-image {
  height: 200px;
  background-color: var(--bg-primary);
}

.image-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-paragraph);
}

.shop-info {
  padding: var(--spacing-lg);
}

.shop-name {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.shop-address,
.shop-phone,
.shop-hours {
  margin-bottom: var(--spacing-xs);
  color: var(--text-paragraph);
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--accent-primary);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-lg);
  cursor: pointer;
  transition: var(--transition-base);
  z-index: 2;
}

.slider-btn:hover:not(:disabled) {
  background-color: var(--accent-secondary);
}

.slider-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-btn--prev {
  left: var(--spacing-sm);
}

.slider-btn--next {
  right: var(--spacing-sm);
}

.slider-indicators {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-md);
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  border: none;
  background-color: #ccc;
  cursor: pointer;
  transition: var(--transition-base);
}

.indicator.active {
  background-color: var(--accent-primary);
}

@media (max-width: 767px) {
  .slide {
    flex: 0 0 100%;
    padding: 0 5px;
  }

  .shop-card {
    margin: 0;
  }

  .slider-btn {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-base);
  }
}
</style>
