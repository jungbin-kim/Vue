<script>
export default {
  data() {
    return {
      list: [
        {
          text: "Dummy.Default item1",
          innerList: [
            { text: "1-1 Apple1" },
            { text: "1-2 Apple2" },
            { text: "1-3 Apple3" },
            { text: "1-4 Apple4" }
          ]
        },
        {
          text: "Dummy.Default item2"
        },
        {
          text: "Dummy.Default item3",
          innerList: [
            { text: "3-1 Banana1" },
            { text: "3-2 Banana2" },
            { text: "3-3 Banana3" },
            { text: "3-4 Banana4" }
          ]
        }
      ]
    };
  }
};
</script>
