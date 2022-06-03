type ResponseObject = {
  code: number;
  msg: string;
  data?: any;
  errors?: any;
};
type Status = {
  ACTIVE: string;
  DEAD: string;
  UNKNOWN: string;
};

type Gender = {
  MALE: string;
  FEMALE: string;
};

type Character = {
  firstName: string;
  lastName: string;
  status: Status;
  gender: Gender;
  stateOfOrigin?: string;
  location?: Location;
  episodes?: Array<Episode>;
};

type Location = {
  name: string;
  latitude: number;
  longitude: number;
};

type Episode = {
  name: string;
  code: string;
  characters?: Array<Character>;
  comments?: Array<Comment>;
  releaseDate: Date;
};

type Comment = {
  comment: string;
  ipAddressLocation: string | undefined | null;
  episodeId?: number;
};

type CharacterEpisode = {
  episodeId: number;
  characterId: number;
};

export {
  Character,
  CharacterEpisode,
  Comment,
  Location,
  Episode,
  Gender,
  Status,
  ResponseObject,
};
