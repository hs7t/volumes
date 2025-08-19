<script>
    let { input = "", guesses = [""] } = $props()
</script>

<div class="card-area">
    <h2>What's today's word?</h2>
    <form>
        <div class="input">
            <label for="input">Type in a guess...</label>
            <input type="text" id="input">
        </div>

        <button>This is it!</button>
    </form>
    <p class="guess-reminder">Your guesses: {#each guesses as guess}<span class="guess">{guess}</span>{/each}</p>
</div>

<style>
    .input {
        display: inline-flex;
        gap: 1ch;
    }

    .guess-reminder .guess {
        text-decoration: line-through;
    }
</style>