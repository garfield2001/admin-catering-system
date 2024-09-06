import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/auth.css',
                'resources/css/dashboard.css',
                'resources/js/auth.js',
                'resources/js/dashboard.js'
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@admin-lte': path.resolve(__dirname, 'vendor/almasaeed2010/adminlte'),
        },
    },
});
