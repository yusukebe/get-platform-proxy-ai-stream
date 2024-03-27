import { getPlatformProxy } from 'wrangler'
import { Ai } from '@cloudflare/ai'
import { showStream } from './stream'

const { env, dispose } = await getPlatformProxy<{
  AI: any
}>()
const ai = new Ai(env.AI)

;(async () => {
  await showStream(ai)
  await dispose()
})()
