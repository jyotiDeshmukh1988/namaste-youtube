export const GOOGLE_API_KEY = "AIzaSyADhuMSswx4EqfZsajYPYLgwe23rYnWJCo";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SINGLE_YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
