<template>
  <div class="events-page">
    <div class="container">
      <!-- ページヘッダー -->
      <header class="page-header">
        <h1 class="page-title">イベント情報</h1>
        <p class="page-description">
          保護猫の譲渡会やお見合い会などのイベント情報をご案内します。
          カレンダーから気になるイベントをチェックしてください。
        </p>
      </header>

      <!-- カレンダー（後で実装） -->
      <section class="calendar-section">
        <div class="calendar-container">
          <p class="placeholder-text">
            ここにイベントカレンダーが表示されます<br />
            （Phase 3 で実装予定）
          </p>
        </div>
      </section>

      <!-- 今後のイベント一覧 -->
      <section class="upcoming-events">
        <h2 class="section-title">今後のイベント</h2>
        <div class="events-list">
          <div class="event-card" v-for="event in events" :key="event.id">
            <div class="event-date">
              <span class="month">{{ event.month }}</span>
              <span class="day">{{ event.day }}</span>
            </div>
            <div class="event-info">
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-time">🕐 {{ event.time }}</p>
              <p class="event-location">📍 {{ event.location }}</p>
              <p class="event-description">{{ event.description }}</p>
            </div>
            <div class="event-action">
              <button class="btn btn-primary">詳細を見る</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      events: [
        {
          id: 1,
          month: "12",
          day: "15",
          title: "イベントタイトルを入力してください 1",
          time: "時間を入力してください",
          location: "開催場所を入力してください",
          description: "イベントの詳細説明を入力してください。",
        },
        {
          id: 2,
          month: "12",
          day: "22",
          title: "イベントタイトルを入力してください 2",
          time: "時間を入力してください",
          location: "開催場所を入力してください",
          description: "イベントの詳細説明を入力してください。",
        },
        {
          id: 3,
          month: "01",
          day: "05",
          title: "イベントタイトルを入力してください 3",
          time: "時間を入力してください",
          location: "開催場所を入力してください",
          description: "イベントの詳細説明を入力してください。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events-page {
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

.calendar-container {
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xxl);
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  border: 2px dashed var(--accent-primary);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-text {
  color: var(--text-paragraph);
  font-size: var(--font-size-lg);
  margin: 0;
}

.upcoming-events {
  margin-top: var(--spacing-xxl);
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.event-card {
  background-color: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-lg);
  align-items: center;
  transition: var(--transition-base);
}

.event-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.event-date {
  background-color: var(--accent-primary);
  color: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  text-align: center;
  min-width: 80px;
}

.month {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.day {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  line-height: 1;
}

.event-info {
  flex: 1;
}

.event-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-headline);
  margin-bottom: var(--spacing-xs);
}

.event-time,
.event-location {
  font-size: var(--font-size-base);
  color: var(--text-paragraph);
  margin-bottom: var(--spacing-xs);
}

.event-description {
  color: var(--text-paragraph);
  line-height: 1.6;
  margin-top: var(--spacing-sm);
}

.event-action {
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .event-card {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-md);
  }

  .event-date {
    justify-self: center;
    max-width: 80px;
  }

  .event-action {
    justify-self: center;
  }
}
</style>
