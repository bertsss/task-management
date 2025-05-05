<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import InputField from '../components/InputField.vue';
import stringify from 'safe-stable-stringify';

const emit = defineEmits(['save']);

const setOfTasks = ref([]);
const showMessage = ref(false);

const task = ref({
    name: '',
    prio: '',
    done: false,
});

onMounted(() => {
    setOfTasks.value = JSON.parse(localStorage.getItem('setOfTasks') || '') || [];
});

const onSubmit = () => {
    if (task.value.name.trim() === '') return;
    task.value.name = task.value.name.trim();

    setOfTasks.value.unshift(task);
    localStorage.setItem('setOfTasks', stringify(setOfTasks.value));

    showMessage.value = true
    let interval = setInterval(() => {
        showMessage.value = false
        clearInterval(interval)
    }, 2000);
    
    clearForm()
};

const clearForm = () => {
    task.value = {
        name: '',
        prio: '',
        done: false,
    };
};

defineExpose({ clearForm });
</script>

<template>
    <div class="w-full relative">
        <p
            class="px-4 py-2 bg-green-500 text-white rounded transition-all duration-500 ease-in-out absolute top-0 right-0"
            :class="{
                'opacity-100 translate-x-0': showMessage,
                'opacity-0 -translate-x-2': !showMessage
            }"
        >
            You successfully created a task!
        </p>
        
        <form
            class="flex flex-col flex-wrap gap-3 p-8 rounded-2xl shadow-sm bg-white w-md"
            @submit.prevent="onSubmit()"
        >
            <h2 class="text-3xl font-semibold">Create New Task</h2>
            <p class="font-light text-sm mb-4">
                Fill in the details below to create a new task
            </p>

            <InputField
                label="Task Name"
                :is-required="true"
                v-model="task.name"
            ></InputField>

            <div class="flex flex-col">
                <p class="mb-2 text-sm">Priority Level</p>
                <select
                    class="border rounded px-4 py-2 w-full"
                    v-model="task.prio"
                    required
                >
                    <option disabled value="">Please Select one</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <button
                class="bg-green-500 text-white outline-none mt-4 active:outline-0"
                type="submit"
            >
                Save
            </button>
        </form>
    </div>
</template>
