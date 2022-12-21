module.exports = {
    // Deployment Configuration
    deploy: {
        production: {
            user: 'virt53516',
            host: 'pitsakohvik.ee',
            ref: 'origin/main',
            repo: 'git@github.com:raunotal/tapa-pitsakohvik-client-php.git',
            ssh_options: ['ForwardAgent=yes'],
            path: '/data01/virt53516/domeenid/www.pitsakohvik.ee/deploys/pitsakohvik-client',
            'post-deploy': 'echo DONE!',
        },
    },
};
