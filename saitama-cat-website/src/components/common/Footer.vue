<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- サイト情報 -->
        <div class="footer-section">
          <h3 class="footer-title">埼玉保護猫</h3>
          <p class="footer-description">
            埼玉県の保護猫現状を紹介し、<br />
            一匹一匹に新しい家族を見つけることを目指しています。
          </p>
        </div>

        <!-- クイックリンク -->
        <div class="footer-section">
          <h4 class="footer-heading">クイックリンク</h4>
          <nav class="footer-nav">
            <router-link to="/" class="footer-link">ホーム</router-link>
            <router-link to="/shops" class="footer-link"
              >保護猫店舗</router-link
            >
            <router-link to="/events" class="footer-link"
              >イベント情報</router-link
            >
            <router-link to="/knowledge" class="footer-link"
              >豆知識</router-link
            >
            <router-link to="/contact" class="footer-link"
              >お問い合わせ</router-link
            >
          </nav>
        </div>

        <!-- お問い合わせ情報 -->
        <div class="footer-section">
          <h4 class="footer-heading">お問い合わせ</h4>
          <div class="contact-info">
            <p class="contact-item">
              <span class="contact-label">メール:</span>
              <a href="mailto:info@saitama-cats.com" class="footer-link">
                info@saitama-cats.com
              </a>
            </p>
            <p class="contact-item">
              <span class="contact-label">受付時間:</span>
              平日 10:00 - 18:00
            </p>
          </div>
        </div>
      </div>

      <!-- コピーライト -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2025 埼玉保護猫サイト. All rights reserved.</p>
          <p class="graduation-note">卒業制作 - 埼玉地域保護猫現状紹介サイト</p>
        </div>

        <!-- トップに戻るボタン -->
        <button
          @click="scrollToTop"
          class="scroll-top-btn"
          title="トップに戻る"
        >
          ↑
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: var(--text-headline);
  color: var(--surface-white);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  padding: var(--spacing-xxl) 0 var(--spacing-lg);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--accent-primary);
  margin: 0;
}

.footer-heading {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--surface-white);
  margin: 0 0 var(--spacing-sm) 0;
}

.footer-description {
  color: #cccccc;
  line-height: 1.6;
  margin: 0;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-link {
  color: #cccccc;
  text-decoration: none;
  transition: var(--transition-base);
  padding: var(--spacing-xs) 0;
}

.footer-link:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.contact-item {
  color: #cccccc;
  margin: 0;
}

.contact-label {
  font-weight: 600;
  color: var(--surface-white);
  margin-right: var(--spacing-xs);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) 0;
  border-top: 1px solid #333;
  margin-top: var(--spacing-lg);
}

.copyright {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.copyright p {
  margin: 0;
  color: #cccccc;
  font-size: var(--font-size-sm);
}

.graduation-note {
  font-style: italic;
  color: #999;
}

.scroll-top-btn {
  width: 48px;
  height: 48px;
  background-color: var(--accent-primary);
  color: var(--surface-white);
  border: none;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xl);
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition-base);
  box-shadow: var(--shadow-md);
}

.scroll-top-btn:hover {
  background-color: var(--accent-secondary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* モバイル対応 */
@media (max-width: 767px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl) 0 var(--spacing-md);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }

  .copyright {
    align-items: center;
  }

  .scroll-top-btn {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-lg);
  }
}

/* タブレット対応 */
@media (min-width: 768px) and (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
