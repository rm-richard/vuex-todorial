<template>
  <div class="about">
    <h1>{{ aboutTitle }}</h1>
    <p>Lorem ipsum dolor sit amet....</p>
    <p>
      Number of skills: {{ countSkills }}
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'About',
  computed: {
      ...mapState([
        'aboutTitle',
    ]),
      ...mapGetters([
        'countSkills'
    ])
  }
}
</script>
