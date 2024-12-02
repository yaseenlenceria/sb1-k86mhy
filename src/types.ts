export interface TikTokResponse {
  code: number;
  msg: string;
  processed_time: number;
  data: {
    aweme_id: string;
    id: string;
    title: string;
    cover: string;
    duration: number;
    play: string;
    wmplay: string;
    size: number;
    wm_size: number;
    music: string;
    music_info: {
      id: string;
      title: string;
      play: string;
      cover: string;
      author: string;
      duration: number;
    };
  };
}