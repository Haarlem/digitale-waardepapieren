<template lang="html">
  <div id="content" class="CTID-99-_ eb-99-panel content">
    <div class="CTID-471-_ eb-471-panel service-form wrapper">
      <h3>{{ login.username }}</h3>
      <p>
        Geboren te {{ login.birth_city }} in {{ login.birth_date }}
      </p>
    </div>
  </div>
</template>

<script>
import Singleton from "@/utils/Singleton.js"

export default {
  mounted() {
    var birth_day = Math.round(1 + (Math.random() * 31))
    if(birth_day < 10) {
      birth_day = "0" + birth_day
    }
    var birth_month = Math.round(1 + (Math.random() * 12))
    if(birth_month < 10) {
      birth_month = "0" + birth_month
    }
    var birth_year = Math.round(1950 + (Math.random() * 50))
    var birth_city = "Haarlem"
    
    this.login.birth_city = birth_city
    this.login.birth_date = `${ birth_day }-${ birth_month }-${ birth_year }`
  },
  data() {
    return {
      login: Singleton.user
    }
  }
}
</script>

<style lang="css">
</style>
