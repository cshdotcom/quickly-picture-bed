<template>
  <div class="plugin-uplog">
    <md-preview :value="doc_md"></md-preview>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import mdPreview from '@/views/plugin/md-preview.vue';
import { PluginLoadUrl } from '@/global.config';
import { useJudgeUnpkg } from '@/hooks/global';

interface Props {
  plugin_name?: string // 插件名称
  plugin_version?: string // 插件版本号
}

/**
 * 实例
 */
const props = withDefaults(defineProps<Props>(), {
  plugin_name: '',
  plugin_version: ''
})

/**
 * 变量
 */
const url = computed(() => {
  return useJudgeUnpkg() ? `${PluginLoadUrl}${props.plugin_name}@${props.plugin_version}` : `${PluginLoadUrl}${props.plugin_name}/${props.plugin_version}/files`
})
const doc_md = ref('')

/**
 * 逻辑处理
 */
function loadData () {
  // 处理更新日志和READEME.md
  fetch(`${url.value}/changlog.md`)
    .then(res => res.text())
    .then(res => {
      doc_md.value = res
    })
}
loadData()


</script>
<style lang="scss">
.plugin-uplog {
  
}
</style>