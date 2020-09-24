const project = {
    projects: [
    {
        image: "./resources/EmCapo.jpg",
        name: 'Wedding Page',
        code: 'https://github.com/Connor406/wedding-scrinzi',
        app: 'https://connor406.github.io/wedding-scrinzi/'
    },
    {
        image: "./resources/nelp.jpg",
        name: 'Nelp App',
        code: 'https://github.com/Connor406/nelp',
        app: 'https://connor406.github.io/nelp/'
    },
    {
        image: './resources/IMG_3589.jpg',
        name: 'Site Code',
        code:'https://github.com/Connor406/Connor406.github.io'
    }
    ]
};

const templateElement = document.getElementById('templateHB');

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(project);

document.getElementById('project-container').innerHTML = compiledHtml;
