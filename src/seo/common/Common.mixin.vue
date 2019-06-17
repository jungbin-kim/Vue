<script>
import { TARGET_COUNTRY } from "./country";

export default {
  computed: {
    baseCountry() {
      const paramsCountry = this.$route.params.country;
      return paramsCountry
        ? TARGET_COUNTRY[paramsCountry.toUpperCase()]
        : TARGET_COUNTRY["KR"];
    },
    baseCountryUpper() {
      return this.baseCountry.code;
    },
    baseCountryLower() {
      return this.baseCountry.code.toLowerCase();
    },
    baseCountryName() {
      return this.baseCountry.name;
    }
  }
};
</script>
