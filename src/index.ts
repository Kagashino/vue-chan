import { createApp } from 'https://unpkg.com/petite-vue?module';

const App = ({ name }: { name: string }) => ({
    message: `Hello ${name} !`
})

createApp({ App }).mount()
