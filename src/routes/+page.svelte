<script>
    export let data;
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";
</script>

<SliceZone slices={data.slices} {components} />

<main class="main-content">
    <section class="background">
        <article class="about-me">
            <!-- Content -->
            <img class="profile-pic" src={data.amber_pic.url} alt="Amber's picture" width="200" height="200" />
            <h1>{data.title[0].text}</h1>
            <p>{data.description}</p>

            <!-- Links to social media -->
            <ul class="social-media-row">
                <li class="list">
                    <a href="https://www.linkedin.com/in/amber-van-der-reijden-465761251/" target="_blank">
                        <img src={data.linkedin_svg.url} alt="LinkedIn" width="25" height="25" />
                    </a>
                </li>
                <li class="list">
                    <a href="https://github.com/Amberhva" target="_blank">
                        <img src={data.github_svg.url} alt="GitHub" width="25" height="25" />
                    </a>
                </li>
                <li class="list">
                    <a href="mailto:ambervdr@hotmail.com">
                        <img src={data.email_svg.url} alt="Email" width="25" height="25" />
                    </a>
                </li>
            </ul>
        </article>
    </section>
</main>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<style>
    .main-content {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        background-color: #a9c3cb;
    }

    .background {
        background: white;
        width: 100%;
        max-width: 400px;
        margin: 1em auto;
        border-radius: 0.2em;
    }

    .about-me {
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    h1 {
        font-size: 1.2em;
    }

    p {
        font-weight: 300;
        margin: 1em 0;
        text-align: left;
        font-size: 0.8em;
        color: rgb(136, 136, 136);
    }

    .social-media-row {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        padding: 0;
        margin: 1em 0;
        align-items: center;
    }

    .list {
        padding: 0;
        margin: 0 10px;
    }

    /* Mediaquery voor schermen kleiner dan 600px */
    @media screen and (max-width: 600px) {
        .background {
            width: 90%;
        }

        p {
            text-align: left;
        }
    }
</style>
