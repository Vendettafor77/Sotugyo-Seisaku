<template>
  <div class="knowledge-page">
    <div class="container">
      <!-- ページヘッダー -->
      <header class="page-header">
        <h1 class="page-title">保護猫豆知識</h1>
        <p class="page-description">
          保護猫の飼い方、健康管理、実際の体験談など、
          役立つ情報をお届けします。
        </p>
      </header>

      <!-- フォトギャラリー -->
      <section class="photo-gallery section">
        <h2 class="section-title">保護猫たちの写真</h2>
        <div class="photo-grid">
          <div class="photo-item" v-for="n in 8" :key="n">
            <div class="image-placeholder">
              <p>保護猫の写真 {{ n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 知識記事 -->
      <section class="articles section">
        <h2 class="section-title">保護猫について知ろう</h2>
        <div class="articles-grid">
          <article
            class="article-card"
            v-for="article in articles"
            :key="article.id"
          >
            <div class="article-image">
              <div class="image-placeholder">記事画像</div>
            </div>
            <div class="article-content">
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <button class="btn btn-secondary">続きを読む</button>
            </div>
          </article>
        </div>
      </section>

      <!-- 体験談 -->
      <section class="testimonials section">
        <h2 class="section-title">飼い主の体験談</h2>
        <div class="testimonials-grid">
          <div
            class="testimonial-card"
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <div class="testimonial-content">
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <div class="avatar-placeholder">👤</div>
              </div>
              <div class="author-info">
                <p class="author-name">{{ testimonial.author }}</p>
                <p class="author-cat">愛猫: {{ testimonial.catName }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Knowledge",
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "記事タイトルを入力してください 1",
          excerpt:
            "記事の要約を入力してください。保護猫に関する有用な情報をお届けします。",
        },
        {
          id: 2,
          title: "記事タイトルを入力してください 2",
          excerpt:
            "記事の要約を入力してください。保護猫に関する有用な情報をお届けします。",
        },
        {
          id: 3,
          title: "記事タイトルを入力してください 3",
          excerpt:
            "記事の要約を入力してください。保護猫に関する有用な情報をお届けします。",
        },
      ],
      testimonials: [
        {
          id: 1,
          text: "体験談の内容を入力してください。保護猫を迎えた時の気持ちや体験を教えてください。",
          author: "飼い主の名前 1",
          catName: "猫の名前 1",
        },
        {
          id: 2,
          text: "体験談の内容を入力してください。保護猫を迎えた時の気持ちや体験を教えてください。",
          author: "飼い主の名前 2",
          catName: "猫の名前 2",
        },
        {
          id: 3,
          text: "体験談の内容を入力してください。保護猫を迎えた時の気持ちや体験を教えてください。",
          author: "飼い主の名前 3",
          catName: "猫の名前 3",
        },
      ],
    };
  },
};
</script>

<style scoped>
.knowledge-page {
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

.section {
  margin-bottom: var(--spacing-xxl);
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

/* フォトギャラリー */
.photo-gallery {
  background-color: var(--surface-white);
  padding: var(--spacing-xxl) 0;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.photo-item {
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.photo-item:hover {
  box-shadow: var(--shadow-lg);
  transform: scale(1.02);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-paragraph);
  font-weight: 500;
  text-align: center;
}

/* 記事セクション */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

.article-card {
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.article-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.article-image {
  height: 200px;
  background-color: var(--bg-primary);
}

.article-content {
  padding: var(--spacing-lg);
}

.article-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-headline);
  margin-bottom: var(--spacing-sm);
}

.article-excerpt {
  color: var(--text-paragraph);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

/* 体験談セクション */
.testimonials {
  background-color: var(--surface-white);
  padding: var(--spacing-xxl) 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

.testimonial-card {
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.testimonial-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.testimonial-content {
  margin-bottom: var(--spacing-lg);
}

.testimonial-text {
  font-style: italic;
  font-size: var(--font-size-lg);
  color: var(--text-paragraph);
  line-height: 1.6;
  margin: 0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-full);
  background-color: var(--surface-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
}

.avatar-placeholder {
  color: var(--text-paragraph);
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 600;
  color: var(--text-headline);
  margin: 0;
}

.author-cat {
  color: var(--text-paragraph);
  font-size: var(--font-size-sm);
  margin: 0;
}

@media (max-width: 767px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }

  .articles-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .article-card,
  .testimonial-card {
    margin: 0 var(--spacing-sm);
  }
}
</style>
