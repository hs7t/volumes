<script>
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'

  let score = $state(0)
</script>

<main>
  <StatusBar {score} />

  <Snippets snippets={[
    {
      content: "hello",
      source: "Alice in Wonderland",
      date: "2000"
    }
  ]} />
</main>

<style>
</style>
