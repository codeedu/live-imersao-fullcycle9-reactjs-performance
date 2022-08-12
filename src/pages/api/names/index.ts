// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { externalHttp } from "../../../utils/http";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _page = 1, _limit = 5 } = req.query;
  const { data, headers } = await externalHttp.get(
    `names?_limit=${_limit}&_page=${_page}`
  );
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59"); 
  res.setHeader("X-Total-Count", headers["x-total-count"]);
  res.status(200).json(data);
}
