<script>
  import Header from "./Header.svelte";
  import "../app.css";
</script>

<div class="flex flex-col items-center h-screen">
  <Header />

  <main class="flex w-2/3 items-center justify-center flex-grow">
    <slot />
  </main>

  <footer>
    <p>Swander in your Quotes</p>
  </footer>
</div>
