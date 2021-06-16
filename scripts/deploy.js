/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

const fs = require('fs')

const { BosClient } = require('@baiducloud/sdk')
const fetch = require('node-fetch')


const bosUrl = 'http://bj.bcebos.com'
const bucket = process.env.BUILD_ENV === 'production' ? 'pntres' : 'pntresa'
const ak = process.env.BAIDU_CLOUD_AK
const sk = process.env.BAIDU_CLOUD_SK
const bosConfig = {
  credentials: {
    ak,
    sk,
  },
  endpoint: bosUrl,
}

const client = new BosClient(bosConfig)

function isFileExisted(url) {
  return fetch(url).then(res => res.status === 200)
}

async function uploadFile(bucket, key, path, url) {
  if (await isFileExisted(url)) {
    console.log('File already exitsted.', url)
    return
  }

  console.log('Uploading file:', { bucket, key, path, url })

  let retryTimes = 0
  do {
    try {
      const res = await client.putObjectFromFile(bucket, key, path)
      console.log(`File uploaded to ${url}`)
      return res
    } catch (error) {
      retryTimes++
      console.error(`${key} Retrying ${retryTimes} due to error:`, error)
      if (retryTimes >= 3) {
        process.exit(1)
      }
    }
  } while (retryTimes < 3)
}

function getFiles() {
  const jsFiles = fs.readdirSync('./dist/static/js')
    .filter(it => it.endsWith('.js'))
    .map(it => `static/js/${it}`)
  const cssFiles = fs.readdirSync('./dist/static/css')
    .filter(it => it.endsWith('.css'))
    .map(it => `static/css/${it}`)
  let imageFiles = []
  let mediaFiles = []
  let fontFiles = []
  try {
    imageFiles = fs.readdirSync('./dist/static/images')
      .map(it => `static/images/${it}`)
  } catch (error) {
    console.log('`./dist/static/images` is empty. Ignored.')
  }
  try {
    mediaFiles = fs.readdirSync('./dist/static/media')
      .map(it => `static/media/${it}`)
  } catch (error) {
    console.log('`./dist/static/media` is empty. Ignored.')
  }
  try {
    fontFiles = fs.readdirSync('./dist/static/fonts')
      .map(it => `static/fonts/${it}`)
  } catch (error) {
    console.log('`./dist/static/fonts` is empty. Ignored.')
  }

  return [
    ...jsFiles,
    ...cssFiles,
    ...imageFiles,
    ...mediaFiles,
    ...fontFiles,
  ]
}

async function upload(files) {
  try {
    for (const file of files) {
      const key = `res/cht/${file}`
      const url = `${process.env.PUBLIC_URL}/${file}`
      await uploadFile(bucket, key, `./dist/${file}`, url)
    }
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}


upload(getFiles())
