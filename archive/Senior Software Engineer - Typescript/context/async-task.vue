<script setup lang="ts">
import { useAsync } from './use-async';

const task = await useAsync(async () => {});
</script>

<template>
    <div>
        {{ task.data }}
    </div>
</template>
