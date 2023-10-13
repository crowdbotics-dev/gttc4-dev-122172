import axios from "axios"
const gttcdevAPI = axios.create({
  baseURL: "https://gttc4-dev-122172.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return gttcdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cdrer_list(payload) {
  return gttcdevAPI.get(`/api/v1/cdrer/`)
}
function api_v1_cdrer_create(payload) {
  return gttcdevAPI.post(`/api/v1/cdrer/`, payload)
}
function api_v1_cdrer_retrieve(payload) {
  return gttcdevAPI.get(`/api/v1/cdrer/${payload.id}/`)
}
function api_v1_cdrer_update(payload) {
  return gttcdevAPI.put(`/api/v1/cdrer/${payload.id}/`, payload)
}
function api_v1_cdrer_partial_update(payload) {
  return gttcdevAPI.patch(`/api/v1/cdrer/${payload.id}/`, payload)
}
function api_v1_cdrer_destroy(payload) {
  return gttcdevAPI.delete(`/api/v1/cdrer/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return gttcdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return gttcdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_xyutit_list(payload) {
  return gttcdevAPI.get(`/api/v1/xyutit/`)
}
function api_v1_xyutit_create(payload) {
  return gttcdevAPI.post(`/api/v1/xyutit/`, payload)
}
function api_v1_xyutit_retrieve(payload) {
  return gttcdevAPI.get(`/api/v1/xyutit/${payload.id}/`)
}
function api_v1_xyutit_update(payload) {
  return gttcdevAPI.put(`/api/v1/xyutit/${payload.id}/`, payload)
}
function api_v1_xyutit_partial_update(payload) {
  return gttcdevAPI.patch(`/api/v1/xyutit/${payload.id}/`, payload)
}
function api_v1_xyutit_destroy(payload) {
  return gttcdevAPI.delete(`/api/v1/xyutit/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return gttcdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return gttcdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return gttcdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return gttcdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return gttcdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return gttcdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return gttcdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return gttcdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return gttcdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return gttcdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return gttcdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cdrer_list,
  api_v1_cdrer_create,
  api_v1_cdrer_retrieve,
  api_v1_cdrer_update,
  api_v1_cdrer_partial_update,
  api_v1_cdrer_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_xyutit_list,
  api_v1_xyutit_create,
  api_v1_xyutit_retrieve,
  api_v1_xyutit_update,
  api_v1_xyutit_partial_update,
  api_v1_xyutit_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
