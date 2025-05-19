<!-- src/routes/posts/[id]/+page.svelte -->
<script>
  export let data;
  const { post } = data;

  import { marked } from 'marked';
  const htmlContent = marked.parse(post.content);
</script>

<svelte:head>
  <title>{post.title} | ITH Blog</title>
</svelte:head>

<div class="container">
  <article>
    <h1>{post.title}</h1>
    <p class="meta">
      {new Date(post.date).toLocaleDateString('nl-NL', {
        day: 'numeric', month: 'long', year: 'numeric'
      })}
    </p>
    <div class="content">
      {@html htmlContent}
    </div>
    <p class="back-link">
      <a href="/">← Terug naar overzicht</a>
    </p>
  </article>
</div>
