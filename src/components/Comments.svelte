<script>
  import EmojiSelector from "svelte-emoji-selector";

  export let comments = [];
  let textContent = "";

  function addComent(e) {
    /* Extraer valor del input de text */
    const msg = e.target.text.value;
    
    if (msg.length >= 1) {
      /* Crear comentario con el valor del input y agregar id unica */
      const message = {
        id: Date.now(),
        text: msg,
        username: "israel_1947",
      };
      /* Hacer push a nuevos elementos sin eliminar los que ya existen */
      comments = [...comments, message];
      e.target.text.value = " ";
      onEmoji();
    }
  }

  function onEmoji(event) {
    textContent += event.detail;
  }
</script>

<div class="Comments">
  <div class="Comments-content">
    {#each comments as comment (comment.id)}
      <div class="Comments-users">
        <h3>{comment.username}</h3>
        <span>{comment.text}</span>
      </div>
    {/each}
    <div class="Comments-add">
      <form action="" class="form" on:submit|preventDefault={addComent}>
        <EmojiSelector on:emoji={onEmoji} autoClose="false" />
        <label for="comment" />
        <input
          class="comments-input"
          type="text"
          placeholder="Comment..."
          id="text"
          bind:value={textContent}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  </div>
</div>

<style>
  .Comments h3 {
    font-size: 14px;
    color: black;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  .Comments span {
    font-size: 14px;
    margin: 0 0 0 0.5em;
    font-weight: normal;
    color: rgba(black, 0.9);
  }
  .Comments-add {
    padding: 1em 1em 1em 1em;
    border-top: 1px solid rgba(219, 219, 219, 0.8);
  }
  .Comments-add form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Comments-content {
    padding: 0 1em 0.5em 1em;
  }
  .Comments-users {
    margin: 0 0 0.5em 0;
    display: flex;
  }

  input {
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    color: #696969;
    border: 1px solid transparent;
    font-size: 12px;
    outline: none;
    width: 100%;
    display: flex;
  }
  button {
    border: none;
    color: #3897f0;
    font-size: 12px;
    outline: none;
    cursor: pointer;
  }
  label {
    display: none;
  }

  /* .l{
    border: none;
    height: 50px;
    width: 50px;
    background: transparent;
  } */
</style>
