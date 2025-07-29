<template>
  <div class="event-calendar">
    <!-- カレンダーヘッダー -->
    <div class="calendar-header">
      <button @click="prevMonth" class="nav-btn">←</button>
      <h2 class="month-year">{{ currentYear }}年{{ currentMonth }}月</h2>
      <button @click="nextMonth" class="nav-btn">→</button>
    </div>

    <!-- 曜日ヘッダー -->
    <div class="weekdays">
      <div class="weekday" v-for="day in weekdays" :key="day">
        {{ day }}
      </div>
    </div>

    <!-- カレンダーグリッド -->
    <div class="calendar-grid">
      <div
        v-for="day in calendarDays"
        :key="day.date"
        class="calendar-day"
        :class="{
          'other-month': !day.isCurrentMonth,
          today: day.isToday,
          'has-event': day.hasEvent,
        }"
        @click="selectDate(day)"
      >
        <span class="day-number">{{ day.day }}</span>
        <div v-if="day.hasEvent" class="event-dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCalendar",
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["event-selected"],
  data() {
    return {
      currentDate: new Date(),
      selectedEvent: null,
      weekdays: ["日", "月", "火", "水", "木", "金", "土"],
    };
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonth() {
      return this.currentDate.getMonth() + 1;
    },
    calendarDays() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();

      // 月の最初の日と最後の日
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      // カレンダー表示用の日付配列
      const days = [];

      // 前月の日付を埋める
      const firstDayOfWeek = firstDay.getDay();
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const date = new Date(year, month, -i);
        days.push({
          day: date.getDate(),
          date: this.formatDate(date),
          isCurrentMonth: false,
          isToday: this.isToday(date),
          hasEvent: this.hasEvent(date),
        });
      }

      // 当月の日付
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        days.push({
          day: day,
          date: this.formatDate(date),
          isCurrentMonth: true,
          isToday: this.isToday(date),
          hasEvent: this.hasEvent(date),
        });
      }

      // 次月の日付を埋める（6週間表示のため）
      const remainingDays = 42 - days.length;
      for (let day = 1; day <= remainingDays; day++) {
        const date = new Date(year, month + 1, day);
        days.push({
          day: day,
          date: this.formatDate(date),
          isCurrentMonth: false,
          isToday: this.isToday(date),
          hasEvent: this.hasEvent(date),
        });
      }

      return days;
    },
  },
  methods: {
    prevMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      );
    },
    nextMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      );
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    isToday(date) {
      const today = new Date();
      return this.formatDate(date) === this.formatDate(today);
    },
    hasEvent(date) {
      const dateStr = this.formatDate(date);
      return this.events.some((event) => event.date === dateStr);
    },
    selectDate(day) {
      if (day.hasEvent) {
        const event = this.events.find((event) => event.date === day.date);
        if (event) {
          this.$emit("event-selected", event);
        }
      }
    },
  },
};
</script>

<style scoped>
.event-calendar {
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  padding: 0 var(--spacing-xs);
}

.month-year {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-headline);
  margin: 0;
}

.nav-btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: var(--accent-secondary);
  transform: scale(1.1);
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  margin-bottom: var(--spacing-xs);
}

.weekday {
  text-align: center;
  padding: var(--spacing-xs);
  font-weight: 600;
  color: var(--text-paragraph);
  background: var(--bg-primary);
  font-size: var(--font-size-sm);
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #ddd;
  border: 1px solid #ddd;
}

.calendar-day {
  background: var(--surface-white);
  min-height: 50px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.calendar-day:hover {
  background: var(--bg-primary);
}

.calendar-day.other-month {
  background: #f8f8f8;
  color: #ccc;
}

.calendar-day.today {
  background: rgba(255, 142, 60, 0.1);
  border: 2px solid var(--accent-primary);
}

.calendar-day.has-event {
  background: rgba(217, 55, 110, 0.1);
  cursor: pointer;
}

.calendar-day.has-event:hover {
  background: rgba(217, 55, 110, 0.2);
}

.day-number {
  font-weight: 500;
  margin-bottom: 2px;
  font-size: var(--font-size-sm);
}

.event-dot {
  width: 6px;
  height: 6px;
  background: var(--accent-secondary);
  border-radius: 50%;
  margin-top: auto;
}

/* レスポンシブ */
@media (max-width: 767px) {
  .calendar-day {
    min-height: 40px;
    padding: 2px;
  }

  .month-year {
    font-size: var(--font-size-base);
  }

  .nav-btn {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }

  .weekday {
    padding: 2px;
    font-size: 12px;
  }

  .day-number {
    font-size: 12px;
  }

  .event-dot {
    width: 4px;
    height: 4px;
  }
}
</style>
