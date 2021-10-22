// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  steps: Array<{
    startURL: string;
    endURLRegexp: string;
  }>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.headers.host)
  const host = req.headers.host
  res.status(200).json({
    steps: [
      {
        startURL: `https://${host}/pin-start`,
        endURLRegexp: `^https://${host}/pin-complete$`,
      },
      {
        startURL: `https://${host}/anvil-start`,
        endURLRegexp: `^https://${host}/anvil-complete$`,
      },
    ],
  })
}
