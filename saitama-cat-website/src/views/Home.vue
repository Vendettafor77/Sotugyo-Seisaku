<template>
  <div class="home-page">
    <!-- ヒーローセクション -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-slide-up">埼玉県の保護猫を守る</h1>
          <p class="hero-subtitle animate-slide-up animate-delay-1">
            一匹一匹に新しい家族を見つけることを目指しています
          </p>
          <div class="hero-buttons animate-slide-up animate-delay-2">
            <router-link to="/shops" class="btn btn-primary">
              保護猫店舗を見る
            </router-link>
            <router-link to="/knowledge" class="btn btn-secondary">
              豆知識を読む
            </router-link>
          </div>
        </div>
        <div class="hero-image animate-slide-right animate-delay-3">
          <div class="image-placeholder">
            <p>ヒーロー画像<br />（保護猫の写真）</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 統計セクション -->
    <section class="stats section">
      <div class="container">
        <h2 class="section-title">埼玉県の保護猫現状</h2>
        <div class="stats-grid">
          <div class="stat-card animate-on-scroll">
            <div class="stat-number">XXX</div>
            <div class="stat-label">年間保護猫数</div>
          </div>
          <div class="stat-card animate-on-scroll">
            <div class="stat-number">XX</div>
            <div class="stat-label">保護猫カフェ数</div>
          </div>
          <div class="stat-card animate-on-scroll">
            <div class="stat-number">XXX</div>
            <div class="stat-label">里親成立数</div>
          </div>
          <div class="stat-card animate-on-scroll">
            <div class="stat-number">XX%</div>
            <div class="stat-label">里親成立率</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 紹介セクション -->
    <section class="intro section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2 class="intro-title">保護猫について</h2>
            <p class="intro-description">
              埼玉県では多くの猫たちが新しい家族を待っています。
              このサイトでは、保護猫の現状をお伝えし、
              一匹でも多くの猫たちが幸せな家庭に迎えられることを願っています。
            </p>
            <p class="intro-description">
              保護猫カフェでの触れ合い、イベント情報、
              飼育に関する豆知識など、役立つ情報をお届けします。
            </p>
            <router-link to="/knowledge" class="btn btn-primary">
              詳しく見る
            </router-link>
          </div>
          <div class="intro-image">
            <div class="image-placeholder">
              <p>紹介画像<br />（保護猫の写真）</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ナビゲーションカード -->
    <section class="navigation-cards section">
      <div class="container">
        <h2 class="section-title">サイトのご案内</h2>
        <div class="cards-grid">
          <router-link to="/shops" class="nav-card hover-lift">
            <div class="card-icon">🏪</div>
            <h3 class="card-title">保護猫店舗</h3>
            <p class="card-description">
              埼玉県内の保護猫カフェや保護団体の情報をご紹介します。
            </p>
          </router-link>

          <router-link to="/events" class="nav-card hover-lift">
            <div class="card-icon">📅</div>
            <h3 class="card-title">イベント情報</h3>
            <p class="card-description">
              保護猫のお見合い会や譲渡会などのイベント情報をお知らせします。
            </p>
          </router-link>

          <router-link to="/knowledge" class="nav-card hover-lift">
            <div class="card-icon">📚</div>
            <h3 class="card-title">豆知識</h3>
            <p class="card-description">
              保護猫の飼い方や健康管理について、役立つ情報をお届けします。
            </p>
          </router-link>

          <router-link to="/contact" class="nav-card hover-lift">
            <div class="card-icon">✉️</div>
            <h3 class="card-title">お問い合わせ</h3>
            <p class="card-description">
              ご質問やお問い合わせはこちらから。お気軽にご相談ください。
            </p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    // スクロールアニメーションの設定
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      }, observerOptions);

      // アニメーション対象要素を監視
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el);
      });
    },
  },
};
</script>

<style scoped>
/* ヒーローセクション */
.hero {
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    rgba(255, 142, 60, 0.1) 100%
  );
  padding: var(--spacing-xxl) 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--text-headline);
  margin: 0;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--text-paragraph);
  margin: 0;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  height: 400px;
  background-color: var(--surface-white);
  border: 2px dashed var(--accent-primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-paragraph);
  font-weight: 500;
}

/* 統計セクション */
.stats {
  background-color: var(--surface-white);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.stat-card {
  text-align: center;
  padding: var(--spacing-xl);
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  transition: var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: var(--font-size-lg);
  color: var(--text-paragraph);
  font-weight: 500;
}

/* 紹介セクション */
.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  align-items: center;
}

.intro-title {
  margin-bottom: var(--spacing-lg);
}

.intro-description {
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

/* ナビゲーションカード */
.navigation-cards {
  background-color: var(--surface-white);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.nav-card {
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  text-decoration: none;
  color: var(--text-paragraph);
  transition: var(--transition-base);
}

.nav-card:hover {
  color: var(--text-paragraph);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-headline);
  margin-bottom: var(--spacing-sm);
}

.card-description {
  line-height: 1.6;
  margin: 0;
}

/* モバイル対応 */
@media (max-width: 767px) {
  .hero .container,
  .intro-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .hero {
    padding: var(--spacing-xl) 0;
    min-height: auto;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .hero-buttons {
    justify-content: center;
  }

  .image-placeholder {
    height: 250px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  .stat-card {
    padding: var(--spacing-lg);
  }

  .stat-number {
    font-size: var(--font-size-3xl);
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
}
</style>
