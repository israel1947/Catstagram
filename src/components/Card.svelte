<script>
  import Comments from "./Comments.svelte";
  import { fly } from 'svelte/transition';
  import { likeCount } from "../store/store";

  export let username,location,avatar,photo,postComment,comments;

  let like,bookmark=false;
  //let bookmark=false;
  function handlerLike() {
    like = !like;

    if (like) {
      likeCount.update(n=> n + 1);
    }else{
      likeCount.update(n=> n - 1)
    }
  }
</script>

<style>
  .Card {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: 0 0 2em 0;
  }
  .Card-Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
  }
  .Card-user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .Card-user img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .Card-user h2 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 0 1em;
    color: black;
  }
  .Card-user h2 span {
    display: block;
    font-size: 12px;
    font-weight: normal;
    color: rgba(38, 38, 38, 0.7);
  }
  .Card-photo {
    padding: 0;
    margin: 0;
  }
  .Card-photo img {
    width: 100%;
    height: auto;
  }
  .Card-photo figure {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .Card-settings i {
    cursor: pointer;
  }
  .Card-icons {
    padding: 0em 1em 1em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Card-icons i {
    margin: 0 1em 0 0;
    cursor: pointer;
    font-size: 20px;
  }
  .Card-icons i:last-child {
    margin: 0;
  }

  .Card-likes{
    padding: 0 0 0 1em;
  }
  .Card-description {
    display: flex;
    gap: 10px;

    padding: 0 1em 1em 1em;
  }
  .Card-description h3 {
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  .Card-description span {
    font-size: 14px;
  }
  .fa-solid {
    color: #bc1826;
    animation: bounce linear 0.8s;
    animation-iteration-count: 1;
    transform-origin: 20% 20%;
  } 
  .active-bookmark {
    color: #222222;
  } 

  

  @keyframes bounce {
    0% {
      transform: translate(0px, 0px);
    }
    15% {
      transform: translate(0px, -25px);
    }
    30% {
      transform: translate(0px, 0px);
    }
    45% {
      transform: translate(0px, -15px);
    }
    60% {
      transform: translate(0px, 0px);
    }
    75% {
      transform: translate(0px, -5px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
</style>

<div class="Card">
  <div class="Card-container">
    <div class="Card-Header">
      <div class="Card-user">
        <img src={avatar} alt="imagen del usuario">
        <h2>
          {username}
          <span>{location}</span>
        </h2>
      </div>
      <div class="Card-settings">
        <i class="fa-solid fa-ellipsis"/>
      </div>
    </div>
    <div class="Card-photo">
      <figure on:dblclick={handlerLike}>
        <img src={photo} alt="imagen del post">
      </figure>
    </div>
    <div class="Card-likes">
      {#if $likeCount != 0}
      <p style="display: inline-block" in:fly={{ y: -20 }}>{$likeCount} Likes</p>
      {:else}
      <p style="display: inline-block" in:fly={{ y: -20 }}>Likes</p>
      {/if}
    </div>
    <div class="Card-icons">
      <div class="Card-icons-firts">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <i class="fa-regular fa-heart" class:fa-solid={like} on:click={handlerLike}/>
        <i class="fa-regular fa-comment"/>
        <i class="fa-regular fa-paper-plane"/>
      </div>
      <div class="Card-icons-second">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <i class="fa-regular fa-bookmark" 
        class:active-bookmark={bookmark} 
        on:click={()=>(bookmark=!bookmark)}
        />
      </div>
    </div>
    <div class="Card-description">
      <h3>{username}</h3>
      <span>{postComment}</span>
    </div>
    <Comments {comments}/>
  </div>
</div>