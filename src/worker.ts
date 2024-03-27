import { Ai } from '@cloudflare/ai'
import { showStream } from './stream'

export default {
  fetch: async (_req, env) => {
    const ai = new Ai(env.AI)
    await showStream(ai)
    return new Response('Done')
  }
} satisfies ExportedHandler<{ AI: any }>
