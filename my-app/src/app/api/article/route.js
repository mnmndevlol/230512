// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDB } from "@/server/db";
import { ArticleModel } from "@/server/model/article";
import { NextResponse } from "next/server";
export async function GET() {
  const article = await ArticleModel.find();
  console.log(article);

  return NextResponse.json(article);
}
export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const title = req.body.title;
    const content = req.body.content;
    const imageUrl = req.body.imageUrl;
    const author = req.body.author;
    const authorImage = req.body.authorImage;
    console.log(title, content, imageUrl, author, authorImage);
    await ArticleModel.create({
      title,
      content,
      imageUrl,
      author,
      authorImage,
      date: new Date(),
    });
    res.status(200).json({});
  } else {
    const article = await ArticleModel.find();
    console.log(article);
    res.status(200).json(article);
  }
}
