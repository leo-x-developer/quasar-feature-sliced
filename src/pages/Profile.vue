<template>
  <q-page class="full-height column" padding>
    <h4 class="q-my-md">Profile Page</h4>
    <profile-form />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProfileForm } from '@entities/viewer';

export const Profile = defineComponent({
  components: { ProfileForm },
});

export default Profile
</script>
