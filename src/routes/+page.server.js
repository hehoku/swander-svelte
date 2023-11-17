// export async function load() {
//   try {
//     const res = await fetch("https://api.quotable.io/quotes/random");
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const quote = await res.json();
//     console.log({ quote });

//     return { quote };
//   } catch (error) {
//     return { error: new Error("Could not load the quote") };
//   }
// }
