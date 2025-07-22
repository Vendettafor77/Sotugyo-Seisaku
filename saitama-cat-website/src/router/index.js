import { createRouter, createWebHistory } from "vue-router";

// ページコンポーネントのインポート
import Home from "@/views/Home.vue";
import Shops from "@/views/Shops.vue";
import Events from "@/views/Events.vue";
import Knowledge from "@/views/Knowledge.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "ホーム - 埼玉県保護猫サイト",
      description:
        "埼玉県の保護猫現状を紹介するサイトです。一匹一匹に新しい家族を見つけることを目指しています。",
    },
  },
  {
    path: "/shops",
    name: "Shops",
    component: Shops,
    meta: {
      title: "保護猫店舗一覧 - 埼玉県保護猫サイト",
      description: "埼玉県内の保護猫カフェや保護団体の店舗情報をご紹介します。",
    },
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
    meta: {
      title: "イベント情報 - 埼玉県保護猫サイト",
      description: "保護猫に関するイベントやお見合い会の情報をお知らせします。",
    },
  },
  {
    path: "/knowledge",
    name: "Knowledge",
    component: Knowledge,
    meta: {
      title: "保護猫豆知識 - 埼玉県保護猫サイト",
      description:
        "保護猫の飼い方や健康管理について、役立つ情報をお届けします。",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "お問い合わせ - 埼玉県保護猫サイト",
      description:
        "ご質問やお問い合わせはこちらから。保護猫に関することお気軽にご相談ください。",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: Home,
    meta: {
      title: "ページが見つかりません - 埼玉県保護猫サイト",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// ページタイトルとメタデータの設定
router.beforeEach((to, from, next) => {
  // ページタイトルの設定
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // メタディスクリプションの設定
  if (to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", to.meta.description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", to.meta.description);
      document.head.appendChild(metaDescription);
    }
  }

  next();
});

export default router;
