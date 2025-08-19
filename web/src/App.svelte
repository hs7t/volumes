<script>
  import { snippets } from './shared.svelte.js'
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'
  import Answers from './lib/Answers.svelte'
  
  let date = new Date
</script>

<main>
  <div>
    <h1>Volumes</h1>
    <p>{date.toDateString()}</p>
  </div>
  <StatusBar />
  <Snippets {snippets}/>
  <Answers />
</main>

<style>
</style>
