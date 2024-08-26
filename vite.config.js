import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/login.css',
                'resources/js/login.js',
                'resources/css/register.css',
                'resources/js/register.js',
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
