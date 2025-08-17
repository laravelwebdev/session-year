<template>
    <div class="p-2 mr-2 text-primary-500 text-lg">
        {{ year }}
    </div>
</template>

<script>
export default {
  name: "SessionYear",
  props: {
    year: {type: String, default: ''}
  }

}
</script>