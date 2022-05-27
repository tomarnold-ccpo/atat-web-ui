<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Route } from "vue-router";

// route resolver invoker
import { InvokeResolver } from "./index";

Component.registerHooks(["beforeRouteEnter"]);
@Component({})
export default class PathResolver extends Vue {
  private resolvePath(current: string): void {
    const pathResolver = this.$route.params.resolver;
    const direction =  this.$route.params.resolver;

    if (!pathResolver) {
      throw new Error("could not obtain path resolver");
    }

    const pathName = InvokeResolver(pathResolver, current, direction);
    this.$router.push({ path: pathName });
  }

  public async beforeRouteEnter(
    to: Route,
    from: Route,
    next: (n: unknown) => void
  ): Promise<void> {
    next(async (vm: { resolvePath: (current: string) => void }) => {
      const current = from.name;
      if (!current) {
        throw new Error("from route name undefined");
      }
      vm.resolvePath(current);
    });
  }
}
</script>
