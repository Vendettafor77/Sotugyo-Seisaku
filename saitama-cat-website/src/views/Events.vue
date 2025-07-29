<template>
  <div class="events-page">
    <div class="page-header">
      <h1 class="page-title">イベント情報</h1>
      <p class="page-description">
        埼玉県内で開催される保護猫関連のイベント情報をご紹介します。<br />
        譲渡会、セミナー、ワークショップなど様々な活動に参加できます。
      </p>
    </div>

    <!-- イベントカレンダーと活動情報 -->
    <section class="calendar-events-section">
      <div class="calendar-events-container">
        <!-- 左側：カレンダー -->
        <div class="calendar-side">
          <h2 class="section-subtitle">イベントカレンダー</h2>
          <EventCalendar
            :events="upcomingEvents"
            @event-selected="handleEventSelected"
          />
        </div>

        <!-- 右側：選択されたイベント詳細 -->
        <div class="event-details-side">
          <h2 class="section-subtitle">イベント詳細</h2>
          <div v-if="selectedEventDetail" class="selected-event-card">
            <div class="event-header">
              <h3 class="event-title">{{ selectedEventDetail.title }}</h3>
              <span
                class="category-badge"
                :class="selectedEventDetail.category"
              >
                {{ getCategoryName(selectedEventDetail.category) }}
              </span>
            </div>
            <div class="event-meta">
              <p class="event-date-display">
                📅 {{ formatEventDate(selectedEventDetail.date) }}
              </p>
              <p class="event-location">
                📍 {{ selectedEventDetail.location }}
              </p>
              <p class="event-time">🕐 {{ selectedEventDetail.time }}</p>
            </div>
            <div class="event-description">
              <h4>詳細内容</h4>
              <p>{{ selectedEventDetail.description }}</p>
            </div>
            <div class="event-participation">
              <h4>参加方法</h4>
              <p>{{ selectedEventDetail.participation }}</p>
            </div>
          </div>
          <div v-else class="no-event-selected">
            <div class="placeholder-content">
              <div class="placeholder-icon">📅</div>
              <h3>イベントを選択してください</h3>
              <p>
                カレンダーのイベント日をクリックすると、詳細情報が表示されます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 今後のイベント一覧 -->
    <section class="upcoming-events">
      <h2 class="section-title">今後のイベント</h2>
      <div class="event-list">
        <div class="event-card" v-for="event in upcomingEvents" :key="event.id">
          <div class="event-date">
            <div class="month">{{ getMonth(event.date) }}</div>
            <div class="day">{{ getDay(event.date) }}</div>
          </div>
          <div class="event-info">
            <h3 class="event-title">{{ event.title }}</h3>
            <p class="event-location">� {{ event.location }}</p>
            <p class="event-time">� {{ event.time }}</p>
            <p class="event-description">{{ event.shortDescription }}</p>
          </div>
          <div class="event-category">
            <span class="category-badge" :class="event.category">
              {{ getCategoryName(event.category) }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- イベント参加のお知らせ -->
    <section class="participation-info">
      <h2 class="section-title">イベント参加について</h2>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">📝</div>
          <h3>事前予約</h3>
          <p>
            一部のイベントは事前予約が必要です。詳細は各イベントの説明をご確認ください。
          </p>
        </div>
        <div class="info-card">
          <div class="info-icon">💡</div>
          <h3>持参物</h3>
          <p>
            筆記用具、身分証明書をお持ちください。譲渡会では印鑑も必要な場合があります。
          </p>
        </div>
        <div class="info-card">
          <div class="info-icon">❤️</div>
          <h3>参加費</h3>
          <p>
            多くのイベントは無料ですが、ワークショップなどは材料費が必要な場合があります。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EventCalendar from "../components/events/EventCalendar.vue";

export default {
  name: "Events",
  components: {
    EventCalendar,
  },
  data() {
    return {
      selectedEventDetail: null,
      upcomingEvents: [
        {
          id: 1,
          date: "2025-08-15",
          title: "保護猫譲渡会",
          location: "さいたま市浦和区コミュニティセンター",
          time: "10:00-15:00",
          shortDescription:
            "新しい家族を探している保護猫たちとの出会いの場です。",
          description:
            "新しい家族を探している保護猫たちとの出会いの場です。可愛い猫ちゃんたちがあなたを待っています。譲渡には事前の面談や条件がございますので、お気軽にスタッフにお声がけください。",
          participation:
            "事前予約不要、直接会場へお越しください。身分証明書をお持ちください。",
          category: "adoption",
        },
        {
          id: 2,
          date: "2025-08-22",
          title: "猫の健康セミナー",
          location: "埼玉県動物愛護センター",
          time: "14:00-16:00",
          shortDescription:
            "獣医師による猫の健康管理について学べるセミナーです。",
          description:
            "獣医師による猫の健康管理について学べるセミナーです。食事、予防接種、病気の早期発見について詳しく説明します。質疑応答の時間もございます。",
          participation: "要事前予約（電話: 048-123-4567）定員30名",
          category: "seminar",
        },
        {
          id: 3,
          date: "2025-08-28",
          title: "保護猫カフェ オープンデー",
          location: "保護猫カフェ みゃおみゃお",
          time: "11:00-18:00",
          shortDescription:
            "通常より多くの保護猫たちとふれあえる特別な日です。",
          description:
            "通常より多くの保護猫たちとふれあえる特別な日です。ドリンク1杯無料サービス付き。猫じゃらしやおもちゃの持参歓迎です。",
          participation:
            "当日受付、混雑時は入場制限あり。ドリンク代のみ（通常料金）",
          category: "cafe",
        },
        {
          id: 4,
          date: "2025-09-05",
          title: "秋の保護猫譲渡会",
          location: "川口市民会館",
          time: "10:00-16:00",
          shortDescription: "秋の特別企画の譲渡会です。",
          description:
            "秋の特別企画の譲渡会です。愛情いっぱいの新しい家族を見つけませんか。特別なプレゼント企画もご用意しています。",
          participation: "事前予約推奨（WEB予約可能）当日参加も可能です。",
          category: "adoption",
        },
        {
          id: 5,
          date: "2025-09-12",
          title: "猫の手作りおもちゃワークショップ",
          location: "ペッツワールド大宮店",
          time: "13:00-15:00",
          shortDescription:
            "家にある材料で簡単に作れる猫のおもちゃ作りを体験できます。",
          description:
            "家にある材料で簡単に作れる猫のおもちゃ作りを体験できます。作ったおもちゃはお持ち帰りいただけます。お子様連れも歓迎です。",
          participation: "材料費500円、要事前予約（定員15名）",
          category: "workshop",
        },
      ],
    };
  },
  methods: {
    getMonth(dateStr) {
      const date = new Date(dateStr);
      return date.getMonth() + 1 + "月";
    },
    getDay(dateStr) {
      const date = new Date(dateStr);
      return date.getDate();
    },
    getCategoryName(category) {
      const categories = {
        adoption: "譲渡会",
        seminar: "セミナー",
        cafe: "カフェ",
        workshop: "ワークショップ",
      };
      return categories[category] || "イベント";
    },
    handleEventSelected(event) {
      this.selectedEventDetail = event;
    },
    formatEventDate(dateStr) {
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
      const weekday = weekdays[date.getDay()];
      return `${year}年${month}月${day}日 (${weekday})`;
    },
  },
};
</script>

<style scoped>
.events-page {
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xxl);
}

