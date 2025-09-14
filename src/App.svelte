<script>
  import Snippets from './lib/Snippets.svelte'
  import StatusBar from './lib/StatusBar.svelte'
  import Answers from './lib/Answers.svelte'
  import SplashScreen from './lib/SplashScreen.svelte'
  import EndScreen from './lib/EndScreen.svelte'
  
  let dateFormat = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  })

  let date = new Date
</script>

<SplashScreen />
<EndScreen />

<main>
  <header>
    <h1>Volumes</h1>
    <p class="date">{dateFormat.format(date)}</p>
  </header>
  <section class="game-container">
    <StatusBar />
    <Snippets/>
    <Answers />
  </section>
  <footer>
    <p>❤️ 2025, <a href="https://hvii.cc/">Ali</a></p>
    <p class="aside">
        👀 Is your browser translating this? Please check. This game is meant to be played 
        in English; it might break in other languages.
    </p>
  </footer>
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
  
  footer {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
