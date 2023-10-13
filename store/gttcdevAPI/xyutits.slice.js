import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xyutit_list = createAsyncThunk(
  "xyutits/api_v1_xyutit_list",
  async payload => {
    const response = await apiService.api_v1_xyutit_list(payload)
    return response.data
  }
)
export const api_v1_xyutit_create = createAsyncThunk(
  "xyutits/api_v1_xyutit_create",
  async payload => {
    const response = await apiService.api_v1_xyutit_create(payload)
    return response.data
  }
)
export const api_v1_xyutit_retrieve = createAsyncThunk(
  "xyutits/api_v1_xyutit_retrieve",
  async payload => {
    const response = await apiService.api_v1_xyutit_retrieve(payload)
    return response.data
  }
)
export const api_v1_xyutit_update = createAsyncThunk(
  "xyutits/api_v1_xyutit_update",
  async payload => {
    const response = await apiService.api_v1_xyutit_update(payload)
    return response.data
  }
)
export const api_v1_xyutit_partial_update = createAsyncThunk(
  "xyutits/api_v1_xyutit_partial_update",
  async payload => {
    const response = await apiService.api_v1_xyutit_partial_update(payload)
    return response.data
  }
)
export const api_v1_xyutit_destroy = createAsyncThunk(
  "xyutits/api_v1_xyutit_destroy",
  async payload => {
    const response = await apiService.api_v1_xyutit_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xyutitsSlice = createSlice({
  name: "xyutits",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_xyutit_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyutit_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyutit_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyutit_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyutit_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyutit_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyutit_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyutit_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_xyutit_list,
  api_v1_xyutit_create,
  api_v1_xyutit_retrieve,
  api_v1_xyutit_update,
  api_v1_xyutit_partial_update,
  api_v1_xyutit_destroy,
  slice: xyutitsSlice
}
