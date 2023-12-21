import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/css/app_desktop.css',
                'resources/css/app_mobile.css',
                'resources/css/app_tablet.css',
            ],

        }),
        react(),
    ],
});