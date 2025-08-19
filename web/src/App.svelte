<script>
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'
  import Solutions from './lib/Solutions.svelte'

  let score = $state(0)
</script>

<main>
  <StatusBar {score} />

  <Snippets snippets={[
    {
      content: "hello, world, i am {tired}",
      source: "Alice in Wonderland",
      date: "2000"
    }
  ]} />

  <Solutions />
</main>

<style>
</style>
