var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jrobichaud/theconqueror-activity-converter.git',
        user: {
            name: 'Jules Robichaud-Gagnon',
            email: 'j.robichaudg@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
