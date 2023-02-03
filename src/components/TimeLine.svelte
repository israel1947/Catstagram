<script>
  import Card from "./Card.svelte";
  import Stories from "./Stories.svelte";

  export let posts = [];
   export let historias=[] 
  //console.log("timeline: ",message);
</script>

<style>
  .TimeLine {
    width: 500px;
    padding: 4em 0 0 0;
  }
  .TimeLine-historias{
    display: flex;
  }
</style>

<div class="TimeLine">
  <div class="TimeLine-container">
    <div class="TimeLine-historias">
      {#each historias as historia } 
       <Stories {...historia.name} {...historia.picture}/>
      {/each}
    </div>

    {#each posts as post }
      <Card {...post}/>
    {:else}
      <h1>Loading...</h1>
    {/each}
  </div>
</div>