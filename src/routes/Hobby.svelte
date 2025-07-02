<script lang="ts">
    import Section from '$lib/components/Section.svelte';

    const hobbies = [
        {
            title: 'duy. - water',
            author: 'duydang',
            trackUrl: 'https://soundcloud.com/duydang12/duy-water',
            authorUrl: 'https://soundcloud.com/duydang12',
            trackId: '589418508',
        },
        {
            title: 'duy. - schooldays',
            author: 'duydang',
            trackUrl: 'https://soundcloud.com/duydang12/duy-schooldays',
            authorUrl: 'https://soundcloud.com/duydang12',
            trackId: '629953536',
        },
        {
            title: 'duy. - black iced coffee please',
            author: 'duydang',
            trackUrl: 'https://soundcloud.com/duydang12/duy-black-iced-coffee-please',
            authorUrl: 'https://soundcloud.com/duydang12',
            trackId: '622004886',
        },
        {
            title: 'duy. - how love should be',
            author: 'duydang',
            trackUrl: 'https://soundcloud.com/duydang12/duy-how-love-should-be',
            authorUrl: 'https://soundcloud.com/duydang12',
            trackId: '639991659',
        },
        {
            title: 'duy. - snow',
            author: 'duydang',
            trackUrl: 'https://soundcloud.com/duydang12/snow-by-duang',
            authorUrl: 'https://soundcloud.com/duydang12',
            trackId: '549514155',
        },
        {
            title: 'DUDE! - Next Level',
            author: 'DUDE!',
            trackUrl: 'https://soundcloud.com/rioxmusic/dude-next-level',
            authorUrl: 'https://soundcloud.com/itsdude',
            trackId: '642318108',
        },
    ];
</script>

<Section>
    <h2 class="font-semibold">Hobby</h2>
    <p>Favourite side quest? Getting lost in music.</p>
    <ul class="grid grid-cols-[repeat(auto-fit,minmax(min(32rem,100%),1fr))] gap-4 mt-4">
        {#each hobbies as hobby}
            <li>
                <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    title={hobby.title}
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{hobby.trackId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=true&show_teaser=true"
                ></iframe>
                <div
                    style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
                >
                    <a
                        href={hobby.authorUrl}
                        title={hobby.author}
                        target="_blank"
                        style="color: #cccccc; text-decoration: none;">{hobby.author}</a
                    >
                    ·
                    <a href={hobby.trackUrl} title={hobby.title} target="_blank">{hobby.title}</a>
                </div>
            </li>
        {/each}
    </ul>
</Section>
