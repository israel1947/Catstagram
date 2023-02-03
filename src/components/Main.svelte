<script>

</script>

<style>
  .Main {
    /* grid-template-columns: minmax(auto, 800px); */
    display: flex;
    width: 80%;
    justify-content: center;
    background-color: #fafafa;
  }
  .Main-container {
    display: flex;
    /* grid-template-columns: 2fr 1fr; */
    grid-gap: 2em;
    padding: 2em 0; 
  }
</style>

<div class="Main">
  <div class="Main-container">
    <slot/> <!-- se usa para decir que tendra componentes hijos -->
  </div>
</div>