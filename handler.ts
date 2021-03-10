import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import fetch from 'node-fetch'
import IpfsClient from 'ipfs-http-client'

export const mint: APIGatewayProxyHandler = async (event, _context) => {
  try {
    const { objectsToBeMinted } = JSON.parse(event.body)
    if (!objectsToBeMinted) {
      throw new Error('No objects to be minted')
    }

    const client = IpfsClient({
      host: 'localhost',
      port: 5001,
      protocol: 'http',
    })

    const objectsIPFS: string[] = await Promise.all(
      objectsToBeMinted.map(async name => {
        try {
          const buffer = Buffer.from(
            await (await fetch(`https://robohash.org/${name}.png`)).arrayBuffer(),
            'base64'
          )

          const { path } = await client.add({
            content: buffer,
          })

          return { path, name }
        } catch (e) {
          throw new Error(e)
        }
      })
    )

    return {
      statusCode: 200,
      body: JSON.stringify(objectsIPFS),
    }
  } catch (e) {
    console.log(e)

    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}
