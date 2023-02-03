<script>
  export let first;
  export let large;
</script>

<style>
  .Stories {
    /* border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px; */
    margin: 1em 0;
    padding: 0.8em 1em;
    background-color: white;
  }
  .Stories-item img {
    width:44px;
    height: 44px;
    border-radius: 50%;
  }
  .Stories-item {
    display: flex;
    align-content: center;
    gap: 1.3rem;
    
    margin: 0 0 0.5em 0;
  }
  .Stories-item h2 {
    font-size: 14px;
    color: black;
    margin: 0 0 0 0.5em;
  }
  .Stories-item h2  {
    display: block;
    font-size: 9px;
    text-transform: uppercase;
    color: gray;
  }
/*   .Stories-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 0 0 0;
  }
  .Stories-head h2 {
    font-size: 12px;
    font-weight: 600;
  } */
  
  /* .Stories-items {
    margin: 0.5em 0 0.5em 0;
  } */
  .Stories-item-box {
    width: 44px;
    height: 44px;
    border: double 2px transparent;
    border-radius: 100%;

    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #f09433, #bc1888);
    background-origin: border-box;
    background-clip: content-box, border-box;
    
    display: block;
    overflow-clip-margin: content-box;
    text-align: center;
   
  }
</style>


<div class="Stories">
  <div class="Stories-container">
    <div class="Stories-items">
      <div class="Stories-item">
        <div class="Stories-item-box">
          <img src={large} alt="imgen de usuario"/>
          <h2>{first}</h2>
        </div>
      </div>
    </div>
  </div>
</div>