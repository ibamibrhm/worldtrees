const express = require('express')
const http = require('http')
const fs = require('fs')
const AdmZip = require('adm-zip')
const Papa = require('papaparse')
const moment = require('moment')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const router = express.Router()

const treeWorldBank = 'http://api.worldbank.org/v2/en/indicator/AG.LND.FRST.K2?downloadformat=csv'

router.get('/', async (_, res) => {
  try {
    await new Promise((resolve) => {
      http.get(treeWorldBank, resp => resp.pipe(fs.createWriteStream('./.tmp/data.zip'))
        .on('finish', () => {
          console.log('start')
          const zip = new AdmZip('./.tmp/data.zip');
          const zipEntries = zip.getEntries()

          const zipEntry = zipEntries.find(entry => entry.name.startsWith('API'))

          zip.extractEntryTo(zipEntry.entryName, './.tmp/', true, true, 'forest-raw.csv')

          const forestRaw = fs.readFileSync('./.tmp/forest-raw.csv', { encoding: 'utf8' })

          const forest = forestRaw.split('\n').slice(4).join('\n')

          fs.writeFileSync('./.tmp/forest.csv', forest)

          fs.unlinkSync('./.tmp/data.zip')
          fs.unlinkSync('./.tmp/forest-raw.csv')

          console.log('finish')
          resolve()
        })
      )
    })

    const file = fs.createReadStream('./.tmp/forest.csv');

    const currentWorld = await new Promise((resolve) => {
      Papa.parse(file, {
        delimiter: ',',
        newline: "",
        quoteChar: '"',
        escapeChar: '"',
        header: true,
        step: (result, parser) => {
          if (result.data['Country Name'] === 'World') {
            resolve(result.data)
            parser.abort()
          }
        },
      })
    })

    const treeInfo = {
      year: 0,
      tree_land_cover: 0,
      total_tree: 0
    };

    for (let key in currentWorld) {
      if (!isNaN(key) && currentWorld[key]) {
        treeInfo.tree_land_cover = Number(currentWorld[key])
        treeInfo.year = Number(key)
      }
    }

    const averageTreePerSqKM = 80000
    const totalWorldTrees = Math.round(averageTreePerSqKM * treeInfo.tree_land_cover)

    const cutDownTreePerYear = 15000000000
    const replantTreePerYear = 5000000000

    const marginTreePerYear = cutDownTreePerYear - replantTreePerYear

    const today = moment(new Date());
    const diff = today.diff(new Date(treeInfo.year, 11, 31), 'days')

    const currentTrees = totalWorldTrees - Math.round(marginTreePerYear / 365 * diff)

    treeInfo.total_tree = currentTrees

    await prisma.tree.create({
      data: treeInfo
    })

    console.log('end')

    res.status(201).json(currentWorld)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router