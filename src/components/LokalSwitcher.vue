<template>
  <ul>
    <li
        v-for="locale in localesArr"
        :key="locale"
        @click="switchLocale(locale)"
    >
      {{ locale }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'LocaleSwitcher',
    data: () => ({
      locales: ''
    }),
    methods: {
      switchLocale(locale) {
        if (this.$i18n.locale !== locale) {
            this.$i18n.locale = locale;
        }
      }
    },
    computed: {
      localesArr() {
        let arr = []
        return arr = [...this.locales, process.env.VUE_APP_I18N_LOCALE, process.env.VUE_APP_I18N_FALLBACK_LOCALE]
      }
    }
  }
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
}
li {
  text-decoration: underline;
  color: #ffffff;
  cursor: pointer;
  margin: 0 10px;
}
</style>