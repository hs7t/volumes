<script>
    import { gameState } from '../shared.svelte.js'
</script>

<div class="card-area">
    <p class="score-count"><b>Score:</b> {gameState.score}</p>
</div>

<style>
    @import '../style/shared.css';

    .score-count {
        font-family: var(--v-font-secondary);
    }
</style>