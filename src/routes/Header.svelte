<script>
  import { page } from "$app/stores";
</script>

<header class="bg-green-200 py-4 w-full">
  <nav>
    <ul class="flex items-center justify-center flex-row gap-10">
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a class="text-2xl" href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a class="text-2xl" href="/about">About</a>
      </li>
    </ul>
  </nav>
</header>
