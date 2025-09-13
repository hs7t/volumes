<script>
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'
  import Answers from './lib/Answers.svelte'
  import SplashScreen from './lib/SplashScreen.svelte'
    import EndScreen from './lib/EndScreen.svelte'
  
  let date = new Date
</script>

<SplashScreen />
<EndScreen />

<main>
  <header>
    <h1>Volumes</h1>
    <p class="date">for {date.toDateString()}</p>
  </header>
  <section class="game-container">
    <StatusBar />
    <Snippets/>
    <Answers />
  </section>
</main>

<style>
  @import './style/shared.css';
  
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date {
    font-family: var(--v-font-secondary);
  }
</style>
