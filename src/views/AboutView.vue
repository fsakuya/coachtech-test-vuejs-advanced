<template>
  <div class="about">
    <h2>current team: {{ teamName }}</h2>
    <div class="click">
    <button v-on:click="clickCounter">counter</button>
    </div>
    <p>{{ $store.state.sum }}</p>
    <p>Last team name clicked: {{ $store.state.lastTeam }}</p>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ],
    };
  },
  computed: {
    teamName() {
      const teamId = this.$route.query.teamId;
      const team = this.teams.find(function (teams) {
        return teams.id === teamId;
      });
      return team ? team.name : "not found";
    },
  },
  methods: {
    clickCounter() {
      this.$store.commit("incrementCounter");
      this.$store.commit("updateSelectedTeamName", this.teamName);
    },
  },
};
</script>
