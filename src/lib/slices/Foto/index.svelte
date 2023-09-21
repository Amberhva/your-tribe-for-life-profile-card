<script>
    /** @type {import("@prismicio/client").Content.FotoSlice} */
    export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <img src={slice.primary.amber_picture.url} class="profile-picture" alt="Amber" width="200" height="200" />
</section>

<style>
    .profile-picture {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 100%;
    }
</style>
