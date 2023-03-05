<style>
  @tailwind base;
  @tailwind utilities;
</style>

<script lang="ts">
  import cars from "../cars";
  import type { Car as CarInterface } from '../Car';
	
	let totalMinutes: number    = 60;
	let totalKilometres: number = 30;

  function breakdown_minutes( theTotalMinutes: number ) {
    
    const days    = Math.floor( theTotalMinutes / ( 60 * 24 ) );
    const hours   = Math.floor( theTotalMinutes / 60 ) % 24;
    const minutes = theTotalMinutes % 60;

    return { days, hours, minutes };
  }

  function get_duration_price( theTotalMinutes: number, car: CarInterface  ) {
    
    let { days, hours, minutes } = breakdown_minutes( theTotalMinutes );

    if ( ( minutes + hours*60 )*car.price.minute >= car.price.day ) {
      
      days++;
      hours = 0;
      minutes = 0;
    }
    
    if ( minutes*car.price.minute >= car.price.hour ) {
      hours++;
      minutes = 0;
    }

    return days*car.price.day + hours*car.price.hour + minutes*car.price.minute;
  }

  function get_discount_total( theTotalMinutes: number, car: CarInterface ) {

    return get_duration_price( theTotalMinutes, car ) - totalMinutes*car.price.minute;
  }

  function get_formatted_duration( theTotalMinutes: number ) {

    const { days, hours, minutes } = breakdown_minutes( theTotalMinutes );

    return days + " days, " + hours + " hours, " + minutes + " minutes";
  }

  $: formattedDuration = get_formatted_duration( totalMinutes );
  $: sortedCars = cars.sort( function( a, b ) {
    var firstPer = get_duration_price( totalMinutes, a ) + totalKilometres*a.price.km
    var secPer = get_duration_price( totalMinutes, b ) + totalKilometres*b.price.km

    return firstPer - secPer;
  });
</script>
    
<svelte:head>
  <title>Calculate Bolt Drive fare beforehand</title>
  <meta name="description" content="Quickly see total trip cost before using Bolt Drive."/>
</svelte:head>

<main class="max-w-2xl mx-auto px-4 lg:px-0 my-4 lg:my-24">
  <h1 class="text-3xl font-bold"><span class="text-green-600">Bolt Drive</span> Calculator</h1>
  <small class="text-gray-500">By <a href="http://pedak.me" target="_blank" rel="noreferrer" class="hover:underline">Andry Pedak</a> | Prices don't match? <a href="https://github.com/aanndryyyy/bolt-calculator/blob/main/src/cars.js" target="_blank" rel="noreferrer" class="underline">Contribute</a></small>

  <hr class="mt-4 mb-6">

  <label class="block mb-4">
    <span class="block mb-1">Total Minutes</span>
    <div class="flex-col sm:flex-row flex gap-4">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type=number bind:value={totalMinutes} min=0>
      <input class="appearance-none block w-full disabled:bg-gray-200 disabled:text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type=text bind:value={formattedDuration} min=0 disabled>
    </div>
    <input class="w-full h-2 bg-green-600 rounded-lg appearance-none cursor-pointer" type=range bind:value={totalMinutes} min=0 max=4320>
  </label>
  
  <label class="block mb-8">
    <span class="block mb-1">Total Kilometres</span>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type=number bind:value={totalKilometres} min=0>
    <input class="w-full h-2 bg-green-600 rounded-lg appearance-none cursor-pointer" type=range bind:value={totalKilometres} min=0 max=360>
  </label>

  <div class="grid gap-4 auto-cols-fr">
    {#each sortedCars as car, i (car.name)}
      <div class="flex justify-between items-center p-4 shadow-md rounded-md border border-gray-500" class:border-green-600={i === 0} class:border-2={i === 0}>
        <div>
          <h2 class="font-semibold text-base">{car.name}</h2>
          <p class="text-gray-500">&euro; {car.price.minute}/<span class="text-xs">min</span> | &euro; {car.price.km}/<span class="text-xs">km</span></p>
        </div>

        <div class="text-2xl font-bold text-right" class:text-green-600={i === 0}>
          {(get_duration_price(totalMinutes, car) + totalKilometres*car.price.km).toFixed(2)} &euro;
          <span class="block text-xs font-normal text-blue-600">{get_discount_total(totalMinutes, car).toFixed(2)} &euro;</span>
        </div>
      </div>
    {/each}
  </div>
</main>