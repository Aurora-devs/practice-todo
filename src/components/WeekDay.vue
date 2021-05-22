<template>
  <h3>{{ weekDay }}</h3>
</template>

<script>
export default {
  name: "WeekDay",
  data() {
    return {
      weekDay: "",
    };
  },
  created() {
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    this.weekDay = weekDays[new Date().getDay()].toUpperCase();
  },
};
</script>

<style></style>
