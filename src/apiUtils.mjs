import axios from "axios";

import { clientId } from "./config";
import { secretKey } from "./config";

const getTopStreamsURL = "https://api.twitch.tv/helix/streams";

export const fetchTopStreams = async () => {
  try {
    const response = await axios.get(getTopStreamsURL, {
      headers: {
        "Client-Id": clientId,
        Authorization: secretKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching from API");
  }
};

const getTopGamesURL = "https://api.twitch.tv/helix/games/top";

export const fetchTopGames = async () => {
  try {
    const response = await axios.get(getTopGamesURL, {
      headers: {
        "Client-Id": clientId,
        Authorization: secretKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching from API");
  }
};

export const fetchUserVideos = async (user_id) => {
  const url = `https://api.twitch.tv/helix/videos?user_id=${user_id}`;
  try {
    const response = await axios.get(url, {
      headers: {
        "Client-Id": clientId,
        Authorization: secretKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching from API");
  }
};
