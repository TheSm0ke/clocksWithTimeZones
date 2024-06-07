import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastOptions, toast } from "react-toastify";

export interface TimeZone {
  timezone: number | string;
  name: string;
}

export interface TimeZones {
  timeZones: TimeZone[];
  isLoading: boolean;
}

const notify = (Message: string, type: ToastOptions<unknown>) =>
  toast(Message, { containerId: "A", ...type });

export const getTimeZonesFromServer = createAsyncThunk("", async () => {
  notify("Загруза часовых поясов", { type: "info" });
  const response: any = await fetch("http://127.0.0.1:3000/timezones.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((rep) => rep.json())
    .then((data) => {
      notify("Часовые пояса загружены успешно", { type: "success" });
      return data;
    })
    .catch((ex) => {
      console.log(ex);
      notify("Ошибка загрузки часовых поясов", { type: "error" });
    });
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
        if (action.payload === undefined) {
          state.isLoading = false;
          return;
        }
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
