/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    env: {
        DISCORD_ID: process.env.DISCORD_ID,
        DISCORD_SECRET: process.env.DISCORD_SECRET
    },
}
