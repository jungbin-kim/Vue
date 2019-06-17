export const TARGET_COUNTRY = {
  KR: {
    code: "KR",
    name: "Korea, Republic of"
  },
  JP: {
    code: "JP",
    name: "Japan"
  },
  US: {
    code: "US",
    name: "United States of America"
  }
};

export const validCountry = code =>
  !!code && !!TARGET_COUNTRY[code.toUpperCase()];
