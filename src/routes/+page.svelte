<script>
  import { onMount } from "svelte";

  /**
   * @type {{ quote: { _id: string, content: string, author: string, tags: string[], authorSlug: string, length: number, dateAdded: string, dateModified: string }[] } | null}
   */
  export let data;
  /**
   * @type {{ message: any; } | null}
   */
  export let error = null;

  async function fetchQuote() {
    error = null;
    data = null;

    try {
      const res = await fetch("https://api.quotable.io/random");
      if (res.ok) {
        const quoteData = await res.json();
        data = { quote: [quoteData] }; // 将获取的引用放入 data 对象中
        console.log(data);
      } else {
        error = { message: "Failed to fetch quote" };
      }
    } catch (e) {
      error = { message: e };
    }
  }

  onMount(() => {
    fetchQuote();
  });
</script>

<svelte:head>
  <title>Home | Swander</title>
  <meta name="description" content="Swander" />
</svelte:head>

<section>
  {#if error}
    <p>{error.message}</p>
  {:else if data?.quote}
    <div class="flex flex-col justify-center items-center gap-10">
      <p class="text-2xl font-bold">{data.quote[0].content}</p>
      <p class="text-2xl font-bold self-end">
        —— {data.quote[0].author}
      </p>
      <button
        class="bg-blue-500 px-4 py-2 text-white font-bold rounded-md"
        on:click={fetchQuote}
      >
        Get New Quote
      </button>
    </div>
  {:else}
    <!-- 如果没有数据显示，可以在这里添加一个初始的加载按钮或提示 -->
    <button
      class="bg-blue-500 px-4 py-2 text-white font-bold rounded-md"
      on:click={fetchQuote}
    >
      Load Quote
    </button>
  {/if}
</section>
