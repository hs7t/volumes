<script>
  import { score } from './shared.svelte.js'
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'
  import Solutions from './lib/Solutions.svelte'
</script>

<main>
  <StatusBar />

  <Snippets snippets={[
      {
        content: "hello, world, i am {tired}",
        source: "Alice in Wonderland",
        date: "2000"
      }, 
    ]}
  />

  <Solutions />
</main>

<style>
</style>
