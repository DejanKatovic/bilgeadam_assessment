import { rest } from "msw";

export const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "9452251",
          brand: "REVIEW",
          description: "Jumpsuit mit Ethnomuster",
          priceO: 39.95,
          priceR: 9.95,
          url: "https://www.fashionid.de/review/damen-jumpsuit-mit-ethnomuster-schwarz-9452251_7/",
          images: [
            "https://s3-eu-west-1.amazonaws.com/fid-media-prod/79831db6-6b07-410c-9c01-01a1eb3a65ac.jpg",
            "https://s3-eu-west-1.amazonaws.com/fid-media-prod/88cef2ba-a992-437f-b0f4-9f0eb4272057.png",
          ],
          sizes: ["XS", "S", "M", "L"],
        },
      ])
    );
  }),
];
