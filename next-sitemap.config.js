/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.builtbydustin.dev",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404"],
}
