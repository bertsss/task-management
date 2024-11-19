<script lang="ts" setup>
import Form from './components/Form.vue'
import Table from './components/Table.vue'
import { ref, reactive, onMounted, watch } from 'vue'

const setOfTasks = ref([])
const form = ref(null)

onMounted(() => {
    setOfTasks.value = JSON.parse(localStorage.getItem('setOfTasks')) || []
})

watch(setOfTasks, (newVal) => {
    localStorage.setItem('setOfTasks', JSON.stringify(newVal))
}, { deep: true })

const save = (task) => {
    setOfTasks.value.unshift(task)
    localStorage.setItem('setOfTasks', JSON.stringify(setOfTasks.value))
    form.value.clearForm()
}

const remove = (task) => {
    const index = setOfTasks.value.findIndex(x => x.name === task.name)
    setOfTasks.value.splice(index, 1)
}
</script>

<template>
    <div class="flex flex-col flex-wrap gap-8 md:w-[600px]">
        <h2 class="text-xl font-semibold mb-4">Task Management Application</h2>

        <Form
            @save="save($event)"
            ref="form"
        />
        
        <Table 
            :setOfTasks="setOfTasks"
            @remove="remove($event)"
        />
    </div>
</template>

<style scoped>
</style>
