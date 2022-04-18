import request from "./getData";

type UserType = {
  email: string;
  password: string;
  status?: number;
};
type BookmarkType = {
  _id: string | null;
  _key?: string | null;
};

// 로그인
export async function login(data: UserType) {
  return request("/user/login", "POST", data);
}

// 회원가입
export async function signup(data: UserType) {
  return request("/user", "POST", data);
}

// 북마크한 게시물 조회
export async function getBookmarkList({ _id }: BookmarkType) {
  return request("/user/bookmark", "POST", _id);
}

// 게시물에 북마크 추가
export async function addBookmark({ _id, _key }: BookmarkType) {
  return request(`/user/bookmark/${_key}`, "POST", { _id });
}

// 게시물에 북마크 삭제
export async function removeBookmark({ _id, _key }: BookmarkType) {
  return request(`/user/bookmark/${_key}`, "DELETE", { _id });
}
