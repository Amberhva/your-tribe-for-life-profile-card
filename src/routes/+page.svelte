<main class="main-content">
    <section class="background">
        <!-- Profile picture -->
        <picture>
            <img src="#" alt="Amber" />
        </picture>
        <article class="about-me">
            <!-- Content -->
            <h1>Amber v/d Reijden</h1>
            <p>Tweedejaars HvA student op de opleiding FDND.</p>

            <!-- Links to social media -->
            <a href="https://www.linkedin.com/in/amber-van-der-reijden-465761251/" target="_blank"><img src="/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://github.com/Amberhva" target="_blank">GitHub</a>
            <a href="mailto:ambervdr@hotmail.com">Email</a>
        </article>
    </section>
</main>

<style>
    .main-content {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
    }

    .background {
        background: white;
        width: 15em;
        height: 30em;
        border-radius: 0.2em;
    }

    .about-me {
        margin-top: 15em;
    }

    h1 {
        font-size: 1.2em;
    }

    p {
        font-weight: 300;
        margin: 2em;
        text-align: left;
        font-size: 0.8em;
        color: rgb(136, 136, 136);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
    }
</style>
