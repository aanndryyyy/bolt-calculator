<style>
  @tailwind base;
  @tailwind utilities;
</style>

<script>
  import cars from "../cars";
	
	let totalMinutes = 60;
	let totalKilometres = 30;

  cars.sort( function(a,b) {
    var firstPer = totalMinutes*a.price.minute + totalKilometres*a.price.km
    var secPer = totalMinutes*b.price.minute + totalKilometres*b.price.km

    return firstPer - secPer;
  });
</script>

<main class="max-w-2xl mx-auto px-4 lg:px-0 mt-8 lg:mt-24">
  <h1 class="text-3xl font-bold"><span class="text-green-600">Bolt</span> Calculator</h1>
  <small class="text-gray-500">By <a href="http://pedak.me" target="_blank" rel="noreferrer">Andry Pedak</a></small>

  <hr class="mt-4 mb-6">

  <label class="block mb-4">
    <span class="block mb-1">Total Minutes</span>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type=text bind:value={totalMinutes} min=0>
    <input class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-600" type=range bind:value={totalMinutes} min=0 max=180>
  </label>
  
  <label class="block mb-8">
    <span class="block mb-1">Total Kilometres</span>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type=text bind:value={totalKilometres} min=0>
    <input class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-600" type=range bind:value={totalKilometres} min=0 max=360>
  </label>
  
  <div class="grid gap-4 auto-cols-fr">
    {#each cars as car, i}
      <div class="flex justify-between items-center p-4 shadow-md rounded-md" style="border:1px solid black;">
        <div>
          <h2 class="font-semibold text-base">{car.name}</h2>
          <p>{car.price.minute} &euro;/<span class="text-xs">min</span> | {car.price.km} &euro;/<span class="text-xs">km</span></p>
        </div>

        <p class="text-2xl font-bold" class:text-green-600={i === 0}
          title="{(totalMinutes*car.price.minute).toFixed(1)}€ + {(totalKilometres*car.price.km).toFixed(1)}€"
          >{(totalMinutes*car.price.minute + totalKilometres*car.price.km).toFixed(1)} &euro;</p>
      </div>
    {/each}
  </div>
</main>