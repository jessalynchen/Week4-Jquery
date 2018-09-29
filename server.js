const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//where are all your static files, html, imgs
express().use(express.static('public'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
