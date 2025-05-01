<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['save'])

const task = ref({
    name: '',
    prio: '',
    done: false
})

const onSubmit = () => {
    if (task.value.name.trim() === '') return

    task.value.name = task.value.name.trim()
    emit('save', task.value)
}

const clearForm = () => {
    task.value = {
        name: '',
        prio: '',
        done: false
    }
}

defineExpose({ clearForm })
</script>

<template>
    <div>
        <form
            class="flex flex-col flex-wrap gap-3 border p-8 rounded-xl border-gray-400 shadow-lg"
            @submit.prevent="onSubmit()"
        >
            <h3 class="font-semibold text-lg mb-2">Task Form</h3>

            <div class="flex items-center">
                <p class="text-left mr-4 w-2/6">Task Name:</p>
                <input
                    class="border rounded-md px-3 py-2 w-4/6"
                    type="text"
                    v-model="task.name"
                    required
                >
            </div>
    
            <div class="flex items-center">
                <p class="text-left mr-4 w-2/6">Priority Level:</p>
                <select
                    class="border rounded-md px-3 py-2 w-4/6"
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
                class="bg-green-500 text-white outline-none mt-4"
                type="submit"
            >Save</button>
        </form>
    </div>
</template>
