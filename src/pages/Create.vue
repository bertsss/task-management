<script lang="ts" setup>
import { ref } from "vue";
import InputField from "../components/InputField.vue";

const emit = defineEmits(["save"]);

const task = ref({
    name: "",
    prio: "",
    done: false,
});

const onSubmit = () => {
    if (task.value.name.trim() === "") return;

    task.value.name = task.value.name.trim();
    emit("save", task.value);
};

const clearForm = () => {
    task.value = {
        name: "",
        prio: "",
        done: false,
    };
};

defineExpose({ clearForm });
</script>

<template>
    <div>
        <form
            class="flex flex-col flex-wrap gap-3 p-8 rounded-2xl shadow-sm bg-white"
            @submit.prevent="onSubmit()"
        >
            <h2 class="text-3xl font-semibold">Create New Task</h2>
            <p class="font-light text-sm mb-4">
                Fill in the details below to create a new task
            </p>

            <InputField
                label="Task Name"
                v-model="task.name"
            ></InputField>
            <div class="flex items-center">
                <p class="text-left mr-4 w-2/6">Task Name:</p>
                <input
                    class="border rounded-md px-3 py-2 w-4/6"
                    type="text"
                    v-model="task.name"
                    required
                />
            </div>

            <div class="flex items-center">
                <p class="text-left mr-4 w-2/6">Priority Level:</p>
                <select
                    class="border rounded-md px-3 py-2 w-4/6"
                    v-model="task.prio"
                    required
                >
                    <option
                        disabled
                        value=""
                    >
                        Please Select one
                    </option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <button
                class="bg-green-500 text-white outline-none mt-4"
                type="submit"
            >
                Save
            </button>
        </form>
    </div>
</template>
