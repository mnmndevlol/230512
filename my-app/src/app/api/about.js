// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "어차피안쓸놈",
    title: "어차피안쓸제목",
    content: "axios로 가져온 글 입니다,",
  });
}
