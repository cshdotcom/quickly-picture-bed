<template>
  <div class="plugin-support-md">
    <section>
      <p class="title">支持作者</p>
      <p>作者: {{ detail.author }}</p>
      <p>版本: {{ detail.version }}</p>
      <p>类别: {{ detail.category }}</p>
      <c-reward></c-reward>
    </section>
    <section>
      <p class="title">联系作者</p>
      <p>邮箱: itchenliang@163.com</p>
      <p>QQ: 1825956830</p>
      <p>Gitee: https://gitee.com/itchenliang</p>
      <p>Github: https://github.com/ischenliang</p>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { PluginInter } from '@/typings/interface';
import cReward from '@/components/cReward.vue';

interface Props {
  detail: PluginInter
}

const props = withDefaults(defineProps<Props>(), {
  detail: () => ({} as PluginInter)
})
</script>
<style lang="scss">
.plugin-support-md {
  min-height: 100%;
  overflow: hidden;
  section {
    margin-bottom: 20px;
  }
  p {
    line-height: 26px;
    color: var(--el-text-color-secondary);
    &.title {
      font-size: 18px;
      margin-bottom: 5px;
      color: var(--el-text-color-primary);
    }
  }
}
</style>