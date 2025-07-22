<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <!-- ロゴエリア -->
        <div class="nav-logo">
          <router-link to="/" class="logo-link">
            <h1 class="logo-text">埼玉保護猫</h1>
          </router-link>
        </div>

        <!-- モバイルメニューボタン -->
        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ 'is-open': isMobileMenuOpen }"
          aria-label="メニューを開く"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <!-- ナビゲーションメニュー -->
        <ul class="nav-menu" :class="{ 'is-open': isMobileMenuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMobileMenu">
              ホーム
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shops" class="nav-link" @click="closeMobileMenu">
              保護猫店舗
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/events" class="nav-link" @click="closeMobileMenu">
              イベント情報
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/knowledge"
              class="nav-link"
              @click="closeMobileMenu"
            >
              豆知識
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="nav-link nav-link--cta"
              @click="closeMobileMenu"
            >
              お問い合わせ
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
  mounted() {
    // ESCキーでメニューを閉じる
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });
  },
};
</script>

<style scoped>
.header {
  background-color: var(--surface-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
}

/* ロゴエリア */
.nav-logo {
  flex-shrink: 0;
}

.logo-link {
  text-decoration: none;
}

.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--accent-primary);
  margin: 0;
}

/* モバイルメニューボタン */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  z-index: 101;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: var(--text-headline);
  transition: var(--transition-base);
  transform-origin: center;
}

.mobile-menu-btn.is-open .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.is-open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.is-open .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* ナビゲーションメニュー */
.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  font-weight: 500;
  font-size: var(--font-size-base);
  color: var(--text-paragraph);
  text-decoration: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
  position: relative;
}

.nav-link:hover {
  color: var(--accent-primary);
  background-color: rgba(255, 142, 60, 0.1);
}

.nav-link--cta {
  background-color: var(--accent-primary);
  color: var(--surface-white);
}

.nav-link--cta:hover {
  background-color: var(--accent-secondary);
  color: var(--surface-white);
}

/* アクティブ状態 */
.nav-link.router-link-active {
  color: var(--accent-primary);
  font-weight: 600;
}

.nav-link--cta.router-link-active {
  color: var(--surface-white);
}

/* モバイル対応 */
@media (max-width: 767px) {
  .mobile-menu-btn {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background-color: var(--surface-white);
    flex-direction: column;
    padding: var(--spacing-xxl) var(--spacing-lg) var(--spacing-lg);
    box-shadow: var(--shadow-xl);
    transition: right var(--transition-base);
    z-index: 100;
    gap: var(--spacing-md);
  }

  .nav-menu.is-open {
    right: 0;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    display: block;
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-lg);
    border-radius: var(--radius-lg);
  }

  .nav-link--cta {
    margin-top: var(--spacing-md);
    text-align: center;
  }
}

/* タブレット対応 */
@media (min-width: 768px) and (max-width: 1024px) {
  .nav-menu {
    gap: var(--spacing-md);
  }

  .nav-link {
    font-size: var(--font-size-sm);
  }
}
</style>
