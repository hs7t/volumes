<script>
    import { gameState, fetchShownHints, showHint } from '../shared.svelte.js'
    import Button from './components/Button.svelte'
    function newSnippet() {
        gameState.score -= 1;
        showHint();
    }

    function noHintsLeft() {
        return fetchShownHints().length === gameState.hints.length
    }
</script>

<div class="card-area">
    <h2>Snippets</h2>
    <div class="snippets">
        {#each fetchShownHints() as hint}
            <figure class="snippet">
                <blockquote>
                    {hint.content.replace(/{.*?}/gm, '[__]')}
                </blockquote>
                <figcaption>
                    From <cite>{hint.source}</cite> {#if hint.by} by {hint.by}{/if} ({hint.date})
                </figcaption>
            </figure>
        {/each}
    </div>
    <Button action={newSnippet} text="Show another snippet ({fetchShownHints().length}/{gameState.hints.length})" disabled={noHintsLeft()} />
</div>

<style>
    @import '../style/shared.css';

    .snippets {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    figure {
        font-size: 1.4rem;
        margin: 0;
        padding: 1ch;
        background-color: var(--v-color-backgroundC);
        border-radius: var(--v-radius-secondary);
        border: var(--v-border-secondary);
        animation: 400ms beam-in;
        transition: all 300ms;
    }

    figure:active {
        transform: rotate(-1deg);
        transition: all 250ms;
    }

    @keyframes beam-in {
        0% {
            transform: scale(0.8);
            opacity: 0%;
        }
        50% {
            transform: scale(1.05);
            opacity: 100%;
        }
        100% {
            transform: scale(1);
        }
    }

    blockquote {
        margin: 0;
    }
    
    figcaption {
        font-family: var(--v-font-secondary);
        font-size: var(--v-size-font-primary);
    }
    </style>