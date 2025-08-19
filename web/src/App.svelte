<script>
  import { snippets } from './shared.svelte.js'
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'
  import Solutions from './lib/Solutions.svelte'
</script>

<main>
  <StatusBar />

  <Snippets {snippets}/>

  <Solutions />
</main>

<style>
</style>
