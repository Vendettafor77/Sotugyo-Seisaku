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

      <!-- 店舗スライダー -->
      <section class="shops-slider">
        <ShopSlider :shops="shops" />
      </section>
    </div>
  </div>
</template>

<script>
import ShopSlider from "@/components/shops/ShopSlider.vue";

export default {
  name: "Shops",
  components: {
    ShopSlider,
  },
  data() {
    return {
      shops: [
        {
          id: 1,
          name: "保護猫カフェ みゃおみゃお",
          address: "さいたま市大宮区桜木町1-2-3",
          phone: "048-123-4567",
          hours: "10:00 - 19:00",
        },
        {
          id: 2,
          name: "ネコの家 ハッピーテール",
          address: "川口市本町4-5-6",
          phone: "048-234-5678",
          hours: "11:00 - 20:00",
        },
        {
          id: 3,
          name: "ふわふわ保護猫センター",
          address: "所沢市東町2-8-9",
          phone: "04-2345-6789",
          hours: "9:00 - 18:00",
        },
        {
          id: 4,
          name: "にゃんにゃんハウス",
          address: "越谷市レイクタウン3-1-1",
          phone: "048-345-6789",
          hours: "10:30 - 19:30",
        },
        {
          id: 5,
          name: "Cat's Heaven カフェ",
          address: "熊谷市中央1-100",
          phone: "048-456-7890",
          hours: "12:00 - 21:00",
        },
        {
          id: 6,
          name: "保護猫シェルター みらい",
          address: "春日部市粕壁東2-15-8",
          phone: "048-567-8901",
          hours: "9:30 - 17:30",
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

.shops-slider {
  margin-bottom: var(--spacing-xxl);
}

@media (max-width: 767px) {
  .shops-page {
    padding: var(--spacing-xl) 0;
  }
}
</style>
