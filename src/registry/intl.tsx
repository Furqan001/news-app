"use client";

import { useState } from "react";

import { RawIntlProvider, createIntl, createIntlCache } from "react-intl";

import messages from "@/messages/en.json";

const cache = createIntlCache();

const locale = "en";

export default function IntlRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [intl] = useState(createIntl({ locale, messages }, cache));

  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}
