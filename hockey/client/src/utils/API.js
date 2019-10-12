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

    load: function() {
        return axios.get("/login")
    }
}





