<template>
  <div class="contact-page">
    <div class="container">
      <!-- ページヘッダー -->
      <header class="page-header">
        <h1 class="page-title">お問い合わせ</h1>
        <p class="page-description">
          保護猫に関するご質問やお問い合わせは、<br />
          こちらのフォームからお気軽にご連絡ください。
        </p>
      </header>

      <!-- お問い合わせフォーム -->
      <section class="contact-form-section">
        <div class="form-container">
          <form
            class="contact-form"
            @submit.prevent="submitForm"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <!-- Netlify用の隠しフィールド -->
            <input type="hidden" name="form-name" value="contact" />

            <!-- 姓名 -->
            <div class="form-row">
              <div class="form-group">
                <label for="lastName" class="form-label">
                  姓 <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  v-model="form.lastName"
                  class="form-input"
                  :class="{ error: errors.lastName }"
                  required
                />
                <span v-if="errors.lastName" class="error-message">
                  {{ errors.lastName }}
                </span>
              </div>
              <div class="form-group">
                <label for="firstName" class="form-label">
                  名 <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  v-model="form.firstName"
                  class="form-input"
                  :class="{ error: errors.firstName }"
                  required
                />
                <span v-if="errors.firstName" class="error-message">
                  {{ errors.firstName }}
                </span>
              </div>
            </div>

            <!-- 性別 -->
            <div class="form-group">
              <label for="gender" class="form-label">性別</label>
              <select
                id="gender"
                name="gender"
                v-model="form.gender"
                class="form-select"
              >
                <option value="">選択してください</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">その他</option>
              </select>
            </div>

            <!-- 住所 -->
            <div class="form-group">
              <label for="address" class="form-label">
                住所 <span class="required">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                v-model="form.address"
                class="form-input"
                :class="{ error: errors.address }"
                placeholder="例：埼玉県さいたま市..."
                required
              />
              <span v-if="errors.address" class="error-message">
                {{ errors.address }}
              </span>
            </div>

            <!-- 電話番号 -->
            <div class="form-group">
              <label for="phone" class="form-label">
                電話番号 <span class="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                v-model="form.phone"
                class="form-input"
                :class="{ error: errors.phone }"
                placeholder="例：090-1234-5678"
                required
              />
              <span v-if="errors.phone" class="error-message">
                {{ errors.phone }}
              </span>
            </div>

            <!-- メールアドレス -->
            <div class="form-group">
              <label for="email" class="form-label">
                メールアドレス <span class="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
                class="form-input"
                :class="{ error: errors.email }"
                placeholder="例：example@email.com"
                required
              />
              <span v-if="errors.email" class="error-message">
                {{ errors.email }}
              </span>
            </div>

            <!-- お問い合わせ内容 -->
            <div class="form-group">
              <label for="message" class="form-label">
                お問い合わせ内容 <span class="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                v-model="form.message"
                class="form-textarea"
                :class="{ error: errors.message }"
                rows="6"
                placeholder="保護猫に関するご質問やお問い合わせ内容をお書きください..."
                required
              ></textarea>
              <span v-if="errors.message" class="error-message">
                {{ errors.message }}
              </span>
            </div>

            <!-- 送信ボタン -->
            <div class="form-submit">
              <button
                type="submit"
                class="btn btn-primary submit-btn"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">送信中...</span>
                <span v-else>送信する</span>
              </button>
            </div>
          </form>

          <!-- 送信完了メッセージ -->
          <div v-if="submitSuccess" class="success-message">
            <h3>送信完了</h3>
            <p>
              お問い合わせありがとうございます。<br />内容を確認次第、ご連絡いたします。
            </p>
          </div>
        </div>
      </section>

      <!-- お問い合わせ情報 -->
      <section class="contact-info-section">
        <div class="contact-info-grid">
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3 class="info-title">メールでのお問い合わせ</h3>
            <p class="info-content">info@saitama-cats.com</p>
          </div>

          <div class="info-card">
            <div class="info-icon">🕐</div>
            <h3 class="info-title">受付時間</h3>
            <p class="info-content">
              平日 10:00 - 18:00<br />（土日祝日は除く）
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">💬</div>
            <h3 class="info-title">お返事について</h3>
            <p class="info-content">
              通常2-3営業日以内に<br />ご返信いたします
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        gender: "",
        address: "",
        phone: "",
        email: "",
        message: "",
      },
      errors: {},
      isSubmitting: false,
      submitSuccess: false,
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      // 姓のバリデーション
      if (!this.form.lastName.trim()) {
        this.errors.lastName = "姓は必須項目です";
      }

      // 名のバリデーション
      if (!this.form.firstName.trim()) {
        this.errors.firstName = "名は必須項目です";
      }

      // 住所のバリデーション
      if (!this.form.address.trim()) {
        this.errors.address = "住所は必須項目です";
      }

      // 電話番号のバリデーション
      if (!this.form.phone.trim()) {
        this.errors.phone = "電話番号は必須項目です";
      } else if (!/^[0-9\-\+\(\)\s]+$/.test(this.form.phone)) {
        this.errors.phone = "正しい電話番号を入力してください";
      }

      // メールアドレスのバリデーション
      if (!this.form.email.trim()) {
        this.errors.email = "メールアドレスは必須項目です";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = "正しいメールアドレスを入力してください";
      }

      // メッセージのバリデーション
      if (!this.form.message.trim()) {
        this.errors.message = "お問い合わせ内容は必須項目です";
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = "お問い合わせ内容は10文字以上で入力してください";
      }

      return Object.keys(this.errors).length === 0;
    },

    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        // 開発環境では成功シミュレーション
        if (import.meta.env.DEV) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          this.submitSuccess = true;
          this.resetForm();
        } else {
          // 本番環境では実際にNetlifyにフォーム送信
          // Netlifyが自動的に処理します
          this.submitSuccess = true;
          this.resetForm();
        }
      } catch (error) {
        console.error("送信エラー:", error);
        alert("送信に失敗しました。しばらくしてから再度お試しください。");
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.form = {
        lastName: "",
        firstName: "",
        gender: "",
        address: "",
        phone: "",
        email: "",
        message: "",
      };
      this.errors = {};
    },
  },
};
</script>

<style scoped>
.contact-page {
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

.contact-form-section {
  margin-bottom: var(--spacing-xxl);
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xxl);
  box-shadow: var(--shadow-sm);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-label {
  font-weight: 600;
  color: var(--text-headline);
  font-size: var(--font-size-base);
}

.required {
  color: var(--accent-secondary);
}

.form-input,
.form-select,
.form-textarea {
  padding: var(--spacing-sm);
  border: 2px solid #e1e5e9;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: inherit;
  transition: var(--transition-base);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(255, 142, 60, 0.1);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: var(--accent-secondary);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  color: var(--accent-secondary);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
}

.form-submit {
  margin-top: var(--spacing-md);
  text-align: center;
}

.submit-btn {
  min-width: 200px;
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: var(--spacing-xl);
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: var(--radius-lg);
  color: #155724;
}

.success-message h3 {
  margin-bottom: var(--spacing-sm);
  color: #155724;
}

.contact-info-section {
  margin-top: var(--spacing-xxl);
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.info-card {
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.info-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.info-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.info-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-headline);
  margin-bottom: var(--spacing-sm);
}

.info-content {
  color: var(--text-paragraph);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 767px) {
  .form-container {
    margin: 0 var(--spacing-sm);
    padding: var(--spacing-lg);
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .info-card {
    margin: 0 var(--spacing-sm);
  }

  .submit-btn {
    min-width: auto;
    width: 100%;
  }
}
</style>
