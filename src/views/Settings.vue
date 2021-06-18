<template>
  <div class="container">
    <b-tabs v-model="activeTab">
      <b-tab-item label="General">
        <General />
      </b-tab-item>
      <b-tab-item label="Metadata">
        <Metadata />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const components = {
  General: () => import('@/components/settings/General.vue'),
  Metadata: () => import('@/components/metadata/Metadata.vue'),
};

@Component({
  components
})
export default class Settings extends Vue {
  private activeTab: number = 0;


}
</script>
