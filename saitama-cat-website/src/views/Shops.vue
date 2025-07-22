<template>
  <div class="shops-page">
    <div class="container">
      <!-- ページヘッダー -->
      <header class="page-header">
        <h1 class="page-title">保護猫店舗一覧</h1>
        <p class="page-description">
          埼玉県内の保護猫カフェや保護団体をご紹介します。
          実際に猫たちと触れ合って、運命の出会いを見つけてください。
        </p>
      </header>

      <!-- 店舗スライダー（後で実装） -->
      <section class="shops-slider">
        <div class="slider-container">
          <p class="placeholder-text">
            ここに店舗スライダーが表示されます<br />
            （Phase 3 で実装予定）
          </p>
        </div>
      </section>

      <!-- 一時的な店舗カード表示 -->
      <section class="shops-grid">
        <div class="shop-card" v-for="shop in shops" :key="shop.id">
          <div class="shop-image">
            <div class="image-placeholder">店舗画像</div>
          </div>
          <div class="shop-info">
            <h3 class="shop-name">{{ shop.name }}</h3>
            <p class="shop-address">📍 {{ shop.address }}</p>
            <p class="shop-phone">📞 {{ shop.phone }}</p>
            <p class="shop-hours">🕐 {{ shop.hours }}</p>
            <p class="shop-description">{{ shop.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shops",
  data() {
    return {
      shops: [
        {
          id: 1,
          name: "店舗名を入力してください 1",
          address: "住所を入力してください",
          phone: "電話番号を入力してください",
          hours: "営業時間を入力してください",
          description: "店舗の説明を入力してください。",
        },
        {
          id: 2,
          name: "店舗名を入力してください 2",
          address: "住所を入力してください",
          phone: "電話番号を入力してください",
          hours: "営業時間を入力してください",
          description: "店舗の説明を入力してください。",
        },
        {
          id: 3,
          name: "店舗名を入力してください 3",
          address: "住所を入力してください",
          phone: "電話番号を入力してください",
          hours: "営業時間を入力してください",
          description: "店舗の説明を入力してください。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shops-page {
  padding: var(--spacing-xxl) 0;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xxl);
}

.page-title {
  margin-bottom: var(--spacing-md);
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--text-paragraph);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.slider-container {
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xxl);
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  border: 2px dashed var(--accent-primary);
}

.placeholder-text {
  color: var(--text-paragraph);
  font-size: var(--font-size-lg);
  margin: 0;
}

.shops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

.shop-card {
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.shop-card:hover {
  box-shadow: var(--shadow-lg);
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
  font-weight: 500;
}

.shop-info {
  padding: var(--spacing-lg);
}

.shop-name {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-headline);
  margin-bottom: var(--spacing-sm);
}

.shop-address,
.shop-phone,
.shop-hours {
  font-size: var(--font-size-base);
  color: var(--text-paragraph);
  margin-bottom: var(--spacing-xs);
}

.shop-description {
  color: var(--text-paragraph);
  line-height: 1.6;
  margin-top: var(--spacing-sm);
}

@media (max-width: 767px) {
  .shops-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .shop-card {
    margin: 0 var(--spacing-sm);
  }
}
</style>
