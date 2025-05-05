<script lang="ts" setup>
const props = defineProps<{
    label: string;
    isRequired?: boolean;
}>();

const { label = "Label", isRequired = false } = props;
</script>

<template>
    <div class="relative">
        <input
            class="input-field rounded border px-4 py-2 outline-0 text-md focus:outline-2 focus:outline-blue-400 focus:border-blue-400 z-10 relative"
            name="input"
            type="text"
            placeholder=" "
        />
        <label
            class="label absolute left-4 top-2 cursor-text bg-white transition-all"
            for="input"
            >{{ label }}</label
        >
        <span v-if="isRequired">*</span>
    </div>
</template>

<style scoped>
.input-field:focus ~ label,
.input-field:not(:placeholder-shown).input-field:not(:focus) ~ label {
    top: -0.7rem;
    left: 0.5rem;
    font-size: 0.75rem;
    padding: 0 0.25rem 0;
    font-weight: 600;
    z-index: 20;
}
</style>
