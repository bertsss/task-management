<script lang="ts" setup>
// import Form from './components/Form.vue'
// import Table from './components/Table.vue'
import SideNav from './components/SideNav.vue';
import { ref, onMounted, watch } from 'vue';

const setOfTasks = ref([]);
const form = ref(null);

onMounted(() => {
    setOfTasks.value = JSON.parse(localStorage.getItem('setOfTasks')) || [];
});

watch(
    setOfTasks,
    (newVal) => {
        localStorage.setItem('setOfTasks', JSON.stringify(newVal));
    },
    { deep: true }
);

const remove = (task) => {
    const index = setOfTasks.value.findIndex((x) => x.name === task.name);
    setOfTasks.value.splice(index, 1);
};
</script>

<template>
    <div class="flex flex-row w-full h-dvh">
        <!-- <h2 class="text-xl font-semibold mb-4">Task Management Application</h2> -->
        <SideNav />

        <div class="container p-6 bg-neutral-100 font-inter max-w-full">
            <RouterView></RouterView>
        </div>

        <!-- <Form
            @save="save($event)"
            ref="form"
        />
        
        <Table 
            :setOfTasks="setOfTasks"
            @remove="remove($event)"
        /> -->
    </div>
</template>

<style scoped></style>
