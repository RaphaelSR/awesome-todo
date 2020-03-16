<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          v-bind:key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header class="text-grey-4">
          Navigation
        </q-item-label>
        <q-item
          v-for="nav in navs"
          v-bind:key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item to="/Settings" exact clickable>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item> -->
        <!-- <Navigation
          v-for="link in Navigation"
          :key="link.title"
          v-bind="link"
        />  -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import Navigation from "components/EssentialLink";

export default {
  name: "MainLayout",

  // components: {
  //   Navigation
  // },

  data() {
    return {
      leftDrawerOpen: true,
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/Settings"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer{
.q-router-link--exact-active{
  color: white !important;
}
}

</style>
