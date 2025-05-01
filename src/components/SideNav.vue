<script lang="ts" setup>
import { RectangleStackIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
</script>
<template>
    <div class="w-xs min-h-screen p-6 border-r border-gray-300 flex flex-col gap-6">
        <!-- <img class="w-[120px] h-[70px]" src="/src/assets/images/logo.png" alt="logo"> -->
        <RectangleStackIcon class="size-10 text-blue-500" />

        <div class="flex">
            <ul class="text-slate-900 w-full">
                <li class="flex items-center hover:cursor-pointer hover:bg-blue-50 rounded-lg px-3 py-4 hover:bg-opacity-30 hover:text-blue-400">
                    <ClipboardDocumentListIcon class="mr-2 size-4" /> All Tasks
                </li>
            </ul>
        </div>

        <div>
            <h3 class="mb-2 text-slate-600 px-3 text-sm">Categories</h3>

            <ul>
                <li class="flex items-center hover:cursor-pointer hover:bg-blue-50 rounded-lg pl-6 py-4 hover:text-blue-400">
                    <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                    Work
                </li>

                <li class="flex items-center hover:cursor-pointer hover:bg-blue-50 rounded-lg pl-6 py-4 hover:text-blue-400">
                    <div class="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                    Personal
                </li>

                <li class="flex items-center hover:cursor-pointer hover:bg-blue-50 rounded-lg pl-6 py-4 hover:text-blue-400">
                    <div class="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                    Health
                </li>

                <li class="flex items-center hover:cursor-pointer hover:bg-blue-50 rounded-lg pl-6 py-4 hover:text-blue-400">
                    <div class="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                    Learning
                </li>
            </ul>
        </div>
    </div>
</template>