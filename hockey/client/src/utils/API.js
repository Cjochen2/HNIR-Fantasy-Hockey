import axios from "axios";

export default {
    updatePlayer: function (playerData) {
        return axios.put("/api/players", playerData)
    }
}