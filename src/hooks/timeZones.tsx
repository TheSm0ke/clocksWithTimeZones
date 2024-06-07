import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface TimeZone {
  timezone: number | string;
  name: string;
}

export interface TimeZones {
  timeZones: TimeZone[];
  isLoading: boolean;
}

const succes = () => toast("Timezones loaded", { containerId: "A", type: "success" });

export const getTimeZonesFromServer = createAsyncThunk("", async () => {
  const response: any = await fetch("http://127.0.0.1:3000/timezones.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((rep) => {
      console.log(rep);
      return rep.json();
    })
    .then((data) => {
      succes();
      return data;
    })
    .catch((ex) => {});
  return response;
});

const initialState: TimeZones = { timeZones: [], isLoading: true };

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
        state.isLoading = true;
        state.timeZones = action.payload.map((el) => {
          return el;
        });
        state.isLoading = false;
      },
    );
  },
});

export const { setTimeZones } = timeZones.actions;

export default timeZones.reducer;
