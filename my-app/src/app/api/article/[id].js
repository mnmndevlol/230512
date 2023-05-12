// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDB } from "@/server/db";
import { ArticleModel } from "@/server/model/article";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "DELETE") {
    const id = req.query.id;
    console.log(id);

    const result = await ArticleModel.deleteOne({ _id: id });
    console.log(result);
    res.status(200).json(`success`);
  } else if (req.method === "PUT") {
    const id = req.query.id;
    console.log(id);

    const result = await ArticleModel.updateOne({ _id: id }, { ...req.body });
    console.log(result);
    res.status(200).json(`success`);
  } else {
    const id = req.query.id;
    console.log(id);
    const article = await ArticleModel.findOne({ _id: id });
    res.status(200).json(article);
  }
}
