<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      :width="250"
      show-if-above
      bordered
      class="bg-primary"
      :breakpoint="782"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <NavItem
          v-for="link in navItemList"
          v-bind="link"
          class="text-grey-4"
        />
      </q-list>
    </q-drawer>

    <q-footer elevated>
      <q-tabs>
        <NavTab v-for="tab in navItemList"
                v-bind="tab"/>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import NavItem from 'components/NavItem.vue'
import NavTab from "components/NavTab";

const navItemList = [
  {
    label: 'Todo',
    icon: 'list',
    to: "/"
  },
  {
    label: "Settings",
    icon: "settings",
    to: "/settings"
  }
];

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavItem,
    NavTab
  },

  setup() {
    return {
      navItemList,
    }
  }
})
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {

  .q-router-link--exact-active {
    color: white !important;
  }

}
</style>
