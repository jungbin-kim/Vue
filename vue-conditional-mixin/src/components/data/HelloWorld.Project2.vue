<script>
export default {
  data() {
    return {
      list: [
        {
          text: "item1",
          innerList: [
            { text: "1-1 Apple1" },
            { text: "1-3 Apple3" },
            { text: "1-4 Apple4" }
          ]
        },
        {
          text: "item2 - Project2 Sepcial",
          innerList: [
            { text: "2-1 Apple Mango1" },
            { text: "2-2 Apple Mango2" },
            { text: "2-3 Apple Mango3" }
          ]
        },
        {
          text: "item3",
          innerList: [{ text: "3-2 Banana2" }, { text: "3-4 Banana4" }]
        },
        {
          text: "item4 for Project2"
        }
      ]
    };
  }
};
</script>
