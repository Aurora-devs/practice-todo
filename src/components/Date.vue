<template>
  <div class="container">
    <div class="day">{{ day }}</div>
    <div class="month">{{ month }}</div>
    <div class="year">{{ year }}</div>
  </div>
</template>

<script>
export default {
  name: "Date",
  data() {
    return {
      day: "",
      month: "",
      year: "",
    };
  },
  created() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const current = new Date();
    this.day = current.getDate();
    this.month = monthNames[current.getMonth()].substring(0, 3).toUpperCase();
    this.year = current.getFullYear();
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "day month"
    "day year";
}
.day {
  grid-area: day;
  font-weight: bold;
  font-size: 2.75rem;
  line-height: 35px;
  margin-right: 8px;
}
.month {
  grid-area: month;
  font-weight: bold;
}
.year {
  grid-area: year;
}
</style>
