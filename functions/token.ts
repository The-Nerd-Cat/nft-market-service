import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'

const token: APIGatewayProxyHandler = async (event, _context) => {
  try {
    const { id } = event.queryStringParameters

    const tokenProps = [
      {},
      {
        name: 'Robot 1',
        image: `https://ipfs.io/ipfs/QmaaQt327jybnvy8WGf5uWMv13JWssdWwrWWTpDLzXpZ8P`,
        description: 'Description for Robot 1',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 2',
        image: `https://ipfs.io/ipfs/QmP6uRGJQdWLvBuQinctGFSyKu7hnXq86eN4xyHYX9rH2F`,
        description: 'Description for Robot 2',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 3',
        image: `https://ipfs.io/ipfs/QmR52czhWnKxRjkmQtZV8RHiuWwXGn6YLgn7iiSond9P5M`,
        description: 'Description for Robot 3',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 4',
        image: `https://ipfs.io/ipfs/QmX9vX1L4BALWocqXVHx8jjnBdZDW14wPvJqfH7AtMBCZs`,
        description: 'Description for Robot 4',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 5',
        image: `https://ipfs.io/ipfs/QmTwuWoWuWv99vJFq3AmxqbnoQ33EmGRbng7UGGUwuhYfF`,
        description: 'Description for Robot 5',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 6',
        image: `https://ipfs.io/ipfs/Qme5fTXt2M1UdcMGyV34etXTCJ2gvv9NPE4LTwZivRYhuH`,
        description: 'Description for Robot 6',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 7',
        image: `https://ipfs.io/ipfs/QmRvEt8RTqe9VaGHuDkarFasT1Ee1KPk8GdnQUG3AoeKqm`,
        description: 'Description for Robot 7',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 8',
        image: `https://ipfs.io/ipfs/QmasymyYAJJgk2xU19DoaJuLD9wJUVNAx7UMRkxymQPjRg`,
        description: 'Description for Robot 8',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 9',
        image: `https://ipfs.io/ipfs/Qmf558hiUvMqQCtgVdqfDvMTJn16Zyn3ZCrTbeWAn9eAqh`,
        description: 'Description for Robot 9',
        external_url: 'https://lvr.com/',
      },
      {
        name: 'Robot 10',
        image: `https://ipfs.io/ipfs/QmfUtj4EANVpG1tnN4DBNGSwq4cz8JEXRZra5mv5SUUZpp`,
        description: 'Description for Robot 10',
        external_url: 'https://lvr.com/',
      },
    ]

    return {
      statusCode: 200,
      body: JSON.stringify(tokenProps[id]),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}

export default token
