<script setup lang="ts">
import Task from './task.vue'
import AsyncTask from './async-task.vue'
</script>

<template>
    <Suspense>
        <!-- Must not trigger the suspense callback -->

        <Task />

        <template #fallback>
            doing things...
        </template>
    </Suspense>

    <Suspense>
        <!-- Must trigger the suspense fallback -->
        
        <AsyncTask />

        <template #fallback>
            doing things...
        </template>
    </Suspense>
</template>
