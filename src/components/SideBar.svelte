<script>
  import Profile from "./Profile.svelte";
  import Footer from "./Footer.svelte";
  import Sugerencias from "./sugerencias.svelte";

  export let usuarios=[];
</script>

<style>
  .Sidebar {
 /*    position: relative; */
    padding: 4.5em 0 0 0;
  }
  .Sidebar-container {
    position: fixed;
    width: 300px;
  }
</style>

<div class="Sidebar">
  <div class="Sidebar-container">
    <Profile/>
    {#each usuarios as user }
      <Sugerencias {...user.name} {...user.picture}/>
    {/each}
    <Footer/>
  </div>
</div>