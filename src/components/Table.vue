<script lang="ts" setup>
import { ref, computed } from 'vue'

interface Task {
    name: string
    prio: string
    done: boolean
}

const props = defineProps<{
    setOfTasks: Task[]
}>()

const priorityOrder: Record<Task["prio"], number> = {
  Low: 1,
  Medium: 2,
  High: 3,
}

const sortOrder = ref<'asc' | 'desc'>('asc')
const filterBy = ref<'all' | 'complete' | 'incomplete'>('all')

const sortedTasks = computed(() => {
    const filtered = props.setOfTasks.filter((task) => {
        if (filterBy.value === "complete") return task.done
        if (filterBy.value === "incomplete") return !task.done
        return true
    })

    return filtered.slice().sort((a, b) => {
        const comparison = priorityOrder[a.prio] - priorityOrder[b.prio]
        return sortOrder.value === 'asc' ? comparison : -comparison
    })
})

const emit = defineEmits(['remove'])
</script>

<template>
    <div class="flex flex-col flex-wrap gap-3 border p-8 rounded-xl border-gray-400 shadow-lg">
        <h3 class="font-semibold text-lg mb-2">List of Tasks</h3>

        <div class="my-2">
            <div class="flex items-center mb-4">
                <label for="sortOrder" class="text-sm mr-2">Sort by:</label>
                <select
                    id="sortOrder"
                    class="text-sm border rounded-md px-2 py-1"
                    v-model="sortOrder"
                >
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

            <div class="flex items-center">
                <label for="filterBy" class="text-sm mr-2">Filter by:</label>
                <select
                    id="filterBy"
                    class="text-sm border rounded-md px-2 py-1"
                    v-model="filterBy"
                >
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </div>
        
        <ul v-if="sortedTasks.length > 0">
            <li
                v-for="(task, index) in sortedTasks"
                class="relative flex flex-row items-center mb-4"
            >
                <input
                    class="mr-2"
                    type="checkbox"
                    v-model="task.done"
                />

                <input
                    class="text-left mr-4 flex-grow outline-none"
                    :class="{'opacity-40' : task.done}"
                    type="text"
                    v-model="task.name"
                >
                <!-- <p
                    class="text-left mr-4 flex-grow"
                    :class="{'opacity-40' : task.done}"
                >
                    {{ task.name }}
                </p> -->
                <span
                    class="text-xs rounded-full px-2 py-1 text-white border-0"
                    :class="{
                        'bg-green-400' : task.prio === 'Low',
                        'bg-yellow-400' : task.prio === 'Medium',
                        'bg-red-500' : task.prio === 'High',
                        'opacity-40' : task.done
                    }"
                >
                    {{ task.prio }}
                </span>
                <p
                    @click="emit('remove', task)"
                    class="text-xs absolute top-[2px] right-[-20px] w-[10px] text-red-500 cursor-pointer"
                >x</p>
            </li>
        </ul>

        <h2 
            v-else
            class="text-center text-sm m-6"
        > No task available.</h2>
    </div>
</template>