import LanguageSelect from "@/components/LanguageSelect";
import NewsCard from "@/components/NewsCard";
import { useNewsListing } from "@/providers/NewsListing";
import Card from "@/theme/Card";
import qs from "qs";
import Loader from "@/theme/Loader/Circular";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import QueryCheckbox from "@/components/QueryCheckbox";
import ThemeSelect from "@/components/ThemeSelect";
import { ColorModeContext } from "@/theme/Provider";
import { subDays } from "date-fns";
import FormattedMessage from "@/theme/FormattedMessage";
import messages from "./messages";

export default function NewsListingScreen() {
  const router = useRouter();

  const pathname = usePathname();
  const query = useSearchParams();

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const parsedQuery = qs.parse(query.toString()) as any;

  const [from] = subDays(new Date(), 7).toISOString().split(".");
  const [filters, setFilters] = useState<any>(
    !Object.keys(parsedQuery).length
      ? {
          language: parsedQuery?.language || "en",
          query: parsedQuery?.query || "apple",
        }
      : parsedQuery
  );

  useEffect(() => {
    const queryParams = { ...parsedQuery, ...filters };
    router.replace(
      pathname +
        (Object.keys(queryParams).length
          ? "?" + qs.stringify(queryParams, { arrayFormat: "repeat" })
          : "")
    );
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, filters]);

  const newsListing = useNewsListing({
    ...(filters || {}),
    from,
  });

  return (
    <Box
      sx={{
        direction: filters?.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",

          gap: (theme) => theme.spacing(2),
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        <ThemeSelect
          selectedValue={theme.palette.mode}
          onChange={() => colorMode.toggleColorMode()}
        />

        <LanguageSelect
          selectedValue={filters?.language}
          onChange={(value) => setFilters({ ...filters, language: value })}
        />
      </Box>
      <QueryCheckbox
        selectedValues={[filters.query]}
        onChange={([value]) => setFilters({ ...filters, query: value })}
      />

      {newsListing.isFetching && <Loader />}
      {newsListing.isFetched &&
        !newsListing.isError &&
        !newsListing?.data?.articles?.length && (
          <Card>
            <Box sx={{ textAlign: "center" }}>
              <FormattedMessage {...messages.notFound} />
            </Box>
          </Card>
        )}
      {!!newsListing?.data?.articles?.length &&
        newsListing.data?.articles?.map((news) => {
          return <NewsCard key={news.title} news={news} />;
        })}
      {newsListing.isError && (
        <Box sx={{ textAlign: "center" }}>
          <FormattedMessage {...messages.error} />
        </Box>
      )}
    </Box>
  );
}
