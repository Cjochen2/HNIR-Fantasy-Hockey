import axios from "axios";
export default {
    addPlayer: function (playerData) {
        const requestBody = {
            player: playerData,
            where: { name: playerData.name }
        }
        return axios.post("/api/players", requestBody)
    },

    getPlayers: function () {
        return axios.get("/api/players")

    },

    getGoals: function () {
        return axios.get("/api/standings/goals")
    },

    getAssists: function () {
        return axios.get("/api/standings/assists")
    },

    getPoints: function () {
        return axios.get("/api/standings/points")
    },

    getUserTeams: function () {
        return axios.get("/api/standings/userTeams")
    },

    getLeagueTeams: function () {
        return axios.get("/api/standings/leagueTeams")
    },

    load: function () {
        return axios.get("/login")
    },

    logout: function () {
        return axios.get("/login/logout")
    },

    saveTeam: function (teamData, teamName) {
        const requestBody = {
            team: teamData,
            userTeam: teamName
        }
        return axios.post("/api/team", requestBody)
    },
}





