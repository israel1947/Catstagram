<script>
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import TimeLine from "../components/TimeLine.svelte";
  import SideBar from "../components/SideBar.svelte";

  import { onMount } from "svelte";
  let data2 = {};
  let data = {};
  let historia={};

   const POSTAPI = "https://kittygram-api.vercel.app/"; 
   const SuegerenciasAPI="https://randomuser.me/api/?results=4";
   const HISTORIASAPI="https://randomuser.me/api/?results=6";
  //const POSTAPI = "https://dog.ceo/api/breed/labrador/images";

  onMount(async () => {
    /* llamado api posts */
    const response2 = await fetch(POSTAPI);
    data = await response2.json();

    /* llamado de api usuarios */
    const response = await fetch(SuegerenciasAPI);
    data2 = await response.json();

    /* Llamado api de historias */
    const resposnseHistoria = await fetch(HISTORIASAPI);
    historia = await resposnseHistoria.json();

  });
</script>

<Header />
<Main>
  <TimeLine posts={data.posts} historias={historia.results} />
  <SideBar usuarios={data2.results}/>
</Main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;500;700&display=swap");
  :global(body) {
    background-color: #fafafa;
    color: rgba(38, 38, 38, 0.7);
    font-family: "Poppins", sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI";

    margin: 0 auto;
    padding: 0 auto;
  }

  :global(h1, h2, h3) {
    margin: 0;
    padding: 0;
  }
</style>
