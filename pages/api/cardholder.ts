// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  steps: Array<{
    startURL: string;
    endURLRegexp: string;
    endURLRegexps: Array<string>;
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
        startURL: `https://app.useanvil.com/form/ganaz/cardholder/NNrKrvXwdsILA6qfUWp3/1`,
        endURLRegexp: `^https://${host}/anvil-complete$`,
        endURLRegexps: [
          `^https://${host}/anvil-not-complete$`,
          `^https://${host}/anvil-complete$`
        ],
      },
      {
        startURL: `https://${host}/pin-start`,
        endURLRegexp: `^https://${host}/pin-complete$`,
        endURLRegexps: [`^https://${host}/pin-complete$`],
      },
    ],
  })
}
