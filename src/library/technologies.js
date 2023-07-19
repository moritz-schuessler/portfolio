const technologiesArray = [
    {id: 1, name: 'html', icon: 'html5'},
    {id: 2, name: 'css', icon: 'css3'},
    {id: 3, name: 'tailwindcss', icon: 'tailwindcss'},
    {id: 4, name: 'javascript', icon: 'javascript'},
    {id: 5, name: 'react', icon: 'react'},
    {id: 6, name: 'next', icon: 'nextjs'},
    {id: 7, name: 'svelte', icon: 'svelte'},
    {id: 8, name: 'astro', icon: 'astro'},
    {id: 9, name: 'gsap', icon: 'gsap'},
]

const technologies = (topics) => {
    const filteredTechnologies = filterTechnologies(topics)
    return sortTechnologies(filteredTechnologies);
}

const filterTechnologies = (topics) => {
    return topics.map(topic => {
        const technology = technologiesArray.find(technology => {
            return topic === technology.name
        })
        return technology || {id: Infinity, name: topic, Icon: null}
    })
}

const sortTechnologies = (technologies) => {
    return technologies.sort((a, b) => a.id - b.id)
}

export default technologies