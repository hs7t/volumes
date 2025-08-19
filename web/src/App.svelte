<script>
  import { snippets } from './shared.svelte.js'
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'
  import Answers from './lib/Answers.svelte'
</script>

<main>
  
  <StatusBar />
  <Snippets {snippets}/>
  <Answers />
</main>

<style>
</style>
