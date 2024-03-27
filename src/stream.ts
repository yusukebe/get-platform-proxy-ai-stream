import type { Ai } from '@cloudflare/ai'

export const showStream = async (ai: Ai) => {
  console.log('ai.run()')
  const stream = (await ai.run('@cf/meta/llama-2-7b-chat-int8', {
    prompt: 'say hello!',
    stream: true
  })) as ReadableStream
  const reader = stream.getReader()
  const decoder = new TextDecoder()
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    console.log(decoder.decode(value))
  }
}
