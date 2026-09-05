module.exports = {
  apps : [
    {
      "ignore_watch" : [
        "node_modules",
        "local_cache"
      ],
      "watch_options": {
        "followSymlinks": false,
      },


      script  : "./index.js",
      watch   : true,
      name    : "App Space"
    }
  ]
}