.page-title {
  font-size: var(--font-size-xxl);
  color: var(--text-headline);
  margin-bottom: var(--spacing-md);
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--text-paragraph);
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
}

.calendar-section {
  margin-bottom: var(--spacing-xxl);
}

.calendar-events-section {
  margin-bottom: var(--spacing-xxl);
}

.calendar-events-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.calendar-side {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.event-details-side {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  min-height: 500px;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-headline);
  margin-bottom: var(--spacing-md);
  text-align: center;
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--accent-primary);
}

.selected-event-card {
  animation: fadeIn 0.3s ease-in-out;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.event-title {
  font-size: var(--font-size-lg);
  color: var(--accent-primary);
  margin: 0;
  flex: 1;
}

.event-meta {
  margin-bottom: var(--spacing-lg);
}

.event-date-display,
.event-location,
.event-time {
  margin-bottom: var(--spacing-xs);
  color: var(--text-paragraph);
  font-size: var(--font-size-base);
}

.event-description,
.event-participation {
  margin-bottom: var(--spacing-md);
}

.event-description h4,
.event-participation h4 {
  color: var(--text-headline);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-base);
  font-weight: 600;
}

.event-description p,
.event-participation p {
  color: var(--text-paragraph);
  line-height: 1.6;
  margin: 0;
}

.no-event-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 400px;
}

.placeholder-content {
  text-align: center;
  color: var(--text-paragraph);
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.placeholder-content h3 {
  color: var(--text-headline);
  margin-bottom: var(--spacing-sm);
}

.placeholder-content p {
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.upcoming-events {
  margin-bottom: var(--spacing-xxl);
}

.section-title {
  font-size: var(--font-size-xl);
  color: var(--text-headline);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.event-card {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: var(--spacing-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.event-date {
  flex-shrink: 0;
  background: var(--accent-primary);
  color: white;
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  text-align: center;
  min-width: 80px;
}

.month {
  font-size: var(--font-size-sm);
  margin-bottom: 4px;
}

.day {
  font-size: var(--font-size-xl);
  font-weight: 600;
}

.event-info {
  flex: 1;
}

.event-title {
  font-size: var(--font-size-lg);
  color: var(--accent-primary);
  margin-bottom: var(--spacing-sm);
}

.event-location,
.event-time {
  margin-bottom: var(--spacing-xs);
  color: var(--text-paragraph);
  font-size: var(--font-size-base);
}

.event-description {
  color: var(--text-paragraph);
  line-height: 1.6;
}

.event-category {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
}

.category-badge {
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: white;
}

.category-badge.adoption {
  background: var(--accent-secondary);
}

.category-badge.seminar {
  background: #4caf50;
}

.category-badge.cafe {
  background: #ff9800;
}

.category-badge.workshop {
  background: #9c27b0;
}

.participation-info {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.info-card {
  background: var(--surface-white);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.info-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.info-card h3 {
  color: var(--text-headline);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.info-card p {
  color: var(--text-paragraph);
  line-height: 1.6;
}

/* レスポンシブ */
@media (max-width: 767px) {
  .events-page {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  .page-title {
    font-size: var(--font-size-xl);
  }

  .page-description {
    font-size: var(--font-size-base);
  }

  .calendar-events-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .event-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .event-card {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .event-date {
    align-self: flex-start;
    min-width: 60px;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .no-event-selected {
    min-height: 300px;
  }
}
</style>
