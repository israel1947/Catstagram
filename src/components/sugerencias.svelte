<script>
 export let first;
 export let large;
</script>

<div class="Sugerencias">
  <div class="Sugerencias-container">
    <div class="Sugerencias-items">
      <div class="Sugerencias-item">
        <div class="Sugerencias-item-box">
          <div class="Sugerencia-item-box-info">
                <div class="Sugerencia-item-box-username-photo">
                  <div class="Sugerencia-item-box-username">
                    <img src={large} alt="imgen de usuario {first}"
                  />
                  <h2>
                    {first}
                    <span>Sugerencias para ti</span>
                  </h2>
                  </div>
                  <span id="follow-Btn">Seguir</span>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .Sugerencias {
    margin-bottom: 2rem;
  }
  
  .Sugerencia-item-box-info h2 {
    font-size: 14px;
  }

  .Sugerencias-item-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Sugerencias-item-box img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  #follow-Btn {
    font-size: 12px;
    color: #006aaf;
    cursor: pointer;
  }

  .Sugerencia-item-box-info {
    display: block;
    width: 100%;
    /*align-items: center;*/
    gap: 0.5rem;
  }

  .Sugerencia-item-box-info h2 span {
    display: block;
  }
  .Sugerencia-item-box-info span {
    font-size: 12px;
    font-weight: 400;
  }

  .Sugerencia-item-box-username-photo {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .Sugerencia-item-box-username{
    display: flex;
    gap: 10px;
  }
</style>
