/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    experimental: {
        serverActions: true,
        instrumentationHook: true,
    },
    // env: {
    //     DISCORD_ID: process.env.DISCORD_ID,
    //     DISCORD_SECRET: process.env.DISCORD_SECRET
    // },
}
