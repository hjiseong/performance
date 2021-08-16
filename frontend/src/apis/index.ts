import { User } from "@src/types";
import { AuthAPI } from "./config";

// Sign In
export function signIn(user: User) {
  return AuthAPI.post("/signin", user);
}
export function signInWithFacebook() {
  return AuthAPI.get("/signin/facebook");
}
export function signInWithGoogle() {
  return AuthAPI.get("/signin/google");
}
export function signInWithTwitter() {
  return AuthAPI.get("/signin/twitter");
}
export function signInWithApple() {
  return AuthAPI.get("/signin/apple");
}
export function signInWithKakao() {
  return AuthAPI.get("/signin/kakao");
}
export function signInWithNaver() {
  return AuthAPI.get("/signin/naver");
}

// Sign Up
export function signUp(user: User) {
  return AuthAPI.post("/signup", user);
}
export function signUpWithFacebook() {
  return AuthAPI.get("/signup/facebook");
}
export function signUpWithGoogle() {
  return AuthAPI.get("/signup/google");
}
export function signUpWithTwitter() {
  return AuthAPI.get("/signup/twitter");
}
export function signUpWithApple() {
  return AuthAPI.get("/signup/apple");
}
export function signUpWithKakao() {
  return AuthAPI.get("/signup/kakao");
}
export function signUpWithNaver() {
  return AuthAPI.get("/signup/naver");
}

// Sign Out
export function signOut() {
  return AuthAPI.get("/signout");
}
