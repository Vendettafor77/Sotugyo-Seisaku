<template>
  <div id="app">
    <!-- ヘッダー -->
    <Header />

    <!-- メインコンテンツエリア -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- フッター -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // ページロード時のアニメーション
    document.body.classList.add("loaded");
  },
};
</script>

<style>
/* グローバルスタイルのインポート */
@import "@/styles/variables.css";
@import "@/styles/main.css";
@import "@/styles/animations.css";

/* アプリケーション全体のレイアウト */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* ページ遷移アニメーション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-slow);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ローディング状態 */
body:not(.loaded) {
  overflow: hidden;
}

body:not(.loaded) #app {
  opacity: 0;
}

body.loaded #app {
  opacity: 1;
  transition: opacity var(--transition-slow);
}

/* スクロールバーのスタイリング (WebKit) */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-secondary);
}

/* 選択テキストのスタイル */
::selection {
  background-color: var(--accent-primary);
  color: var(--surface-white);
}

::-moz-selection {
  background-color: var(--accent-primary);
  color: var(--surface-white);
}

/* フォーカス表示の改善 */
.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: var(--spacing-xs);
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>
