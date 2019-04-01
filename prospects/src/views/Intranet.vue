<template>
  <div class="intranet">
  	<IntranetConnexion/>
    <p>connexion</p>
  </div>
</template>

<script>
import IntranetConnexion from '@/components/IntranetConnexion.vue'

export default {
  name: 'intranet',
  components: {
    IntranetConnexion
  }
}
</script>