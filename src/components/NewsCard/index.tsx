import Card from "@/theme/Card";
import { Box } from "@mui/material";
import Image from "next/image";
import format from "date-fns/format";
import { getFormattedDate } from "@/utils";
import images from "@/assets/images";

interface NewsCardProps {
  news: Article;
}
export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: (theme) => theme.spacing(2),
        }}
        onClick={() => {
          window.open(news.url);
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          {news?.urlToImage ? (
            <Image
              src={news.urlToImage}
              alt={news.title}
              width={200}
              height={200}
            />
          ) : (
            <Image
              src={images.ImageNotFound}
              alt=""
              width={200}
              height={200}
              objectFit="contain"
            />
          )}
        </Box>
        <Box
          sx={{
            "*": {
              textDecoration: "none",
              color: "inherit",
            },
          }}
        >
          <Box sx={{ fontWeight: "bold", fontSize: "18px" }}>{news.title}</Box>
          <Box>{news.description}</Box>
          <Box>{news.author}</Box>
          <Box>{getFormattedDate(new Date(news.publishedAt))}</Box>
        </Box>
      </Box>
    </Card>
  );
}
