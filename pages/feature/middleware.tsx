
export const getServerSideProps = (async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/6`)
    const pokemon = await res.json()

    return {
        props: {
            image: pokemon.sprites.other.home.front_default,
            name: pokemon.name,
        },
    }
})

export default function Home() {


    return (
        <div className="h-full flex flex-col justify-center items-center">
            <p className="text-5xl underline">Testing Next.js Middleware Redirect</p>
            <p className="text-2xl pt-4 text-gray-300">URL should contain <code>status=SUCCESS</code></p>
        </div>
    );
}
