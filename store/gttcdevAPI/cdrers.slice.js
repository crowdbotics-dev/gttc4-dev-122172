import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cdrer_list = createAsyncThunk(
  "cdrers/api_v1_cdrer_list",
  async payload => {
    const response = await apiService.api_v1_cdrer_list(payload)
    return response.data
  }
)
export const api_v1_cdrer_create = createAsyncThunk(
  "cdrers/api_v1_cdrer_create",
  async payload => {
    const response = await apiService.api_v1_cdrer_create(payload)
    return response.data
  }
)
export const api_v1_cdrer_retrieve = createAsyncThunk(
  "cdrers/api_v1_cdrer_retrieve",
  async payload => {
    const response = await apiService.api_v1_cdrer_retrieve(payload)
    return response.data
  }
)
export const api_v1_cdrer_update = createAsyncThunk(
  "cdrers/api_v1_cdrer_update",
  async payload => {
    const response = await apiService.api_v1_cdrer_update(payload)
    return response.data
  }
)
export const api_v1_cdrer_partial_update = createAsyncThunk(
  "cdrers/api_v1_cdrer_partial_update",
  async payload => {
    const response = await apiService.api_v1_cdrer_partial_update(payload)
    return response.data
  }
)
export const api_v1_cdrer_destroy = createAsyncThunk(
  "cdrers/api_v1_cdrer_destroy",
  async payload => {
    const response = await apiService.api_v1_cdrer_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cdrersSlice = createSlice({
  name: "cdrers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_cdrer_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdrer_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdrer_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdrer_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdrer_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdrer_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdrer_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdrer_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_cdrer_list,
  api_v1_cdrer_create,
  api_v1_cdrer_retrieve,
  api_v1_cdrer_update,
  api_v1_cdrer_partial_update,
  api_v1_cdrer_destroy,
  slice: cdrersSlice
}
