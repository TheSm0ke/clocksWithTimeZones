import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface TimeZone {
  timezone: number | string;
  name: string;
}

export interface TimeZones {
  timeZones: TimeZone[];
}

export const getTimeZonesFromServer = createAsyncThunk("", async () => {
  const response: any = await fetch("timezones.json")
    .then((rep) => rep.json())
    .then((data) => {
      return data;
    });
  return response;
});

const initialState: TimeZones = { timeZones: [] };

const timeZones = createSlice({
  name: "timeZones",
  initialState,
  reducers: {
    setTimeZones: (state: TimeZones, action: PayloadAction<TimeZone[]>) => {
      state.timeZones = action.payload.map((el) => {
        return el;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTimeZonesFromServer.fulfilled,
      (state, action: PayloadAction<TimeZone[]>) => {
        state.timeZones = action.payload.map((el) => {
          return el;
        });
      }
    );
  },
});

export const { setTimeZones } = timeZones.actions;

export default timeZones.reducer;
