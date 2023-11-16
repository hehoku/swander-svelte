<script>
  /**
   * @type {{ quote: { _id: string, content: string, author: string, tags: string[], authorSlug: string, length: number, dateAdded: string, dateModified: string }[] } | null}
   */
  export let data;
  /**
   * @type {{ message: any; } | null}
   */
  export let error = null;
</script>

<svelte:head>
  <title>Home | Swander</title>
  <meta name="description" content="Swander" />
</svelte:head>

<section>
  {#if error}
    <p>{error.message}</p>
  {:else if data}
    <div class="flex flex-col justify-center items-center gap-10">
      <p class="text-2xl font-bold">{data.quote[0].content}</p>
      <p class="text-2xl font-bold self-end">
        —— {data.quote[0].author}
      </p>
    </div>
  {/if}
</section>
