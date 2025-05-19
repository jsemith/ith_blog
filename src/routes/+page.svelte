<!-- src/routes/+page.svelte -->
<script>
  export let data;
  const { posts } = data;  // posts is de array uit +page.js
</script>

<svelte:head>
  <title>ITH Blog</title>
</svelte:head>

<div class="container">
  <h1>Mijn Blog</h1>

  {#if posts.length === 0}
    <p>Nog geen posts…</p>
  {/if}

  {#each posts as post}
    <article>
      <h2>
        <a href={`/posts/${post.id}`}>{post.title}</a>
      </h2>
      <p class="meta">
        {new Date(post.date).toLocaleDateString('nl-NL', {
          day: 'numeric', month: 'long', year: 'numeric'
        })}
      </p>
      <p class="article-excerpt">{post.excerpt}</p>
    </article>
  {/each}
</div>
