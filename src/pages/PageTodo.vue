<template>
  <q-page class="q-pa-md">
    <q-list 
    separator
    bordered>
      <q-item-label header>Todo List</q-item-label>

      <q-item
        v-for="task in tasks"
        v-bind:key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed }" >{{ task.name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
            <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
            <q-item-label class="row justify-end" caption
              ><small>{{ task.dueTime }}</small></q-item-label>
              </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          completed: false,
          dueDate: "12/05/2019",
          dueTime: "18:30"
        },
        {
          id: 2,
          name: "Get bananas",
          completed: false,
          dueDate: "14/05/2019",
          dueTime: "14:00"
        },
        {
          id: 3,
          name: "Get apples",
          completed: false,
          dueDate: "15/05/2019",
          dueTime: "16:00"
        }
      ]
    };
  }
};
</script>

<style></style>
