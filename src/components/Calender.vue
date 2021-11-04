<template>
  <a-calendar v-model:value="value">
    <!-- current() is provided in dayjs package, return a complex w/ day data -->
    <template #dateCellRender="{ current }">
      <ul class="events">
        <li v-for="item in getListData(current)" :key="item.content">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current }">
      <div v-if="getMonthData(current)" class="notes-month">
        <section>{{ getMonthData(current) }}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>
</template>
<script>
// import { ref } from "vue";
import {queryDaysEvent} from "../mock/Calendar_mockdata";
export default {
  name: "Calender",
  data() {
    // arr:[]
  },
  methods: {
    setup() {
      // const value = ref();
      // console.log("TYPE IS " + typeof queryDayEvent);
      // console.log(queryDayEvent);
      // console.log(queryDayEvent(8));
      // const getListData = queryDayEvent;
      // const getMonthData = (value) => {
      //   if (value.month() === 8) {
      //     return 1394;
      //   }
      // };
      // return {
      //   value,
      //   getListData,
      //   getMonthData,
      // };
    },
    getListData() {
      const res = queryDaysEvent()
      console.log(res)
       return  res;
    },
    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    },
  },
};
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
