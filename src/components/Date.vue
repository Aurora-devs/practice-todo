<template>
  <div class="container">
    <div class="day">12</div>
    <div class="month">JAN</div>
    <div class="year">2021</div>
  </div>
</template>

<script>
export default {
  name: "Date",
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
  line-height: 40px;
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
