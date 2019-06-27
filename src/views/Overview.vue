<template>
  <div class="overview">
    <img :src="overviewLogo" class="overviewImg" alt>
    <main>
      <h2>WHY A DISPLACEMENT TOOLKIT FOR GREATER BOSTON?</h2>
      <p>
        Our communities (Chelsea and Everett, MA) are facing a lot of pressure from developers, which has resulted in land being lost, housing prices
        and rent increasing, forcing residents and small businesses to be
        pushed out, or displaced. Displacement has many negative effects on
        individuals, families and communities. See here for a short video on
        some of these, including impacts on health, educational outcomes,
        and community power. We wanted to create a guide for community
        members to work together to protect & preserve their communities.
      </p>
      <Toolkit :workshops="overviewToolkit"></Toolkit>
    </main>
    <!-- <div>{{toolkits}}</div> -->
  </div>
</template>

<script>
import Toolkit from "./../components/Toolkit";
import { mapState } from "vuex";
// @ is an alias to /src

export default {
  // "workshopName",
  //   "workshopQuestion",
  //   "workshopImg",
  //   "workshopNum",
  //   "workshopColor"
  name: "Overview",
  components: {
    Toolkit
  },
  data() {
    return {
      workshops: [
        {
        name: "workshopName",
        question: "workshopQuestion",
        img: require("./../assets/2.jpg"),
        num: "workshopNum",
        color: "#CA1452"
      }
      ]
    };
  },
  computed: {
    ...mapState(["overviewToolkit", "overviewLogo"])
  }
};
</script>
