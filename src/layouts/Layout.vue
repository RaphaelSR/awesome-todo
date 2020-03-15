<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <Navigation
          v-for="link in Navigation"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navigation from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    Navigation
  },

  data () {
    return {
      leftDrawerOpen: false,
      Navigation: [
        {
          title: 'Todo',
          icon: 'list',
          link: '/'
        },
                {
          title: 'Settings',
          icon: 'settings',
          link: '/settings',
          target: '_blank'
        },
      ]
    }
  }
}
</script>
