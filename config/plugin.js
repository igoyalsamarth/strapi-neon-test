module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "kmgc17piz21ix3c7ke6ig7jk40tpfrdpo6ddjv1c4sp29nr8q7ao3j8mafreh8so", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "strapi-test", // the neon project under wich your DB runs
        neonRole: "samarth.goyal1999", // create it manually under roles for your project first
        //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    },

  }